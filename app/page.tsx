import LandingPage from "./(pages)/main/landing";
import HomePage from "./(pages)/main/home";
import Navigation from "@/components/Navigation";
import IsSignedIn from "./utils/auth/isSignedIn";
import { cookies } from "next/headers";
export const dynamic = "force-dynamic";

export default async function Index() {
  const isLoggedIn = await IsSignedIn();
  const theme = cookies().get("theme");
  return (
    <div className={theme?.value}>
      <div className="bg-white dark:bg-black w-screen h-screen overflow-hidden">
        <Navigation isLoggedIn={isLoggedIn} path="/" />
        {!isLoggedIn ? <LandingPage /> : <HomePage />}
      </div>
    </div>
  );
}
