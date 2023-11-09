import Navigation from "@/components/Navigation";
import Post from "@/components/Post/Post";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import Toast from "@/components/General/Toast";
import { cookies } from "next/headers";
import {
  getPostById,
  getProfileById,
  getCommentsByPostId,
  getPostStatisticsById,
} from "@/app/utils/supabase-queries/queries";

type PostProps = {
  params: { postId: number };
  searchParams: { message: string; error: boolean };
};

const PostPage = async ({
  params: { postId },
  searchParams: { message, error },
}: PostProps) => {
  const post = await getPostById({ post_id: postId });
  const profile = await getProfileById({ user_id: post?.created_by_uuid });
  const postStatistics = await getPostStatisticsById({ post_id: postId });
  const comments = await getCommentsByPostId({ post_id: postId });
  const showToast = message ? true : false;

  const theme = cookies().get("theme");
  return (
    <div className={theme?.value}>
      <div className="bg-white dark:bg-black min-h-[100vh]">
        {showToast === error && <Toast error={true} text={message} />}
        {showToast && message !== "" && <Toast error={false} text={message} />}
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
