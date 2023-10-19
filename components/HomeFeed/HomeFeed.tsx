import Preview from "./Preview";

type HomeFeedProps = {
  posts: post[] | null;
};

const HomeFeed = ({ posts }: HomeFeedProps) => {
  if (posts === null) {
    return (
      <div>
        <h2>No posts here yet!</h2>
        <p>Unfortunently there has not been a new post, be the first!</p>
      </div>
    );
  }

  return (
    <div className="w-full p-6">
      {posts.map((post) => (
        <Preview post={post} />
      ))}
    </div>
  );
};

export default HomeFeed;
