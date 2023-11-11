import { getSignedInUser } from "@/app/utils/supabase-queries/queries";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const reqData = await req.json();
  const { user_id }: { user_id: string } = reqData;
  const supabase = createRouteHandlerClient({ cookies });

  const { data } = await supabase.storage
    .from("avatars")
    .getPublicUrl(`${user_id}/`);

  return NextResponse.json(data);
};
