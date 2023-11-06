import Navigation from "@/components/Navigation";
import IsSignedIn from "@/app/utils/auth/isSignedIn";
import { redirect } from "next/navigation";
import SetThemeSwitch from "@/components/General/SetThemeSwitch";

export const dynamic = "force-dynamic";

const Settings = async () => {
  (await IsSignedIn()) ?? redirect("/");

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navigation isLoggedIn={true} />
      <SetThemeSwitch />
    </div>
  );
};

export default Settings;
