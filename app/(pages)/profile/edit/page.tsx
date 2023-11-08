import Navigation from "@/components/Navigation";
import { cookies } from "next/headers";
import IsSignedIn from "@/app/utils/auth/isSignedIn";
import EditProfile from "@/components/EditProfile/EditProfile";
import { redirect } from "next/navigation";
import {
  getSignedInUser,
  getProfileById,
} from "@/app/utils/supabase-queries/queries";

export const dynamic = "force-dynamic";

const ProfileEdit = async () => {
  const userStatus = await IsSignedIn();
  const user = await getSignedInUser();
  const profile = await getProfileById({ user_id: user ? user.id : "" });
  const theme = cookies().get("theme");
  if (profile) {
    return (
      <div className={theme?.value}>
        <div className="bg-white dark:bg-black min-h-[100vh] ">
          <Navigation isLoggedIn={userStatus} />
          <EditProfile profile={profile} />
        </div>
      </div>
    );
  }

  return redirect("/profile/not-found");
};

export default ProfileEdit;
