export const ChangePasswordEmail = async () => {
  return (
    <form action="/auth/send-PW-reset-email" method="POST">
      <button>Change password</button>
    </form>
  );
};
