export const ChangePasswordEmail = async () => {
  return (
    <form action="/auth/send-email" method="POST">
      <button>Change password</button>
    </form>
  );
};
