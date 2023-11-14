"use client";
import Image from "next/image";
import Link from "next/link";
import Heart from "@/components/General/Icons/Heart";
import Views from "@/components/General/Icons/Views";
import { useState } from "react";

type PostPreviewProps = {
  post_id: number;
  avatar_url: string | null;
  username: string | null;
  title: string | null;
  description: string | null;
  like_count: number | null;
  view_count: number | null;
  imageUrl: string;
};

export const ImagePreview = ({
  post_id,
  avatar_url,
  username,
  title,
  description,
  like_count,
  view_count,
  imageUrl,
}: PostPreviewProps) => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div className="dark:text-[#EDEDED] relative">
      <div className="absolute left-[-20px] top-[-15px] w-[40px] h-[40px] rounded-full overflow-hidden border-black dark:border-[#EDEDED] border-solid">
        <Image
          src={avatar_url || "/images/defaultPFP.jpeg"}
          alt={`${username}'s avatar`}
          fill
          className="object-cover z-50"
        />
      </div>
      <div className="flex flex-col justify-around relative w-full h-[10rem] rounded-[2px] border-solid border-[1px] border-black dark:border-[#EDEDED] bg-[#EDEDED] dark:bg-[#232323] overflow-hidden">
        <Image
          src={imageUrl}
          alt="Post preview"
          fill
          className="object-cover"
          onClick={() => setActive(!active)}
        />
        <p className="absolute left-6 top-[-20px] text-sm">{username}</p>
        <div
          className={`flex flex-col justify-end items-center absolute transition-all ${
            active ? "top-0" : "top-[8.5rem]"
          }  w-full h-6 border-b-[1px] border-solid border-white cursor-pointer z-40`}
          onClick={() => setActive(!active)}
        >
          <div className="w-full h-6 bg-[#232323] opacity-80" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`absolute mr-1 right-2 transition-all ${
              active ? "-rotate-90" : "rotate-90"
            }`}
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </div>
        <section
          className={`flex flex-col justify-center items-center absolute transition-all ${
            active ? "bottom-[-1px]" : "bottom-[-10rem]"
          } w-full h-[10rem] z-20`}
        >
          <div
            className={`transition-all ${
              active ? "opacity-80" : "opacity-0"
            } absolute w-full h-[10rem] bg-white dark:bg-black`}
            onClick={() => setActive(!active)}
          />
          <Link
            href={`/post/${post_id}`}
            className="flex flex-col p-1 text-center w-full z-30"
          >
            <input type="hidden" value={post_id} name="post_id" />
            <h3
              className={`${
                description === "" && "border-none"
              } sm:text-sm md:text-xl mx-4 border-solid border-b-[1px] border-black dark:border-[#EDEDED] p-2`}
            >
              {title}
            </h3>
            {description !== "" && (
              <p className="min-h-[3rem] p-2 text-sm">{description}</p>
            )}
          </Link>

          <div className="flex w-full justify-between items-center max-h-[1rem] p-2 z-30 absolute bottom-2">
            <div className="flex justiy-center items-center text-center h-[1rem] w-full border-r-[1px] border-solid border-black dark:border-white">
              <Heart action="liked" />
              <p className="text-[12px] ml-2">{like_count}</p>
            </div>
            <div className="flex justiy-center items-center text-center h-[1rem] w-full ml-2">
              <Views />
              <p className="text-sm ml-2">{view_count}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
