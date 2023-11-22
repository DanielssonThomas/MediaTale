import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import {
  getSignedInUser,
  getProfileById,
} from "@/app/utils/supabase-queries/queries";
export const POST = async (req: Request) => {
  const supabase = createRouteHandlerClient({ cookies });
  const reqData = await req.json();
  const { post_id } = reqData;

  const user = await getSignedInUser();
  const profile = await getProfileById({ user_id: user?.id });

  const { error } = await supabase
    .from("post_event")
    .delete()
    .match({ post_id: post_id, profile_id: profile?.id });
  if (error) {
    console.log("Error on delete: ", error);
    return NextResponse.json({ error: true, errorMessage: error, status: 301 });
  }

  return NextResponse.json({ error: false, status: 301 });
};
