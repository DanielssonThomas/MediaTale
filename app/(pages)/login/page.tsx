import Navigation from "@/components/Navigation";
import Toast from "@/components/General/Toast";
import LoginUserForm from "@/components/Auth/LoginUserForm";

export const dynamic = "force-dynamic";
const Login = async ({
  searchParams,
}: {
  searchParams: { error: string; message: string };
}) => {
  return (
    <div className="bg-[#EDEDED] dark:bg-[#1C1C1C] w-screen h-screen">
      {searchParams.error && <Toast error={true} text={searchParams.error} />}
      {searchParams.message && (
        <Toast error={false} text={searchParams.message} />
      )}
      <Navigation
        isLoggedIn={false}
        showLoginButton={false}
        showBackButton={true}
        avatar_url={null}
      />
      <LoginUserForm />
    </div>
  );
};

export default Login;
