"use server";
import Button from "@/components/General/Button";
export const ChangePasswordForm = ({ code }: { code: string }) => {
  return (
    <form
      action="/auth/reset-password"
      className="flex flex-col items-center gap-2"
      method="POST"
    >
      <input type="hidden" value={code} name="code" />
      <input
        type="password"
        name="password"
        className="text-center border-[1px] border-solid border-black dark:border-[#EDEDED] bg-[#EDEDED] dark:bg-[#1C1C1C] text-black dark:text-[#EDEDED] rounded"
        placeholder="Enter new password"
      />
      <Button text="Update" type="default" />
    </form>
  );
};
