import Button from "@/components/General/Button";

export const ForgottenPasswordForm = () => {
  return (
    <form
      action={"/auth/send-PW-reset-email"}
      method="POST"
      className="flex flex-col items-center gap-2"
    >
      <input
        type="email"
        name="email"
        className="text-center border-[1px] border-solid border-black dark:border-white text-black dark:text-white rounded"
        placeholder="Enter email here"
        required
      />
      <Button type="default" text="Send" />
    </form>
  );
};
