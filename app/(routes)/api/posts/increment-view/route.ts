import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const supabase = createRouteHandlerClient({ cookies });
  const reqData: any = await req.json();
  const { post_id } = await reqData;

  const { data, error } = await supabase.rpc("increment_post_view", {
    targetid: post_id,
  });

  if (error) {
    console.log("Increment error: ", error);
    return NextResponse.json({ error: true });
  }

  return NextResponse.json({ error: false });
};
