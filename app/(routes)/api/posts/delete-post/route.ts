import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const requestUrl = new URL(req.url);
  const supabase = createRouteHandlerClient({ cookies });
  const formData = await req.formData();
  const post_id = String(formData.get("post_id"));

  const { error } = await supabase
    .from("posts")
    .delete()
    .match({ id: post_id });

  if (error) {
    console.log(error);
    return NextResponse.redirect(`${requestUrl.origin}`, { status: 301 });
  }
  return NextResponse.redirect(`${requestUrl.origin}`, { status: 301 });
};
