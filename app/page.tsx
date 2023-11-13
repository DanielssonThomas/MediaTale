import IsSignedIn from "./utils/auth/isSignedIn";
import { redirect } from "next/navigation";
export const dynamic = "force-dynamic";

export default async function Index() {
  const isLoggedIn = await IsSignedIn();

  return isLoggedIn ? redirect("/home-feed") : redirect("/landingpage");
}
