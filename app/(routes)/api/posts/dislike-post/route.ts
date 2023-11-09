import {
  getProfileById,
  getSignedInUser,
} from "@/app/utils/supabase-queries/queries";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const supabase = createRouteHandlerClient({ cookies });
  const formData = await req.formData();
  const post_id = Number(formData.get("post_id"));

  const user = await getSignedInUser();
  const profile = await getProfileById({ user_id: user?.id });

  const { error } = await supabase.from("post_event").insert({
    profile_id: profile?.id,
    post_id: post_id,
    like_bool: false,
    dislike: true,
  });

  if (error) {
    return NextResponse.json({ status: "failed", error: error });
  }

  return NextResponse.json({ status: "success", error: false });
};
