import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import LandingPage from "./(pages)/main/landing";
import HomePage from "./(pages)/main/home";
import Navigation from "@/components/Navigation/Navigation";
export const dynamic = "force-dynamic";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const isLoggedIn = session === null ? false : true;
  return (
    <div className="bg-white dark:bg-black w-screen h-screen ">
      <Navigation isLoggedIn={isLoggedIn} path="/" />
      {!isLoggedIn ? <LandingPage /> : <HomePage />}
    </div>
  );
}
