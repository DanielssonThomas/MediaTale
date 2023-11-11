"use client";
import FeedbackToggle from "@/components/General/FeedbackToggle";
import ReplyForm from "./ReplyForm";
import { useState } from "react";

type CommentProps = {
  comment: commentData;
};

export const Comment = ({ comment }: CommentProps) => {
  const [replyDropDown, setReplyDropDown] = useState<boolean>(false);

  return (
    <div>
      <div className="relative border-solid border-black dark:border-[#EDEDED] border-[1px] rounded-md">
        <div className="border-solid border-black dark:border-[#EDEDED] border-b-[1px] p-4">
          <h3 className="text-sm">{comment.profiles.username} says</h3>
          <p className="text-xs">{comment.comment}</p>
        </div>
        <div className="flex justify-between px-2 w-full">
          <div className="flex justify-between items-center w-full">
            <p>{comment.like_count ? comment.like_count : "0"} </p>
            <div className="flex gap-2 mr-[16px]">
              <FeedbackToggle
                id={comment.id}
                type="comments"
                disliked={comment.comment_event.dislike}
                liked={comment.comment_event.like}
              />
            </div>
          </div>
          <div className="flex justify-around items-center w-full">
            <button>Reply</button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
