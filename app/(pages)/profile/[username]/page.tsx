import Navigation from "@/components/Navigation/Navigation";
import ProfileHeading from "@/components/Profile/Heading/Heading";
import Details from "@/components/Profile/Details/Details";
import { redirect } from "next/navigation";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import IsSignedIn from "@/app/utils/auth/isSignedIn";

export const dynamic = "force-dynamic";
type ProfileProps = {
  params: { username: string };
};

const Profile = async ({ params: { username } }: ProfileProps) => {
  const supabase = createServerActionClient({ cookies });

  const fetchUser: { data: profile[] | null } = await supabase
    .from("profiles")
    .select("*")
    .match({ username: username });

  if (fetchUser.data?.length === 0 || fetchUser.data === null) {
    return redirect("/profile/not-found");
  }

  const userData = fetchUser.data[0];

  const isSignedIn = await IsSignedIn();

  return (
    <div className="bg-white dark:bg-black min-h-[100vh]">
      <Navigation isLoggedIn={isSignedIn} />
      <ProfileHeading
        followers={userData.followers}
        following={userData.following}
        username={userData.username}
        PFImage=""
        signedIn={isSignedIn}
      />
      <Details
        about={userData.about}
        contact_email={userData.contact_email}
        country={userData.country}
        created_at={userData.created_at}
        first_name={userData.first_name}
        last_name={userData.last_name}
      />
    </div>
  );
};

export default Profile;