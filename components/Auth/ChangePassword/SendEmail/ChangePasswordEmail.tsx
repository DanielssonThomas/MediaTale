import Button from "@/components/General/Button";

export const ChangePasswordEmail = async () => {
  return (
    <form action="/auth/send-PW-reset-email" method="POST">
      <Button text="Change password" />
    </form>
  );
};
