export const ChangePasswordForm = () => {
  return (
    <form action="/auth/reset-password">
      <input
        type="password"
        name="old_password"
        placeholder="Enter old password"
      />
      <input
        type="password"
        name="new_password"
        placeholder="Enter new password"
      />
    </form>
  );
};
