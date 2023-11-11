"use client";
import Contents from "./Contents/Contents";
import Comments from "./Comments/Comments";
import Button from "../General/Button";
import CreateComment from "./CreateComment";
import { useEffect } from "react";

type PostProps = {
  authorStatistics: profile | null;
  post: postWithEvent | null;
  postStatistics: postStatistic | null;
  signedInUserProfileId: number | undefined;
  signedInUserAvatar: string | null | undefined;
  comments: commentData[] | null;
};

const Post = ({
  authorStatistics,
  post,
  postStatistics,
  signedInUserProfileId,
  signedInUserAvatar,
  comments,
}: PostProps) => {
  const incrementView = async () => {
    await fetch("/api/posts/increment-view", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ post_id: post?.id }),
    });
  };
  useEffect(() => {
    incrementView();
  }, []);
  return (
    <div className="relative flex flex-col items-center">
      <Button text="Back" type="link" href="/" posTopLeft={true} />
      <div className="max-w-[40rem]">
        <Contents
          authorStatistics={authorStatistics}
          postStatistics={postStatistics}
          post={post}
        />
        <CreateComment
          post={post}
          profile_id={signedInUserProfileId}
          image={signedInUserAvatar}
        />
        <Comments comments={comments} />
      </div>
    </div>
  );
};

export default Post;
