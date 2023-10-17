import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const username = formData.get("username");
  const about = formData.get("about");
  const country = formData.get("country");
  const contact_email = formData.get("contact_email");
  const first_name = formData.get("first_name");
  const last_name = formData.get("last_name");

  const supabase = createRouteHandlerClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("profiles")
    .update({ username, about, country, contact_email, first_name, last_name })
    .match({ user_id: user?.id });

  if (error) {
    return NextResponse.redirect(`${requestUrl.origin}/profile`, {
      // a 301 status is required to redirect from a POST to a GET route
      status: 301,
    });
  }

  return NextResponse.redirect("/profile", {
    // a 301 status is required to redirect from a POST to a GET route
    status: 301,
  });
}
