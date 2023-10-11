import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const first_name = String(formData.get("first_name"));
  const last_name = String(formData.get("last_name"));
  const username = String(formData.get("username"));
  const about = String(formData.get("about"));
  const country = String(formData.get("country"));
  const contact_email = String(formData.get("contact_email"));

  const supabase = createRouteHandlerClient({ cookies });
  console.log("HANDELING REQUEST");
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (user) {
    console.log("FOUND USER: ", user);
    console.log("RUNNING INSERT");
    const user_id = user?.id;
    const user_email = user?.email;
    const { data, error } = await supabase.from("profiles").insert({
      first_name,
      last_name,
      user_id: user_id,
      email: user_email,
      username,
      about,
      country,
      contact_email,
    });
    console.log("DATA RETRIVAL: ", data);
    if (error) {
      console.log(error);
      return NextResponse.redirect(`${requestUrl.origin}/profile/setup`, {
        status: 301,
      });
    }

    return NextResponse.redirect(`${requestUrl.origin}/`, { status: 301 });
  }

  if (error) {
    return NextResponse.redirect(
      `/profile/setup?message=Failed to fetch user information`,
      {
        // a 301 status is required to redirect from a POST to a GET route
        status: 301,
      }
    );
  }

  return NextResponse.redirect(`${requestUrl.origin}/profile/setup`, {
    // a 301 status is required to redirect from a POST to a GET route
    status: 301,
  });
}
