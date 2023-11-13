import IsSignedIn from "@/app/utils/auth/isSignedIn";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Profile from "./[username]/page";
export const dynamic = "force-dynamic";

const getDetails = async (userId: string | undefined) => {
  const supabase = createServerActionClient({ cookies });
  const fetchProfileData: { data: profile | null } = await supabase
    .from("profiles")
    .select("*")
    .match({ user_id: userId })
    .single();
  return fetchProfileData?.data;
};

const MyProfile = async () => {
  const supabase = createServerActionClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const details: profile | null = await getDetails(user?.id);

  const isSignedIn = await IsSignedIn();
  if (!isSignedIn) {
    redirect("/");
  }

  return (
    <div>
      <Profile params={{ username: details?.username ?? "" }} />
    </div>
  );
};

export default MyProfile;
