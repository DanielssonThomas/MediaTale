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
      <Heading authorStatistics={authorStatistics} post={post} />
      <Body post={post} postStatistics={postStatistics} />
    </div>
  );
};

export default Contents;
