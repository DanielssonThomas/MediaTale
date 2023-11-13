import UploadAvatar from "@/components/EditProfile/UploadAvatar";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { PostgrestError } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const title = String(formData.get("title"));
  const description = String(formData.get("description"));
  const text_content = String(formData.get("text_content"));
  const file: File | null = formData.get("image") as unknown as File;
  const bytes = await file.arrayBuffer();
  const image = Buffer.from(bytes);

  const supabase = createRouteHandlerClient({ cookies });
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (user) {
    const { data: userProfile }: { data: profile | null } = await supabase
      .from("profiles")
      .select("*")
      .match({ user_id: user.id })
      .single();

    const { data: post }: { data: post | null } = await supabase
      .from("posts")
      .insert({
        title: title,
        description: description,
        text_content: text_content,
        created_by_username: userProfile?.username,
        created_by_uuid: userProfile?.user_id,
      })
      .select()
      .single();

    if (post === null) {
      return NextResponse.json({ error: true });
    }

    const { data: postStatistic, error: postStatisticError } = await supabase
      .from("posts_statistics")
      .insert({
        created_by: user.id,
        post_id: post.id,
        profile_id: userProfile?.id,
      });

    if (file.size !== 0) {
      const { data, error } = await supabase.storage
        .from("uploads")
        .upload(`${post.id}`, image);

      if (error) return NextResponse.json({ error: true });

      const imagePath = await supabase.storage
        .from("uploads")
        .getPublicUrl(data.path);

      const updatePost = await supabase
        .from("posts")
        .update({ image_url: imagePath.data.publicUrl })
        .match({ id: post.id });
    }

    return NextResponse.json({ postUrl: `/post/${post.id}` });
  }

  if (error) {
    return NextResponse.json({ error: error });
  }

  return NextResponse.json({ message: "completed" });
}
