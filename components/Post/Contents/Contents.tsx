import Heading from "./Heading";
import Body from "./Body";

type ContentsProps = {
  authorStatistics: profile | null;
  post: postWithEvent | null;
  postStatistics: postStatistic | null;
};

const Contents = ({
  authorStatistics,
  post,
  postStatistics,
}: ContentsProps) => {
  return (
    <div>
      <Heading
        avatar_url={authorStatistics?.avatar_url}
        follower_count={authorStatistics?.followers}
        username={authorStatistics?.username}
      />
      <Body post={post} postStatistics={postStatistics} />
    </div>
  );
};

export default Contents;
