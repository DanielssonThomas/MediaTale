import { cookies } from "next/headers";
import ChangePasswordForm from "@/components/Auth/ChangePassword/Form";

export const dynamic = "force-dynamic";

const UpdatePassword = () => {
  const theme = cookies().get("theme");
  return (
    <div className={theme?.value}>
      <div className="flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white">
        <ChangePasswordForm />
      </div>
    </div>
  );
};

export default UpdatePassword;
