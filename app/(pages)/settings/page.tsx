import Navigation from "@/components/Navigation";
import IsSignedIn from "@/app/utils/auth/isSignedIn";
import { redirect } from "next/navigation";
import SetThemeSwitch from "@/components/General/SetThemeSwitch";
import ChangePasswordEmail from "@/components/Auth/ChangePassword/SendEmail";
import Toast from "@/components/General/Toast";
import Button from "@/components/General/Button";
import { getSignedInProfilePictureUrl } from "@/app/utils/supabase-queries/queries";
import DeleteUser from "@/components/Auth/DeleteUser";
export const dynamic = "force-dynamic";

const Settings = async ({
  searchParams,
}: {
  searchParams: { message: string };
}) => {
  (await IsSignedIn()) ?? redirect("/");
  const avatarUrl = await getSignedInProfilePictureUrl();

  return (
    <div>
      {searchParams.message && (
        <Toast error={false} text={searchParams.message} />
      )}
      <div className="w-screen min-h-screen bg-[#EDEDED] dark:bg-[#1C1C1C] dark:text-[#EDEDED] transition-all duration-500 ease-out">
        <Navigation isLoggedIn={true} avatar_url={avatarUrl} />
        <div className="flex flex-col justify-center items-center gap-4 pt-8">
          <h2 className="text-2xl border-b-[1px] border-solid border-black w-[15rem] dark:border-[#EDEDED] text-center p-4">
            Settings
          </h2>
          <ChangePasswordEmail />
          <DeleteUser />
          <SetThemeSwitch />
          <form method="POST">
            <Button
              formAction="/auth/sign-out"
              type="formAction"
              text="Logout"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
