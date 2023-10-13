import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import LandingPage from "./(pages)/main/landing";
import HomePage from "./(pages)/main/home";
import Navigation from "@/components/Navigation/Navigation";
import IsSignedIn from "./utils/auth/isSignedIn";
export const dynamic = "force-dynamic";

export default async function Index() {
  const isLoggedIn = await IsSignedIn();

  return (
    <div className="bg-white dark:bg-black w-screen h-screen ">
      <Navigation isLoggedIn={isLoggedIn} path="/" />
      {!isLoggedIn ? <LandingPage /> : <HomePage />}
    </div>
  );
}
