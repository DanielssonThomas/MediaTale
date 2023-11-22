import { Comment } from "./Comment/Comment";

type CommentsProps = {
  comments: commentData[] | undefined;
  signedInUserProfileId: number | undefined;
  post_id: number | undefined;
};

const Comments = ({
  comments,
  signedInUserProfileId,
  post_id,
}: CommentsProps) => {
  if (comments?.length === 0) {
    return (
      <div className="flex justify-center items-center w-full">
        <h3>No comments</h3>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 p-4 w-full">
      {comments?.map((comment) => (
        <Comment
          avatar_url={comment.profiles.avatar_url}
          comment={comment.comment}
          disliked={comment.comment_event.dislike_bool}
          id={comment.id}
          like_count={comment.like_count}
          liked={comment.comment_event.like_bool}
          username={comment.profiles.username}
          isOwner={signedInUserProfileId === comment.profile_id ? true : false}
          key={comment.id}
          post_id={post_id}
        />
      ))}
    </div>
  );
};

export default Comments;
