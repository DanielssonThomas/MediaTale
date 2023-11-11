import PostPreview from "../PostPreview.tsx";

type PostFeedProps = {
  postsStatistics: postStatistic[] | null;
  posts: postWithEvent[] | null;
};

export const PostFeed = ({ posts, postsStatistics }: PostFeedProps) => {
  if (posts?.length === 0 || posts === null) {
    return (
      <div className="flex flex-col justify-center items-center w-full text-center p-4 gap-8">
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
      <div className="flex flex-col gap-4 max-w-[100rem] min-h-screen p-6 border-x-[1px] border-solid border-black dark:border-white w-full">
        {posts.map((post) => (
          <PostPreview
            key={post.id}
            avatar_url={getStatistic(post.id)?.profiles.avatar_url ?? null}
            description={post.description}
            like_count={getStatistic(post.id)?.like_count ?? 0}
            title={post.title}
            username={post.created_by_username}
            post_id={post.id}
            imageUrl={post.image}
            view_count={getStatistic(post.id)?.view_count ?? 0}
          />
        ))}
      </div>
    </section>
  );
};
