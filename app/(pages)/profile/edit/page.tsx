import Navigation from "@/components/Navigation";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import IsSignedIn from "@/app/utils/auth/isSignedIn";
import EditProfile from "@/components/EditProfile/EditProfile";
import { redirect } from "next/navigation";
import {
  getSignedInUser,
  getProfileByID,
} from "@/app/lib/supabase-queries/queries";

export const dynamic = "force-dynamic";
const ProfileEdit = async () => {
  const userStatus = await IsSignedIn();
  const user = await getSignedInUser();
  const profile = await getProfileByID({ user_id: user ? user.id : "" });

  if (profile) {
    return (
      <div className="bg-white dark:bg-black min-h-[100vh] ">
        <Navigation isLoggedIn={userStatus} />
        <EditProfile profile={profile} />
      </div>
    );
  }

  return redirect("/profile/not-found");
};

export default ProfileEdit;
