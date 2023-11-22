"use client";
import FeedbackToggle from "@/components/General/FeedbackToggle";
import { useState } from "react";
import Image from "next/image";
import Button from "@/components/General/Button";
type CommentProps = {
  username: string;
  comment: string | null;
  like_count: number | null;
  disliked: boolean | null | undefined;
  liked: boolean | null | undefined;
  avatar_url: string | null;
  isOwner: boolean;
  id: number;
  post_id: number | undefined;
};

export const Comment = ({
  username,
  comment,
  like_count,
  disliked,
  liked,
  avatar_url,
  isOwner,
  id,
  post_id,
}: CommentProps) => {
  const [deletePopUp, setDeletePopUp] = useState<boolean>(false);
  return (
    <div>
      <div
        className={`fixed ${
          deletePopUp ? "top-0" : "top-[120vh]"
        } left-0 w-screen h-screen z-[9999]`}
      >
        <div
          className="absolute top-0 left-0 bottom-0 right-0 w-screen h-screen bg-white dark:bg-black opacity-30"
          onClick={() => setDeletePopUp(!deletePopUp)}
        />
        <section
          className={`absolute transition-all duration-300 ${
            deletePopUp ? "scale-1" : "scale-[0.2]"
          } top-[33vh] left-[16.5vw] w-[66vw] md:w-[33vw] md:left-[33vw] h-[10rem] bg-[#EDEDED] dark:bg-[#1C1C1C] border-solid border-[1px] border-black dark:border-white`}
        >
          <div className="flex flex-col justify-around items-center h-full text-center">
            <p
              className="absolute flex justify-center items-center top-[-0.5rem] right-[-0.5rem] border-[1px] border-solid border-black dark:border-white bg-[#EDEDED] dark:bg-[#1C1C1C] rounded-full p-3 cursor-pointer w-4 h-4 text-xs"
              onClick={() => setDeletePopUp(!deletePopUp)}
            >
              X
            </p>
            <h2>Are you sure you want to delete this comment?</h2>
            <form action="/api/comments/delete-comment" method="POST">
              <input type="hidden" name="comment_id" value={id} />
              <input type="hidden" name="post_id" value={post_id} />
              <Button type="default" text="Delete" />
            </form>
          </div>
        </section>
      </div>

      <div className="relative border-solid border-black dark:border-[#EDEDED] border-[1px] rounded-md  text-black dark:text-[#EDEDED]">
        {isOwner && (
          <p
            className="absolute flex justify-center items-center top-[-0.5rem] right-[-0.5rem] border-[1px] border-solid border-black dark:border-white bg-[#EDEDED] dark:bg-[#1C1C1C] rounded-full p-3 cursor-pointer w-4 h-4 text-xs"
            onClick={() => setDeletePopUp(!deletePopUp)}
          >
            X
          </p>
        )}

        <div className="absolute left-[-15px] top-[-10px] w-[30px] h-[30px] rounded-full overflow-hidden border-black dark:border-[#EDEDED] border-solid">
          <Image
            src={avatar_url ? avatar_url : "/images/defaultPFP.jpeg"}
            alt={`${username}'s avatar`}
            fill={true}
            className="object-cover"
          />
        </div>
        <div className="border-solid border-black dark:border-[#EDEDED] border-b-[1px] p-4 text-black dark:text-[#EDEDED]">
          <h3 className="text-sm">{username}:</h3>
          <p className="text-xs">{comment}</p>
        </div>
        <div className="flex justify-between px-2 w-full text-black dark:text-[#EDEDED]">
          <div className="flex justify-end items-center w-full gap-6">
            <p>{like_count ?? "0"}</p>
            <div className="flex gap-2 mr-[16px]">
              <FeedbackToggle
                id={id}
                type="comments"
                disliked={disliked ?? false}
                liked={liked ?? false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
