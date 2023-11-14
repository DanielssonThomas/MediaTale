import Navigation from "@/components/Navigation";
import ProfileHeading from "@/components/Profile/Heading";
import ProfilePosts from "@/components/Profile/Posts";
import Details from "@/components/Profile/Details";
import Button from "@/components/General/Button";
import { redirect } from "next/navigation";
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

  return (
    <div>
      <div className="bg-[#EDEDED] dark:bg-[#1C1C1C] min-h-[100vh]">
        <Navigation isLoggedIn={isSignedIn} avatar_url={currentUserAvatar} />
        <section className="flex flex-col justify-center items-center relative pt-8 w-full">
          <Button type="link" text="Back" href="/" posTopLeft={true} />
          <div className="flex flex-col justify-center items-center w-[20rem] sm:w-[35rem] lg:w-[60rem]">
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
            />
            <h2 className="flex justify-center items-center w-[40rem] h-[4rem] text-2xl text-black dark:text-[#EDEDED]">
              {isCurrentUser ? "Your posts" : `${profile.username}'s posts`}
            </h2>
            <ProfilePosts user_id={profile.user_id} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
