import Navigation from "@/components/Navigation";
import IsSignedIn from "@/app/utils/auth/isSignedIn";
import { redirect } from "next/navigation";
import SetThemeSwitch from "@/components/General/SetThemeSwitch";
import LogoutButton from "@/components/General/LogoutButton";
import ChangePasswordEmail from "@/components/Auth/ChangePassword/Email";
import { cookies } from "next/headers";
export const dynamic = "force-dynamic";

const Settings = async () => {
  (await IsSignedIn()) ?? redirect("/");
  const theme = cookies().get("theme");
  return (
    <div className={theme?.value}>
      <div className="w-screen min-h-screen bg-white dark:bg-black">
        <Navigation isLoggedIn={true} />
        <div className="flex flex-col justify-center items-center">
          <ChangePasswordEmail />
          <SetThemeSwitch />
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};

export default Settings;
