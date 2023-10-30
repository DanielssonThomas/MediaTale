import Navigation from "@/components/Navigation";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import IsSignedIn from "@/app/utils/auth/isSignedIn";
import EditProfile from "@/components/EditProfile/EditProfile";
import { redirect } from "next/navigation";
export const dynamic = "force-dynamic";
const ProfileEdit = async () => {
  const supabase = createServerActionClient({ cookies });
  const userStatus = await IsSignedIn();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const userProfileData: { data: profile[] | null } = await supabase
    .from("profiles")
    .select("*")
    .match({ user_id: user?.id });

  if (userProfileData.data) {
    const userProfile: profile = userProfileData.data[0];

    return (
      <div className="bg-white dark:bg-black min-h-[100vh] ">
        <Navigation isLoggedIn={userStatus} />
        <EditProfile userProfile={userProfile} />
      </div>
    );
  }

  return redirect("/profile/not-found");
};

export default ProfileEdit;
