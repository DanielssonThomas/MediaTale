import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export const POST = async (request: Request) => {
  const supabase = createRouteHandlerClient({ cookies });
  const formData = await request.formData();
  const post_id = Number(formData.get("post_id"));

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: profile_id } = await supabase
    .from("profiles")
    .select("id")
    .match({ user_id: user?.id });

  const { data, error } = await supabase
    .from("post_like")
    .insert({ post_id: post_id, profile_id: profile_id });
  return NextResponse.json({ message: "ok" });
};
