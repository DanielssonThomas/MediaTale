import Button from "@/components/General/Button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { DeletePostPopUp } from "./DeletePostPopUp";

type HeadingProps = {
  username: string | null | undefined;
  avatar_url: string | null | undefined;
  follower_count: number | null | undefined;
  postOwner: boolean | null;
  post_id: number;
  isFollowing: boolean;
  authorProfileId: number | undefined;
};

export const Heading = ({
  username,
  avatar_url,
  follower_count,
  postOwner,
  post_id,
  isFollowing,
  authorProfileId,
}: HeadingProps) => {
  const [isDeletePostActive, setDeletePostActive] = useState<boolean>(false);
  const [following, setFollowing] = useState<boolean>(isFollowing);
  console.log(authorProfileId);
  const handleFollow = async () => {
    if (following) {
      const status = await fetch("/api/profiles/un-follow", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ follower_profile_id: authorProfileId }),
      });
      setFollowing(false);
    }

    if (!following) {
      const status = await fetch("/api/profiles/follow", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ follower_profile_id: authorProfileId }),
      });
      setFollowing(true);
    }
  };

  return (
    <div className="relative flex justify-between w-full p-4 border-solid border-b-[1px] border-black dark:border-[#EDEDED]">
      <DeletePostPopUp
        isDeletePostActive={isDeletePostActive}
        setDeletePostActive={setDeletePostActive}
        post_id={post_id}
      />
      <div className="flex gap-4 mt-10">
        <Link
          href={`/profile/${username}`}
          className="relative border-solid border-[1px] border-black dark:border-white w-[50px] h-[50px] rounded-full overflow-hidden"
        >
          <Image
            src={avatar_url || "/images/defaultPFP.jpeg"}
            alt={`${username}'s avatar`}
            fill={true}
            className="object-cover"
          />
        </Link>
        <div className="flex flex-col">
          <h3>{username}</h3>
          <p>{follower_count} followers</p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        {postOwner && (
          <div onClick={() => setDeletePostActive(!isDeletePostActive)}>
            <Button type="default" text="Remove" />
          </div>
        )}

        {following && !postOwner && (
          <form onSubmit={handleFollow}>
            <Button type="default" text="Following!" />
          </form>
        )}

        {!following && !postOwner && (
          <form onSubmit={handleFollow}>
            <Button type="default" text="Follow" />
          </form>
        )}
      </div>
    </div>
  );
};
