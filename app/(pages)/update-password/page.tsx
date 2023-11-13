import ChangePasswordForm from "@/components/Auth/ChangePassword/Form";
import Toast from "@/components/General/Toast";
export const dynamic = "force-dynamic";

const UpdatePassword = async ({
  searchParams,
}: {
  searchParams: { message: string; code: string };
}) => {
  return (
    <div className="flex flex-col items-center bg-[#EDEDED] dark:bg-[#1C1C1C] text-black dark:text-[#EDEDED] min-h-screen w-screen pt-[5rem] gap-6">
      {searchParams.message && (
        <Toast error={true} text={searchParams.message} />
      )}
      <h2 className="text-6xl">MediaTale</h2>
      <h3 className="text-3xl">Change your password</h3>
      <ChangePasswordForm code={searchParams.code} />
    </div>
  );
};

export default UpdatePassword;
