import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const supabase = createRouteHandlerClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase.storage
    .from("avatars")
    .upload(`${user?.id}/`, "/public/images/defaultPFP.jpeg");

  if (data) {
    console.log(data);
  }

  if (error) {
    console.log(error);
  }

  return redirect("/profile");
}
