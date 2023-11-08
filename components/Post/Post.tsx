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
    <div className="relative flex flex-col items-center">
      <Button text="Back" type="link" href="/" posTopLeft={true} />
      <div className="max-w-[40rem]">
        <Contents
          authorStatistics={authorStatistics}
          postStatistics={postStatistics}
          post={post}
        />
        <CreateComment post={post} authorStatistics={authorStatistics} />
        <Comments comments={comments} />
      </div>
    </div>
  );
};

export default Post;
