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
    if (liked) {
      setAction("liked");
    }

    if (disliked) {
      setAction("disliked");
    }
  }, []);

  const handleEvent = async ({
    like,
    removeAction,
    e,
  }: {
    like?: boolean;
    removeAction?: boolean;
    e: React.MouseEvent<HTMLElement>;
  }) => {
    e.preventDefault();
    if (type === "comments") {
      if (!removeAction) {
        const status = await fetch(
          `/api/comments/${like ? "like-" : "dislike-"}comment`,
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({ comment_id: id }),
          }
        );
      } else {
        const status = await fetch(`/api/comments/remove-comment-event`, {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({ comment_id: id }),
        });
      }
    }

    if (type === "posts") {
      if (!removeAction) {
        const status = await fetch(
          `/api/posts/${like ? "like-" : "dislike-"}post`,
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({ post_id: id }),
          }
        );
      } else {
        const status = await fetch(`/api/posts/remove-post-event`, {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({ post_id: id }),
        });
      }
    }
  };

  return action === "liked" || action === "disliked" ? (
    <div
      className="flex justify-end items-center cursor-pointer w-[10rem]"
      onClick={(e: React.MouseEvent<HTMLElement>) => {
        handleEvent({ e: e, removeAction: true });
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
