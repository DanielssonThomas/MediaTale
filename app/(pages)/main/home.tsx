import HomeFeed from "@/components/HomeFeed/HomeFeed";
import { redirect } from "next/navigation";
import {
  getProfileById,
  getPostsWithEvents,
  getPostsStatistics,
  getSignedInUser,
} from "@/app/utils/supabase-queries/queries";

const Home = async () => {
  const posts = await getPostsWithEvents({ limit: 10 });
  const user = await getSignedInUser();
  const profile = await getProfileById({
    user_id: user !== null ? user.id : "",
  });

  const postsStatistics = await getPostsStatistics();
  if (profile === null) {
    redirect("/profile/setup");
  }

  return (
    <div className="bg-white dark:bg-black w-full min-h-[100vh]">
      <HomeFeed posts={posts} postsStatistics={postsStatistics} />
    </div>
  );
};

export default Home;
