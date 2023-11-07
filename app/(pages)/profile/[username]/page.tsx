import Navigation from "@/components/Navigation";
import ProfileHeading from "@/components/Profile/Heading/Heading";
import Details from "@/components/Profile/Details/Details";
import { redirect } from "next/navigation";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import IsSignedIn from "@/app/utils/auth/isSignedIn";
import { getProfileByUsername } from "@/app/lib/supabase-queries/queries";

export const dynamic = "force-dynamic";
type ProfileProps = {
  params: { username: string };
};

const Profile = async ({ params: { username } }: ProfileProps) => {
  const profile = await getProfileByUsername({ username: username });

  if (profile === null) {
    return redirect("/profile/not-found");
  }

  const isSignedIn = await IsSignedIn();
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
          signedIn={isSignedIn}
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
