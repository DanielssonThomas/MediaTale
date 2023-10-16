import Navigation from "@/components/Navigation/Navigation";
import Heading from "@/components/Profile/Heading/Heading";
import { Database } from "@/db_types/supabase";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { profile } from "console";
import { cookies } from "next/headers";

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
    </div>
  );
};

export default Profile;
