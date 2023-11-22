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
  const { follower_profile_id } = reqData;
  const user = await getSignedInUser();
  const profile = await getProfileById({ user_id: user?.id });
  console.log("UN-FOLLOWING USER: ", follower_profile_id);
  const res = await supabase.from("profile_follower").delete().match({
    user_id: user?.id,
    user_profile_id: profile?.id,
    follower_profile_id: follower_profile_id,
  });

  if (res.error) {
    console.log("Un-follow error: ", res.error);
    return NextResponse.json({ status: 301 });
  }
  console.log("Un-follow data: ", res);
  return NextResponse.json({ status: 301 });
};
