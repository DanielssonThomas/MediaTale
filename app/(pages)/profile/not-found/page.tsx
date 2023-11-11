import Navigation from "@/components/Navigation";
import Button from "@/components/General/Button";
import IsSignedIn from "@/app/utils/auth/isSignedIn";
import { getSignedInProfilePictureUrl } from "@/app/utils/supabase-queries/queries";
import { cookies } from "next/headers";
export const dynamic = "force-dynamic";

const ProfileNotFound = async () => {
  const signedInStatus = await IsSignedIn();
  const avatarUrl = await getSignedInProfilePictureUrl();
  const theme = cookies().get("theme");
  return (
    <div className={theme?.value}>
      <div className="bg-white dark:bg-black min-h-[100vh]">
        <Navigation isLoggedIn={signedInStatus} avatar_url={avatarUrl} />

        <div className="relative flex flex-col justify-center items-center w-full">
          <Button text="Back" type="link" href="/" posTopLeft={true} />
          <section className="flex flex-col gap-8 text-center p-12">
            <h2 className="text-4xl">No profile was found!</h2>
            <div>
              <i className="pb-2">
                If you are seeing this message there was an error fetching the
                profile you were looking for.
              </i>
              <i>Fix will be available soon! </i>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProfileNotFound;
