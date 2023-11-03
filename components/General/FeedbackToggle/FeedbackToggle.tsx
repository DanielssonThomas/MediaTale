"use client";
import LikeIcon from "@/components/General/Icons/Like";
import DislikeIcon from "@/components/General/Icons/Dislike";
import { useState } from "react";

type FeedbackToggle = {
  liked?: boolean;
  disliked?: boolean;
};

export const FeedbackToggle = ({ liked, disliked }: FeedbackToggle) => {
  return liked || disliked ? (
    <div className="flex justify-center items-center">
      {liked ? <LikeIcon /> : <DislikeIcon />}
    </div>
  ) : (
    <div className="flex gap-2">
      <LikeIcon />
      <DislikeIcon />
    </div>
  );
};
