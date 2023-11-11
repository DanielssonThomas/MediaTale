import Navigation from "@/components/Navigation";
import ProfileHeading from "@/components/Profile/Heading";
import ProfileDetails from "@/components/Profile/Details";
import ProfilePosts from "@/components/Profile/Posts";
import IsSignedIn from "@/app/utils/auth/isSignedIn";
import { getSignedInProfilePictureUrl } from "@/app/utils/supabase-queries/queries";
import Button from "@/components/General/Button";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export const dynamic = "force-dynamic";

const getDetails = async (userId: string | undefined) => {
  const supabase = createServerActionClient({ cookies });
  const fetchProfileData: { data: profile[] | null } = await supabase
    .from("profiles")
    .select("*")
    .match({ user_id: userId });
  return fetchProfileData?.data;
};

const Profile = async () => {
  const supabase = createServerActionClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const fetchDetails: profile[] | null = await getDetails(user?.id);
  const details: profile | null =
    fetchDetails !== null ? fetchDetails[0] : null;

  const isSignedIn = await IsSignedIn();

  if (!isSignedIn) {
    redirect("/");
  }
  const avatarUrl = await getSignedInProfilePictureUrl();
  return (
    <div className="bg-white dark:bg-black min-h-[100vh]">
      <Navigation isLoggedIn={true} avatar_url={avatarUrl} />
      <section className="flex flex-col justify-center items-center relative pt-8">
        <Button type="link" text="Back" href="/" posTopLeft={true} />
        <ProfileHeading
          username={details?.username}
          followers={details?.followers}
          following={details?.following}
          isCurrentUser={true}
          user_id={user?.id}
          avatar_url={avatarUrl}
        />
        <ProfileDetails
          about={details?.about}
          contact_email={details?.contact_email}
          country={details?.country}
          created_at={details?.created_at}
          first_name={details?.first_name}
          last_name={details?.last_name}
        />
        <ProfilePosts user_id={user?.id} />
      </section>
    </div>
  );
};

export default Profile;
