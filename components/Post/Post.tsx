import Contents from "./Contents/Contents";
import Comments from "./Comments/Comments";
import Button from "../General/Button";
import CreateComment from "./CreateComment";

type PostProps = {
  authorStatistics: profile | null;
  post: post | null;
  postStatistics: postStatistic | null;
  comments: commentData[] | null;
};

const Post = ({
  authorStatistics,
  post,
  postStatistics,
  comments,
}: PostProps) => {
  return (
    <div className="relative">
      <Button text="Back" type="link" href="/" posTopLeft={true} />
      <Contents
        authorStatistics={authorStatistics}
        postStatistics={postStatistics}
        post={post}
      />
      <CreateComment post={post} authorStatistics={authorStatistics} />
      <Comments comments={comments} />
    </div>
  );
};

export default Post;
