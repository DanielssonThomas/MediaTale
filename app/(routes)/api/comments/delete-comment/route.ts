import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const requestUrl = new URL(req.url);
  const supabase = createRouteHandlerClient({ cookies });
  const formData = await req.formData();
  const comment_id = String(formData.get("comment_id"));
  const post_id = Number(formData.get("post_id"));

  const { error } = await supabase
    .from("comments")
    .delete()
    .match({ id: comment_id });
  if (error) {
    console.log(error);
    return NextResponse.redirect(`${requestUrl.origin}/post/${post_id}`, {
      status: 301,
    });
  }
  return NextResponse.redirect(`${requestUrl.origin}/post/${post_id}`, {
    status: 301,
  });
};
