import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const supabase = createRouteHandlerClient({ cookies });
  const formData = await req.formData();
  const requestUrl = new URL(req.url);
  const post_id = Number(formData.get("post_id"));

  const { data, error } = await supabase.rpc("increment_post_view", {
    targetid: post_id,
  });

  if (error) {
    console.log("Increment error: ", error);
  }

  console.log("Increment view count data: ", data);

  return NextResponse.redirect(`${requestUrl.origin}/post/${post_id}`, {
    status: 301,
  });
};
