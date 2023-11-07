import Button from "../Button";

export const LogoutButton = () => {
  return (
    <form action="/auth/sign-out" method="post">
      <Button text="Logout" />
    </form>
  );
};
