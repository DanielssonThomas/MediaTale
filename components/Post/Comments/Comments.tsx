import { Comment } from "./Comment/Comment";

type CommentsProps = {
  comments: commentData[] | null;
};

const Comments = ({ comments }: CommentsProps) => {
  if (comments?.length === 0) {
    return (
      <div className="flex justify-center items-center w-full">
        <h3>No comments</h3>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 p-4">
      {comments?.map((comment) => (
        <Comment
          avatar_url={comment.profiles.avatar_url}
          comment={comment.comment}
          disliked={comment.comment_event.dislike}
          id={comment.id}
          like_count={comment.like_count}
          liked
          username={comment.profiles.username}
          key={comment.id}
        />
      ))}
    </div>
  );
};

export default Comments;
