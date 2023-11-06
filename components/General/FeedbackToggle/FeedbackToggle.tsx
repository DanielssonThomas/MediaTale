"use client";
import LikeIcon from "@/components/General/Icons/Like";
import DislikeIcon from "@/components/General/Icons/Dislike";
import { useState } from "react";

type FeedbackToggleProps = {
  post?: boolean;
  liked?: boolean;
  disliked?: boolean;
  id: number;
};

export const FeedbackToggle = ({
  post,
  liked,
  disliked,
  id,
}: FeedbackToggleProps) => {
  const handleLike = () => {};
  const handleDislike = () => {};
  return liked || disliked ? (
    <div className="flex justify-center items-center">
      {liked ? <LikeIcon /> : <DislikeIcon />}
    </div>
  ) : (
    <div className="flex gap-2">
      <div onClick={() => handleLike()}>
        <LikeIcon />
      </div>
      <div onClick={() => handleDislike()}>
        <DislikeIcon />
      </div>
    </div>
  );
};
