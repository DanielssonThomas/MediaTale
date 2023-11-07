import { sendPWChangeToCurrentUser } from "@/app/utils/supabase-queries/queries";
import { NextResponse } from "next/server";
export const POST = async (request: Request) => {
  const requestUrl = new URL(request.url);
  const res = await sendPWChangeToCurrentUser({ path: requestUrl.origin });

  return NextResponse.redirect(
    `${requestUrl.origin}/settings?message=Email sent!`,
    {
      status: 301,
    }
  );
};
