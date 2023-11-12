"use client";
import FeedbackToggle from "@/components/General/FeedbackToggle";
import ReplyForm from "./ReplyForm";
import { useState } from "react";
import Image from "next/image";
type CommentProps = {
  username: string;
  comment: string | null;
  like_count: number | null;
  disliked: boolean | undefined;
  liked: boolean | undefined;
  avatar_url: string | null;
  id: number;
};

export const Comment = ({
  username,
  comment,
  like_count,
  disliked,
  liked,
  avatar_url,
  id,
}: CommentProps) => {
  const [replyDropDown, setReplyDropDown] = useState<boolean>(false);

  return (
    <div>
      <div className="relative border-solid border-black dark:border-[#EDEDED] border-[1px] rounded-md min-w-[20rem]">
        <div className="absolute left-[-15px] top-[-10px] w-[30px] h-[30px] rounded-full overflow-hidden border-black dark:border-[#EDEDED] border-solid">
          <Image
            src={avatar_url ? avatar_url : "/images/defaultPFP.jpeg"}
            alt={`${username}'s avatar`}
            fill={true}
            objectFit="cover"
          />
        </div>
        <div className="border-solid border-black dark:border-[#EDEDED] border-b-[1px] p-4 text-black dark:text-[#EDEDED]">
          <h3 className="text-sm">{username}:</h3>
          <p className="text-xs">{comment}</p>
        </div>
        <div className="flex justify-between px-2 w-full text-black dark:text-[#EDEDED]">
          <div className="flex justify-between items-center w-full">
            <p>{like_count ? like_count : "0"} </p>
            <div className="flex gap-2 mr-[16px]">
              <FeedbackToggle
                id={id}
                type="comments"
                disliked={disliked}
                liked={liked}
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
