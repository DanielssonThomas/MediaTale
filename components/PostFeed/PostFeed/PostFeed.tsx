import PostPreview from "../PostPreview.tsx";

type PostFeedProps = {
  postsStatistics: postStatistic[] | null;
  posts: post[] | null;
};

export const PostFeed = async ({ posts, postsStatistics }: PostFeedProps) => {
  if (posts?.length === 0 || posts === null) {
    return (
      <div className="flex flex-col justify-center items-center w-full text-center p-4 gap-8 text-black dark:text-[#EDEDED]">
        <h2 className="text-3xl">No posts here yet!</h2>
        <p>Unfortunently there are no posts here!</p>
      </div>
    );
  }

  const getStatistic = (post_id: number) => {
    return postsStatistics?.find(
      (postStatistic) => postStatistic.post_id === post_id
    );
  };

  return (
    <section className="flex flex-col justify-center items-center w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full sm:w-[40rem] lg:w-[60rem] p-6 ">
        {posts.map((post) => (
          <PostPreview
            key={post.id}
            avatar_url={getStatistic(post.id)?.profiles.avatar_url ?? null}
            description={post.description}
            like_count={getStatistic(post.id)?.like_count ?? 0}
            title={post.title}
            username={post.created_by_username}
            post_id={post.id}
            imageUrl={post.image_url}
            view_count={getStatistic(post.id)?.view_count ?? 0}
          />
        ))}
      </div>
    </section>
  );
};
