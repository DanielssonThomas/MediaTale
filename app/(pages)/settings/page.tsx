import Navigation from "@/components/Navigation";
import IsSignedIn from "@/app/utils/auth/isSignedIn";
import { redirect } from "next/navigation";
import SetThemeSwitch from "@/components/General/SetThemeSwitch";
import LogoutButton from "@/components/General/LogoutButton";
import ChangePasswordEmail from "@/components/Auth/ChangePassword/SendEmail";
import { cookies } from "next/headers";
import Toast from "@/components/General/Toast";
import Button from "@/components/General/Button";
import { getSignedInProfilePictureUrl } from "@/app/utils/supabase-queries/queries";
export const dynamic = "force-dynamic";

const Settings = async ({
  searchParams,
}: {
  searchParams: { message: string };
}) => {
  (await IsSignedIn()) ?? redirect("/");
  const avatarUrl = await getSignedInProfilePictureUrl();
  const theme = cookies().get("theme");
  return (
    <div className={theme?.value}>
      {searchParams.message && (
        <Toast error={false} text={searchParams.message} />
      )}
      <div className="w-screen min-h-screen bg-white dark:bg-black ">
        <Navigation isLoggedIn={true} avatar_url={avatarUrl} />
        <div className="flex flex-col justify-center items-center gap-4 pt-8 relative">
          <Button text="Back" type="link" href="/" posTopLeft={true} />
          <h2 className="text-2xl border-b-[1px] border-solid border-black w-[15rem] dark:border-white text-center p-4">
            Settings
          </h2>
          <ChangePasswordEmail />
          <SetThemeSwitch />
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};

export default Settings;
