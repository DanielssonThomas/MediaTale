import { Comment } from "./Comment/Comment";

type CommentsProps = {
  comments: commentData[] | null;
};

const Comments = ({ comments }: CommentsProps) => {
  if (comments?.length === 1) {
    return (
      <div className="flex justify-center items-center w-full">
        <h3>No comments</h3>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 p-4">
      {comments?.map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </div>
  );
};

export default Comments;
