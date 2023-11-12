import {
  getProfileById,
  getSignedInUser,
} from "@/app/utils/supabase-queries/queries";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const updateProfileTable = async ({
  url,
  user_id,
}: {
  url: string;
  user_id: string | undefined;
}) => {
  const supabase = createRouteHandlerClient({ cookies });
  const { error } = await supabase
    .from("profiles")
    .update({ avatar_url: url })
    .match({ user_id: user_id });
  if (error) console.log("updateProfileTable error: ", error);
};

export async function POST(req: Request) {
  const supabase = createRouteHandlerClient({ cookies });
  const res = await req.formData();
  const file: File | null = res.get("avatar") as unknown as File;
  const bytes = await file.arrayBuffer();
  const avatar = Buffer.from(bytes);

  const user = await getSignedInUser();

  const profile = await getProfileById({ user_id: user?.id });

  if (profile?.avatar_url !== null) {
    const { error } = await supabase.storage
      .from("avatars")
      .remove([`${user?.id}`]);
    if (error === null) {
      const { data, error } = await supabase.storage
        .from("avatars")
        .upload(`${user?.id}`, avatar);

      if (error) {
        console.log("Profile update error: ", error);
        return NextResponse.json({
          error: true,
          message: "Couln't upload image",
        });
      }
      const avatarPath = await supabase.storage
        .from("avatars")
        .getPublicUrl(data.path);
      updateProfileTable({ url: avatarPath.data.publicUrl, user_id: user?.id });
      return NextResponse.json({ error: false, message: "Upload successful" });
    }

    if (error) {
      console.log("Profile delete error: ", error);
      return NextResponse.json({
        error: true,
        message: "Couln't upload image",
      });
    }
  }

  const { data, error } = await supabase.storage
    .from("avatars")
    .upload(`${user?.id}/`, avatar);

  if (error) {
    console.log("error: ", error);
    return NextResponse.json({
      error: true,
      message: "Couln't upload image",
    });
  }
  const avatarPath = await supabase.storage
    .from("avatars")
    .getPublicUrl(data.path);
  updateProfileTable({ url: avatarPath.data.publicUrl, user_id: user?.id });
  return NextResponse.json({ error: false, message: "Upload successful" });
}
