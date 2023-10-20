import Navigation from "@/components/Navigation/Navigation";
import Post from "@/components/Post/Post";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

type PostProps = {
  params: { postId: string };
};

const PostPage = async ({ params: { postId } }: PostProps) => {
  const supabase = createServerActionClient({ cookies });

  const { data: post }: { data: post | null } = await supabase
    .from("posts")
    .select("*")
    .single();

  const { data: profile }: { data: profile | null } = await supabase
    .from("profiles")
    .select("*")
    .match({ user_id: post?.created_by_uuid })
    .single();

  const { data: postStatistics }: { data: postStatistic | null } =
    await supabase
      .from("posts_statistics")
      .select("*")
      .match({ post_id: postId })
      .single();

  const { data: comments }: { data: comment[] | null } = await supabase
    .from("comments")
    .select("*")
    .match({ post_id: postId });

  return (
    <div className="bg-white dark:bg-black min-h-[100vh]">
      <Navigation isLoggedIn={true} />
      <Post
        authorStatistics={profile}
        post={post}
        postStatistics={postStatistics}
        comments={comments}
      />
    </div>
  );
};

export default PostPage;
