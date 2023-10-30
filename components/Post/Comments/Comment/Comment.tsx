"use client";
import LikeIcon from "@/public/icons/Like";
import Dislike from "@/public/icons/Dislike";
import ReplyForm from "./ReplyForm";
import { useState } from "react";

type CommentProps = {
  comment: commentAndProfile;
};

export const Comment = ({ comment }: CommentProps) => {
  const [replyDropDown, setReplyDropDown] = useState<boolean>(false);
  return (
    <div className="relative border-solid border-black dark:border-white border-[1px] rounded-md">
      <div className="border-solid border-black dark:border-white border-b-[1px] p-4">
        <h3 className="text-sm">{comment.profiles.username} says</h3>
        <p className="text-xs">{comment.comment}</p>
      </div>
      <div className="flex justify-between px-2 w-full">
        <div className="flex justify-between items-center w-full">
          <p>{comment.like_count ? comment.like_count : "0"} </p>
          <div className="mr-[16px]">
            <LikeIcon />
          </div>
        </div>
        <div className="flex justify-around items-center w-full">
          <button>View replies</button>
          <button>Reply</button>
        </div>
      </div>
    </div>
  );
};
