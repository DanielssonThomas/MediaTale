import LandingPage from "./(pages)/main/landing";
import HomePage from "./(pages)/main/home";
import IsSignedIn from "./utils/auth/isSignedIn";
import { cookies } from "next/headers";
export const dynamic = "force-dynamic";

export default async function Index() {
  const isLoggedIn = await IsSignedIn();

  const theme = await cookies().get("theme");
  return (
    <div className={theme?.value}>
      <div className="bg-[#EDEDED] dark:bg-[#1C1C1C] w-screen h-screen overflow-hidden">
        {!isLoggedIn ? <LandingPage /> : <HomePage />}
      </div>
    </div>
  );
}
