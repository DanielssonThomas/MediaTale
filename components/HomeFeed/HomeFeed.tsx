import Preview from "./Preview";

type HomeFeedProps = {
  postsStatistics: postStatistic[] | null;
  posts: post[] | null;
};

const HomeFeed = ({ posts, postsStatistics }: HomeFeedProps) => {
  if (posts === null) {
    return (
      <div>
        <h2>No posts here yet!</h2>
        <p>Unfortunently there has not been a new post, be the first!</p>
      </div>
    );
  }

  const getStatistic = (post_id: number) => {
    return postsStatistics?.find(
      (postStatistic) => postStatistic.post_id === post_id
    );
  };

  console.log(postsStatistics);
  return (
    <div className="flex flex-col gap-4 w-full p-6">
      {posts.map((post) => (
        <Preview post={post} postStatistics={getStatistic(post.id)} />
      ))}
    </div>
  );
};

export default HomeFeed;
