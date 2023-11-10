import {
  getProfileById,
  getSignedInUser,
} from "@/app/utils/supabase-queries/queries";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const supabase = createRouteHandlerClient({ cookies });
  const reqData: any = await req.json();
  const { comment_id } = reqData;
  const user = await getSignedInUser();
  const profile = await getProfileById({ user_id: user?.id });

  const { data, error } = await supabase.from("comment_event").insert({
    profile_id: profile?.id,
    comment_id: Number(comment_id),
    like_bool: false,
    dislike_bool: true,
  });

  if (error) {
    console.log(error);
    return NextResponse.json({ status: 301 });
  }

  if (data) {
    console.log("data: ", data);
  }
  return NextResponse.json({ status: 301 });
};
