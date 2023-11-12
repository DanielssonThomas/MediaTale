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
  const [action, setAction] = useState<"liked" | "disliked" | null>(null);
  useEffect(() => {
    if (liked) setAction("liked");
    if (disliked) setAction("disliked");
  }, [action]);

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
    }
  };

  return action ? (
    <div
      className="flex justify-center items-center cursor-pointer w-[10rem]"
      onClick={() => {
        setAction(null);
      }}
    >
      <Heart action={action} />
    </div>
  ) : (
    <div className="flex gap-2">
      <button
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          setAction("liked");
          handleEvent({ like: true, e: e });
        }}
      >
        <LikeIcon />
      </button>
      <button
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          setAction("disliked");
          handleEvent({ like: false, e: e });
        }}
      >
        <DislikeIcon />
      </button>
    </div>
  );
};
