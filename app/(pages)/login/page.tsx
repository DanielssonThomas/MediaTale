import Navigation from "@/components/Navigation";
import { cookies } from "next/headers";
import Button from "@/components/General/Button";
import Toast from "@/components/General/Toast";

export const dynamic = "force-dynamic";
const Login = async ({ searchParams }: { searchParams: { error: string } }) => {
  const theme = cookies().get("theme");

  return (
    <div className={theme?.value}>
      <div className="bg-white dark:bg-black w-screen h-screen">
        {searchParams.error && <Toast error={true} text={searchParams.error} />}

        <Navigation isLoggedIn={false} path="/login" />
        <div className="flex justify-center w-full">
          <section className="flex flex-col justify-center items-center w-[25rem] gap-8">
            <div className="flex flex-col justify-center gap-2 text-center pt-4">
              <h2 className="text-2xl">Welcome!</h2>
              <i>
                First time? Welcome! Enter your email and password. If you are
                new, just click sign up! If you have an account, just click the
                sign in
              </i>
            </div>
            <form
              className="flex-1 flex flex-col w-[20rem] justify-center items-center text-foreground gap-4"
              action="/auth/sign-in"
              method="post"
            >
              <div className="text-md text-black">Email</div>
              <input
                className="rounded-md px-4 py-2 bg-inherit border-[1px] border-solid border-black dark:border-white w-full text-center"
                name="email"
                placeholder="you@example.com"
                required
              />
              <div className="text-md text-black">Password</div>
              <input
                className="rounded-md px-4 py-2 bg-inherit border-[1px] border-black dark:border-white w-full text-center"
                type="password"
                name="password"
                placeholder="••••••••"
                required
              />
              <Button text="Sign In" type="default" />

              <Button
                text="Sign Up"
                type="formAction"
                formAction="/auth/sign-up"
              />

              <Button
                text="Forgotten password?"
                type="link"
                href="/forgotten-password"
              />
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Login;
