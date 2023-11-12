import DislikeIcon from "@/components/General/Icons/Dislike";
import LikeIcon from "@/components/General/Icons/Like";

import Image from "next/image";
import Link from "next/link";

type HeadingProps = {
  authorStatistics: profile | null;
  post: post | null;
};

export const Heading = ({ post, authorStatistics }: HeadingProps) => {
  return (
    <div className="relative flex justify-between w-full p-4 border-solid border-b-[1px] border-black dark:border-[#EDEDED]">
      <div className="flex gap-4 mt-10">
        <Link
          href={`/profile/${post?.created_by_username}`}
          className="relative border-solid border-[1px] border-black dark:border-[#EDEDED] w-[50px] h-[50px] rounded-full overflow-hidden"
        >
          <Image
            src={authorStatistics?.avatar_url || "/images/defaultPFP.jpeg"}
            alt={`${authorStatistics?.username}'s avatar`}
            fill={true}
            objectFit="cover"
          />
        </Link>
        <div className="flex flex-col">
          <h3>{post?.created_by_username}</h3>
          <p>{authorStatistics?.followers} followers</p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <button className="border-solid border-black dark:border-[#EDEDED] border-[1px] p-2 rounded-md">
          Follow!
        </button>
      </div>
    </div>
  );
};
