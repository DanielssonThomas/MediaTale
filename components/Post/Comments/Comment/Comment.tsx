import LikeIcon from "@/public/icons/Like";
import Dislike from "@/public/icons/Dislike";

type CommentProps = {
  comment: commentAndProfile;
};

export const Comment = ({ comment }: CommentProps) => {
  return (
    <div className="border-solid border-black dark:border-white border-[1px] rounded-md">
      <div className="border-solid border-black dark:border-white border-b-[1px] p-4">
        <h3 className="text-sm">{comment.profiles.username} says</h3>
        <p className="text-xs">{comment.comment}</p>
      </div>
      <div className="px-2">
        <div>{comment.like_count}</div>
      </div>
    </div>
  );
};
