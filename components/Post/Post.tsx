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
    <div className="relative flex flex-col items-center dark:text-[#EDEDED]">
      <Button text="Back" type="link" href="/" posTopLeft={true} />
      <div className="w-[20rem] sm:w-[35rem] md:w-[45rem]">
        <Contents
          authorStatistics={authorStatistics}
          postStatistics={postStatistics}
          post={post}
        />
        <CreateComment
          post_id={post?.id}
          profile_id={signedInUserProfileId}
          avatar_url={signedInUserAvatar}
        />
        <Comments comments={comments} />
      </div>
    </div>
  );
};

export default Post;
