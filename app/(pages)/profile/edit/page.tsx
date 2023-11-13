import Navigation from "@/components/Navigation";
import { cookies } from "next/headers";
import IsSignedIn from "@/app/utils/auth/isSignedIn";
import EditProfile from "@/components/EditProfile/EditProfile";
import Button from "@/components/General/Button";
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

  if (profile) {
    return (
      <div>
        <div className="bg-[#EDEDED] dark:bg-[#1C1C1C] min-h-[100vh] w-full relative">
          <Navigation isLoggedIn={userStatus} avatar_url={profile.avatar_url} />
          <div className="flex justify-center w-full dark:text-[#EDEDED]">
            <div className="w-full absolute">
              <Button text="Back" type="link" href="/" posTopLeft={true} />
            </div>
            <EditProfile profile={profile} />
          </div>
        </div>
      </div>
    );
  }

  return redirect("/profile/not-found");
};

export default ProfileEdit;
