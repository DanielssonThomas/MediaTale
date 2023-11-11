import PostFeed from "@/components/General/Posts";
import {
  getPostsWithEvents,
  getPostsStatistics,
} from "@/app/utils/supabase-queries/queries";

export const ProfilePosts = async ({
  user_id,
}: {
  user_id: string | null | undefined;
}) => {
  const posts = await getPostsWithEvents({
    limit: 10,
    user_id: user_id ? user_id : undefined,
  });
  const postsStatistics = await getPostsStatistics({
    limit: 10,
    user_id: user_id ? user_id : undefined,
  });
  return (
    <div className="w-[40rem">
      <PostFeed posts={posts} postsStatistics={postsStatistics} />
    </div>
  );
};
