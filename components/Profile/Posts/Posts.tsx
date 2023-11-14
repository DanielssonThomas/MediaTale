import PostFeed from "@/components/General/PostFeed";
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
    <div className="">
      <PostFeed posts={posts} postsStatistics={postsStatistics} />
    </div>
  );
};
