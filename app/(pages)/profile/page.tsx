import Navigation from "@/components/Navigation/Navigation";
import Heading from "@/components/Profile/Heading/Heading";
import Details from "@/components/Profile/Details/Details";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
export const dynamic = "force-dynamic";
const getUserID = async () => {
  const supabase = createServerActionClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user?.id;
};

const getAvatar = async (userId: Promise<string | undefined>) => {
  const supabase = createServerActionClient({ cookies });
  const { data } = await supabase.storage
    .from("avatars")
    .getPublicUrl(`${userId}/`);
  return data;
};

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

  return (
    <div className="bg-white dark:bg-black min-h-[100vh]">
      <Navigation isLoggedIn={true} />
      <Heading
        username={details?.username}
        followers={details?.followers}
        following={details?.following}
      />
      <Details
        about={details?.about}
        contact_email={details?.contact_email}
        country={details?.country}
        created_at={details?.created_at}
        first_name={details?.first_name}
        last_name={details?.last_name}
      />
    </div>
  );
};

export default Profile;
