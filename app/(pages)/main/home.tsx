import HomeFeed from "@/components/HomeFeed/HomeFeed";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Home = async () => {
  const supabase = createServerActionClient({ cookies });

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  const { data: profile }: { data: profile | null } = await supabase
    .from("profiles")
    .select("*")
    .match({ user_id: user?.id })
    .single();

  if (profile === null) {
    redirect("/profile/setup");
  }

  const { data: posts }: { data: postWithEvent[] | null } = await supabase
    .from("posts")
    .select("*, post_event(dislike, like)");

  const { data: postsStatistics }: { data: postStatistic[] | null } =
    await supabase.from("posts_statistics").select("*");

  return (
    <div className="bg-white dark:bg-black w-full min-h-[100vh]">
      <HomeFeed posts={posts} postsStatistics={postsStatistics} />
    </div>
  );
};

export default Home;
