import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export const POST = async (request: Request) => {
  console.log("ENTERED POST REQUEST FOR COMMENT CREATION");
  const supabase = createRouteHandlerClient({ cookies });
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const post_id = formData.get("post_id");
  const profile_id = formData.get("profile_id");
  const comment = formData.get("comment");

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { error } = await supabase.from("comments").insert({
    post_id: post_id,
    comment: comment,
    user_id: user?.id,
    profile_id: profile_id,
  });

  if (error) {
    return NextResponse.redirect(
      `${requestUrl.origin}/post/${post_id}?message=Failed to post comment`,
      {
        status: 301,
      }
    );
  }

  return NextResponse.redirect(
    `${requestUrl.origin}/post/${post_id}?message=Posted comment`,
    {
      status: 301,
    }
  );
};
