import Navigation from "@/components/Navigation";
import ProfileHeading from "@/components/Profile/Heading";
import Details from "@/components/Profile/Details";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import IsSignedIn from "@/app/utils/auth/isSignedIn";
import {
  getProfileByUsername,
  getProfileById,
  getSignedInUser,
} from "@/app/utils/supabase-queries/queries";

export const dynamic = "force-dynamic";
type ProfileProps = {
  params: { username: string };
};

const Profile = async ({ params: { username } }: ProfileProps) => {
  const profile = await getProfileByUsername({ username: username });
  let isCurrentUser = false;
  if (profile === null) {
    return redirect("/profile/not-found");
  }

  const isSignedIn = await IsSignedIn();
  if (isSignedIn) {
    const user = await getSignedInUser();
    if (user !== null) {
      const currentUserProfile = await getProfileById({ user_id: user.id });
      isCurrentUser =
        currentUserProfile?.username === profile.username ? true : false;
    }
  }
  const theme = cookies().get("theme");
  return (
    <div className={theme?.value}>
      <div className="bg-white dark:bg-black min-h-[100vh]">
        <Navigation isLoggedIn={isSignedIn} />

        <ProfileHeading
          followers={profile.followers}
          following={profile.following}
          username={profile.username}
          PFImage=""
          isCurrentUser={isCurrentUser}
        />
        <Details
          about={profile.about}
          contact_email={profile.contact_email}
          country={profile.country}
          created_at={profile.created_at}
          first_name={profile.first_name}
          last_name={profile.last_name}
        />
      </div>
    </div>
  );
};

export default Profile;
