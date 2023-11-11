import Navigation from "@/components/Navigation";
import ProfileHeading from "@/components/Profile/Heading";
import ProfilePosts from "@/components/Profile/Posts";
import Details from "@/components/Profile/Details";
import Button from "@/components/General/Button";
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
  let currentUserAvatar = null;
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
      currentUserAvatar = currentUserProfile?.avatar_url;
    }
  }

  const theme = await cookies().get("theme");
  return (
    <div className={theme?.value}>
      <div className="bg-[#EDEDED] dark:bg-[#1C1C1C] min-h-[100vh]">
        <Navigation isLoggedIn={isSignedIn} avatar_url={currentUserAvatar} />
        <section className="flex flex-col justify-center items-center relative pt-8">
          <Button type="link" text="Back" href="/" posTopLeft={true} />
          <ProfileHeading
            followers={profile.followers}
            following={profile.following}
            username={profile.username}
            user_id={profile.user_id}
            isCurrentUser={isCurrentUser}
            avatar_url={profile.avatar_url}
          />
          <Details
            about={profile.about}
            contact_email={profile.contact_email}
            country={profile.country}
            created_at={profile.created_at}
            first_name={profile.first_name}
            last_name={profile.last_name}
          />
          <ProfilePosts user_id={profile.user_id} />
        </section>
      </div>
    </div>
  );
};

export default Profile;
