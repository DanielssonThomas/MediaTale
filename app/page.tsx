import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import LandingPage from "./(pages)/main/landingPage";
import HomePage from "./(pages)/main/homePage";
import Nav from "@/components/Nav/navigation";
export const dynamic = "force-dynamic";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const isLoggedIn = session === null ?? false;
  return (
    <div className="bg-white dark:bg-black w-screen h-screen">
      <Nav isLoggedIn={isLoggedIn} />
      {isLoggedIn ? <LandingPage /> : <HomePage />}
    </div>
  );
}
