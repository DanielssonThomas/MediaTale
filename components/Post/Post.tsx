import Contents from "./Contents/Contents";
import Comments from "./Comments/Comments";
import BackBtn from "../General/BackBtn/BackBtn";

type PostProps = {
  authorStatistics: profile | null;
  post: post | null;
  postStatistics: postStatistic | null;
  comments: comment[] | null;
};

const Post = ({
  authorStatistics,
  post,
  postStatistics,
  comments,
}: PostProps) => {
  return (
    <div className="relative">
      <BackBtn />
      <Contents
        authorStatistics={authorStatistics}
        postStatistics={postStatistics}
        post={post}
      />
      <Comments comments={comments} />
    </div>
  );
};

export default Post;
