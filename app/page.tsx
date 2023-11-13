import LandingPage from "./(pages)/landingpage/landing";
import HomePage from "./(pages)/home-feed/home";
import IsSignedIn from "./utils/auth/isSignedIn";
import { Suspense } from "react";
import { Loading } from "@/components/General/PostFeed/PostFeedLoading";
export const dynamic = "force-dynamic";

export default async function Index() {
  const isLoggedIn = await IsSignedIn();

  return (
    <div className="bg-[#EDEDED] dark:bg-[#1C1C1C] w-screen h-screen overflow-hidden">
      {!isLoggedIn ? (
        <LandingPage />
      ) : (
        <Suspense fallback={<Loading />}>
          <HomePage />
        </Suspense>
      )}
    </div>
  );
}
