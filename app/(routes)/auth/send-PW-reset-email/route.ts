import { sendPWResetByEmail } from "@/app/utils/supabase-queries/queries";
import { NextResponse } from "next/server";
export const POST = async (request: Request) => {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const email = String(formData.get("email"));
  const res = await sendPWResetByEmail({
    email: email,
    path: requestUrl.origin,
  });

  return NextResponse.redirect(
    `${requestUrl.origin}/forgotten-password?message=Email sent!`,
    {
      status: 301,
    }
  );
};
