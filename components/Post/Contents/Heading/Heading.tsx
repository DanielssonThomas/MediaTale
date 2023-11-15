import Button from "@/components/General/Button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type HeadingProps = {
  username: string | null | undefined;
  avatar_url: string | null | undefined;
  follower_count: number | null | undefined;
  postOwner: boolean | null;
  post_id: number;
};

export const Heading = ({
  username,
  avatar_url,
  follower_count,
  postOwner,
  post_id,
}: HeadingProps) => {
  const [isDeletePostActive, setDeletePostActive] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className="relative flex justify-between w-full p-4 border-solid border-b-[1px] border-black dark:border-[#EDEDED]">
      <div
        className={`fixed ${
          isDeletePostActive ? "top-0" : "top-[120vh]"
        } left-0 w-screen h-screen z-[9999]`}
      >
        <div
          className="absolute top-0 left-0 bottom-0 right-0 w-screen h-screen bg-white dark:bg-black opacity-30"
          onClick={() => setDeletePostActive(!isDeletePostActive)}
        />
        <section
          className={`absolute transition-all duration-300 ${
            isDeletePostActive ? "scale-1" : "scale-[0.2]"
          } top-[33vh] left-[16.5vw] w-[66vw] md:w-[33vw] md:left-[33vw] h-[15rem] bg-[#EDEDED] dark:bg-[#1C1C1C] border-solid border-[1px] border-black dark:border-white`}
        >
          <div className="flex flex-col justify-around items-center h-full text-center">
            <p
              className="absolute flex justify-center items-center top-[-0.5rem] right-[-0.5rem] border-[1px] border-solid border-black dark:border-white bg-[#EDEDED] dark:bg-[#1C1C1C] rounded-full p-3 cursor-pointer w-4 h-4 text-xs"
              onClick={() => setDeletePostActive(!isDeletePostActive)}
            >
              X
            </p>
            <h2 className="text-xl">
              Are you sure you want to delete this post?
            </h2>
            <p>
              This will be <i className="text-red-700">permanent</i>
            </p>
            <i>Enter "DELETE" to continue</i>
            <input
              type="text"
              className="text-black dark:text-white border-[1px] border-solid border-black dark:border-white bg-[#EDEDED] dark:bg-[#1C1C1C] px-2 text-center"
              onChange={(e) => setInputValue(e.target.value)}
            />
            {inputValue === "DELETE" ? (
              <form action="/api/posts/delete-post" method="POST">
                <input type="hidden" name="post_id" value={post_id} />
                <Button type="default" text="Delete" />
              </form>
            ) : (
              <Button type="static" text="Delete" />
            )}
          </div>
        </section>
      </div>
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
          <div onClick={() => setDeletePostActive(!isDeletePostActive)}>
            <Button type="default" text="Remove" />
          </div>
        ) : (
          <Button type="default" text="Follow" />
        )}
      </div>
    </div>
  );
};
