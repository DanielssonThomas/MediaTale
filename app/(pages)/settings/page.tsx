import Navigation from "@/components/Navigation";
import IsSignedIn from "@/app/utils/auth/isSignedIn";
import { redirect } from "next/navigation";
export const dynamic = "force-dynamic";
const Settings = async () => {
  (await IsSignedIn()) ?? redirect("/");
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navigation isLoggedIn={true} />
    </div>
  );
};

export default Settings;
