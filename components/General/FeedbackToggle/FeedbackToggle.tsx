"use client";
import LikeIcon from "@/components/General/Icons/Like";
import DislikeIcon from "@/components/General/Icons/Dislike";
import Heart from "../Icons/Heart";
import { useState, useEffect } from "react";

type FeedbackToggleCommentProps = {
  id: number;
  type: "comments";
  liked?: boolean;
  disliked?: boolean;
};

type FeedbackTogglePostProps = {
  id: number;
  type: "posts";
  liked?: boolean;
  disliked?: boolean;
};

type FeedbackToggleProps = FeedbackToggleCommentProps | FeedbackTogglePostProps;

export const FeedbackToggle = ({
  type,
  liked,
  disliked,
  id,
}: FeedbackToggleProps) => {
  const [actionTaken, setActionTaken] = useState<boolean>(
    liked || disliked ? true : false
  );
  const handleEvent = async ({
    like,
    e,
  }: {
    like: boolean;
    e: React.MouseEvent<HTMLElement>;
  }) => {
    e.preventDefault();
    if (type === "comments") {
      const { status } = await fetch(
        `/api/comments/${like ? "like-" : "dislike-"}comment`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ comment_id: id }),
        }
      );
      console.log(status);
      setActionTaken(status === 200 ? true : false);
    }

    if (type === "posts") {
      const { status } = await fetch(
        `/api/posts/${like ? "like-" : "dislike-"}post`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ post_id: id }),
        }
      );
      console.log(status);
      setActionTaken(status === 200 ? true : false);
    }
  };

  return actionTaken ? (
    <div className="flex justify-center items-center">
      <Heart />
    </div>
  ) : (
    <div className="flex gap-2">
      <button
        onClick={(e: React.MouseEvent<HTMLElement>) =>
          handleEvent({ like: true, e: e })
        }
      >
        <LikeIcon />
      </button>
      <button
        onClick={(e: React.MouseEvent<HTMLElement>) =>
          handleEvent({ like: false, e: e })
        }
      >
        <DislikeIcon />
      </button>
    </div>
  );
};
