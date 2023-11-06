import Link from "next/link";
import Navigation from "@/components/Navigation";
export const dynamic = "force-dynamic";
export default function Login() {
  return (
    <div className="bg-white dark:bg-black w-screen h-screen">
      <Navigation isLoggedIn={false} path="/login" />
      <div className="flex flex-col justify-center items-center w-full h-full">
        <section className="flex flex-col justify-center items-center w-[20rem] h-full">
          <form
            className="flex-1 flex flex-col w-full justify-center text-foreground gap-4"
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
            <button className="bg-green-700 rounded px-4 py-2 text-white">
              Sign In
            </button>
            <button
              formAction="/auth/sign-up"
              className="border border-gray-700 rounded px-4 py-2 text-black"
            >
              Sign Up
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
