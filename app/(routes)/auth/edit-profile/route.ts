import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const username = String(formData.get("username"));
  const about = String(formData.get("about"));
  const country = String(formData.get("country"));
  const contact_email = String(formData.get("contact_email"));
  const first_name = String(formData.get("first_name"));
  const last_name = String(formData.get("last_name"));
  const avatar = formData.get("avatar");
  const supabase = createRouteHandlerClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("profiles")
    .update({
      username: username,
      about: about,
      country: country,
      contact_email: contact_email,
      first_name: first_name,
      last_name: last_name,
    })
    .eq("user_id", user?.id);

  if (error) {
    return NextResponse.redirect(`${requestUrl.origin}/profile`, {
      // a 301 status is required to redirect from a POST to a GET route
      status: 301,
    });
  }

  return NextResponse.redirect(`${requestUrl.origin}/profile`, {
    // a 301 status is required to redirect from a POST to a GET route
    status: 301,
  });
}
