import PostFeed from "@/components/PostFeed";
import { redirect } from "next/navigation";
import Navigation from "@/components/Navigation";
import {
  getProfileById,
  getPostsWithEvents,
  getPostsStatistics,
  getSignedInUser,
} from "@/app/utils/supabase-queries/queries";
export const dynamic = "force-dynamic";

const Home = async () => {
  const posts = await getPostsWithEvents({ limit: 20 });
  const postsStatistics = await getPostsStatistics({ limit: 20 });
  const user = await getSignedInUser();

  const profile = await getProfileById({
    user_id: user !== null ? user.id : "",
  });

  if (profile === null) {
    redirect("/profile/setup");
  }

  return (
    <div className="bg-[#EDEDED] dark:bg-[#1C1C1C] w-full min-h-[100vh]">
      <Navigation
        isLoggedIn={true}
        avatar_url={profile.avatar_url}
        showUploadPost={true}
      />
      <div className="flex justify-center items-center w-full">
        <div className="md:max-w-[40rem]">
          <PostFeed posts={posts} postsStatistics={postsStatistics} />
        </div>
      </div>
    </div>
  );
};

export default Home;
