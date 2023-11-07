import Navigation from "@/components/Navigation";
import IsSignedIn from "@/app/utils/auth/isSignedIn";
import { redirect } from "next/navigation";
import SetThemeSwitch from "@/components/General/SetThemeSwitch";
import LogoutButton from "@/components/General/LogoutButton";
import ChangePasswordEmail from "@/components/Auth/ChangePassword/SendEmail";
import { cookies } from "next/headers";
import Alert from "@/components/General/Toast";
export const dynamic = "force-dynamic";

const Settings = async ({
  searchParams,
}: {
  searchParams: { message: string };
}) => {
  (await IsSignedIn()) ?? redirect("/");
  const theme = cookies().get("theme");
  return (
    <div className={theme?.value}>
      {searchParams.message && (
        <Alert error={false} text={searchParams.message} />
      )}
      <div className="w-screen min-h-screen bg-white dark:bg-black">
        <Navigation isLoggedIn={true} />
        <div className="flex flex-col justify-center items-center gap-4">
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
