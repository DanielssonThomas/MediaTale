export const LogoutButton = () => {
  return (
    <form action="/auth/sign-out" method="post">
      <button>Logout</button>
    </form>
  );
};
