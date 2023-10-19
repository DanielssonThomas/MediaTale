import LogoutButton from "@/components/LogoutButton";
import HomeFeed from "@/components/HomeFeed/HomeFeed";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const Home = async () => {
  const supabase = createServerActionClient({ cookies });
  const { data: posts }: { data: post[] | null } = await supabase
    .from("posts")
    .select("*");
  return (
    <div className="bg-white dark:bg-black w-full min-h-[100vh]">
      <HomeFeed posts={posts} />
    </div>
  );
};

export default Home;
