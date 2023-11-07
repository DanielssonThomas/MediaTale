import Navigation from "@/components/Navigation";
import { cookies } from "next/headers";
import Button from "@/components/General/Button";
export const dynamic = "force-dynamic";
const Login = async () => {
  const theme = cookies().get("theme");

  return (
    <div className={theme?.value}>
      <div className="bg-white dark:bg-black w-screen h-screen">
        <Navigation isLoggedIn={false} path="/login" />
        <div className="flex flex-col justify-center items-center w-full h-full">
          <section className="flex flex-col justify-center items-center w-[20rem] h-full">
            <form
              className="flex-1 flex flex-col w-full justify-center items-center text-foreground gap-4"
              action="/auth/sign-in"
              method="post"
            >
              <div className="text-md text-black">Email</div>
              <input
                className="rounded-md px-4 py-2 bg-inherit border"
                name="email"
                placeholder="you@example.com"
                required
              />
              <div className="text-md text-black">Password</div>
              <input
                className="rounded-md px-4 py-2 bg-inherit border "
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
