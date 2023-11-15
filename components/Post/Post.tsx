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
  comments: commentData[] | undefined;
  postOwner: boolean | null;
};

const Post = ({
  authorStatistics,
  post,
  postStatistics,
  signedInUserProfileId,
  signedInUserAvatar,
  comments,
  postOwner,
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
      <Button text="Back" type="link" href="/home-feed" posTopLeft={true} />
      <div className="w-[20rem] sm:w-[35rem] md:w-[45rem]">
        <Contents
          avatar_url={authorStatistics?.avatar_url}
          created_at={postStatistics?.created_at}
          disliked={
            post?.post_event.dislike_bool ? post.post_event.dislike_bool : null
          }
          follower_count={authorStatistics?.followers}
          image_url={post?.image_url}
          like_count={postStatistics?.like_count ?? 0}
          liked={post?.post_event.like_bool ?? null}
          post_id={post?.id ?? 0}
          text_contents={post?.text_content}
          username={authorStatistics?.username}
          view_count={postStatistics?.view_count ?? 0}
          postOwner={postOwner}
        />
        <CreateComment
          post_id={post?.id}
          profile_id={signedInUserProfileId}
          avatar_url={signedInUserAvatar}
        />
        <Comments
          comments={comments}
          signedInUserProfileId={signedInUserProfileId}
        />
      </div>
    </div>
  );
};

export default Post;
