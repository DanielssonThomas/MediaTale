import Preview from "./Preview";

type HomeFeedProps = {
  postsStatistics: postStatistic[] | null;
  posts: postWithEvent[] | null;
};

const HomeFeed = ({ posts, postsStatistics }: HomeFeedProps) => {
  if (posts?.length === 0 || posts === null) {
    return (
      <div className="flex flex-col justify-center items-center w-full text-center p-4 gap-8">
        <h2 className="text-3xl">No posts here yet!</h2>
        <p>Unfortunently there has not been a new post, be the first!</p>
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
      <div className="flex flex-col gap-4 max-w-[100rem] min-h-screen p-6 border-[1px] border-solid border-black dark:border-white">
        {posts.map((post) => (
          <Preview
            key={post.id}
            postLiked={post.post_event.like}
            post={post}
            postStatistics={getStatistic(post.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeFeed;
