import { getSignedInUser } from "@/app/utils/supabase-queries/queries";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const requestUrl = new URL(request.url);
  const supabaseAdminClient = createClient(
    String(process.env.NEXT_PUBLIC_SUPABASE_URL),
    String(process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY),
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );
  const supabaseRouterClient = createRouteHandlerClient({ cookies });
  const user = await getSignedInUser();

  const { error: profileDeleteError } = await supabaseRouterClient
    .from("profiles")
    .delete()
    .match({ user_id: user?.id });

  if (profileDeleteError) {
    console.log("PROFILE DELETE ERROR: ", profileDeleteError);
    return NextResponse.json({ status: "error" });
  }

  const { error: storageClearAvatars } = await supabaseRouterClient.storage
    .from("avatars")
    .remove([`${user?.id}`]);

  if (storageClearAvatars) {
    console.log("STORAGE CLEAR AVATARS ERROR: ", storageClearAvatars);
    return NextResponse.json({ status: "error" });
  }

  const { error: storageClearUploads } = await supabaseRouterClient.storage
    .from("uploads")
    .remove([`${user?.id}`]);

  if (storageClearUploads) {
    console.log("STORAGE CLEAR UPLOADS ERROR: ", storageClearUploads);
    return NextResponse.json({ status: "error" });
  }

  if (user?.id !== undefined) {
    const { data, error } = await supabaseAdminClient.auth.admin.deleteUser(
      user.id
    );
    if (error) {
      return NextResponse.redirect(`${requestUrl.origin}/`);
    }
  }

  return NextResponse.json({ status: "success" });
};
