import Navigation from "@/components/Navigation";
import Post from "@/components/Post/Post";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import {
  getPostById,
  getProfileById,
  getCommentsByPostId,
  getPostStatisticsById,
} from "@/app/lib/supabase-queries/queries";

type PostProps = {
  params: { postId: number };
};

const PostPage = async ({ params: { postId } }: PostProps) => {
  const supabase = createServerActionClient({ cookies });
  const post = await getPostById({ post_id: postId });

  const profile = await getProfileById({ user_id: post?.created_by_uuid });
  const postStatistics = await getPostStatisticsById({ post_id: postId });
  const comments = await getCommentsByPostId({ post_id: postId });
  const theme = cookies().get("theme");
  return (
    <div className={theme?.value}>
      <div className="bg-white dark:bg-black min-h-[100vh]">
        <Navigation isLoggedIn={true} />
        <Post
          authorStatistics={profile}
          post={post}
          postStatistics={postStatistics}
          comments={comments}
        />
      </div>
    </div>
  );
};

export default PostPage;
