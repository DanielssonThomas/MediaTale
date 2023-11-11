import { cookies } from "next/headers";
import ForgottenPasswordForm from "@/components/Auth/ForgottenPassword";
import Navigation from "@/components/Navigation";
import Button from "@/components/General/Button";
import Toast from "@/components/General/Toast";
export const dynamic = "force-dynamic";

const ForgottenPassword = ({
  searchParams,
}: {
  searchParams: { message: string };
}) => {
  const theme = cookies().get("theme");
  return (
    <div className={theme?.value}>
      <div className="flex flex-col items-center bg-white dark:bg-black text-black dark:text-white min-h-screen w-screen gap-6">
        <Navigation isLoggedIn={false} avatar_url={null} />
        <Button type="link" text="Back" href="/" posTopLeft={true} />
        <section className="flex flex-col items-center pt-10">
          <h2 className="text-6xl">MediaTale</h2>
          {searchParams.message ? (
            <div className="pt-12">
              <p>
                We have now sent a password recovery mail to you! Check your
                inbox for further instructions
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-12">
              <h3 className="text-3xl">
                Enter your email and we will send a password update link.
              </h3>
              <ForgottenPasswordForm />{" "}
            </div>
          )}
          {searchParams.message && (
            <Toast error={false} text={searchParams.message} />
          )}
        </section>
      </div>
    </div>
  );
};

export default ForgottenPassword;
