import Button from "@/components/General/Button";
import Image from "next/image";
import Link from "next/link";

type HeadingProps = {
  username: string | null | undefined;
  avatar_url: string | null | undefined;
  follower_count: number | null | undefined;
  postOwner: boolean | null;
};

export const Heading = ({
  username,
  avatar_url,
  follower_count,
  postOwner,
}: HeadingProps) => {
  return (
    <div className="relative flex justify-between w-full p-4 border-solid border-b-[1px] border-black dark:border-[#EDEDED]">
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
        {postOwner ? (
          <Button type="default" text="Remove" />
        ) : (
          <Button type="default" text="Follow" />
        )}
      </div>
    </div>
  );
};
