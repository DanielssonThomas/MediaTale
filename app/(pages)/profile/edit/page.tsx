import EditProfileDetails from "@/components/EditProfile/Details/Details";
import EditProfileHeading from "@/components/EditProfile/Heading/Heading";
import Navigation from "@/components/Navigation/Navigation";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import IsSignedIn from "@/app/utils/auth/isSignedIn";
const getDetails = async (userId: string | undefined) => {
  const supabase = createServerActionClient({ cookies });
  const fetchProfileData: { data: profile[] | null } = await supabase
    .from("profiles")
    .select("*")
    .match({ user_id: userId });
  return fetchProfileData?.data;
};

const ProfileEdit = async () => {
  const supabase = createServerActionClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const fetchDetails: profile[] | null = await getDetails(user?.id);
  const details: profile | null =
    fetchDetails !== null ? fetchDetails[0] : null;
  const isSignedIn = await IsSignedIn();

  return (
    <div className="bg-white dark:bg-black min-h-[100vh] ">
      <Navigation isLoggedIn={isSignedIn} />
      <form action={"/auth/edit-profile"} method="POST">
        <EditProfileHeading
          followers={details?.followers}
          following={details?.following}
          username={details?.username}
          PFImage=""
        />
        <EditProfileDetails
          about={details?.about}
          contact_email={details?.contact_email}
          country={details?.country}
          created_at={details?.created_at}
          first_name={details?.first_name}
          last_name={details?.last_name}
        />
      </form>
    </div>
  );
};

export default ProfileEdit;
