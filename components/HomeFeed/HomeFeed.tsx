import Preview from "./Preview";
import LikeIcon from "@/public/icons/Like";

type HomeFeedProps = {
  postsStatistics: postStatistic[] | null;
  posts: post[] | null;
};

const HomeFeed = ({ posts, postsStatistics }: HomeFeedProps) => {
  if (posts?.length !== 1) {
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
    <div className="flex flex-col gap-4 w-full p-6">
      {posts.map((post) => (
        <Preview
          key={post.id}
          post={post}
          postStatistics={getStatistic(post.id)}
        />
      ))}
    </div>
  );
};

export default HomeFeed;
