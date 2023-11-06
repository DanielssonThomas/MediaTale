import LandingPage from "./(pages)/main/landing";
import HomePage from "./(pages)/main/home";
import Navigation from "@/components/Navigation";
import IsSignedIn from "./utils/auth/isSignedIn";
import { GetTheme } from "./utils/actions";
export const dynamic = "force-dynamic";

export default async function Index() {
  const isLoggedIn = await IsSignedIn();

  return (
    <div className={`dark`}>
      <div className="bg-white dark:bg-black w-screen h-screen ">
        <Navigation isLoggedIn={isLoggedIn} path="/" />
        {!isLoggedIn ? <LandingPage /> : <HomePage />}
      </div>
    </div>
  );
}
