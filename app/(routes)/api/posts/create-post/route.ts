import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { PostgrestError } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const title = String(formData.get("title"));
  const description = String(formData.get("description"));
  const text_content = String(formData.get("text_content"));

  const supabase = createRouteHandlerClient({ cookies });
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (user) {
    const { data: userProfile }: { data: profile | null } = await supabase
      .from("profiles")
      .select("*")
      .match({ user_id: user.id })
      .single();

    const { data: post }: { data: post | null } = await supabase
      .from("posts")
      .insert({
        title: title,
        description: description,
        text_content: text_content,
        created_by_username: userProfile?.username,
        created_by_uuid: userProfile?.user_id,
      })
      .select()
      .single();

    if (post === null) {
      console.log("Error posting contents, error: ", error);
      return NextResponse.redirect(`${requestUrl.origin}/`, { status: 301 });
    }

    const { data: postStatistic, error: postStatisticError } = await supabase
      .from("posts_statistics")
      .insert({
        created_by: user.id,
        post_id: post.id,
        profile_id: userProfile?.id,
      });
    return NextResponse.redirect(`${requestUrl.origin}/`, { status: 301 });
  }

  if (error) {
    return NextResponse.redirect(
      `/profile/setup?message=Couldn't fetch user information.`,
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
