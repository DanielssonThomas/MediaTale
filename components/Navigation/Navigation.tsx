"use client";
import MTLogo from "@/public/icons/MediaTale";
import Link from "next/link";
import Image from "next/image";

type NavProps = {
  isLoggedIn: boolean;
  path?: string;
  profileImage?: string;
};

const Navigation = ({ isLoggedIn, path, profileImage }: NavProps) => {
  return (
    <div className="flex flex-col border-solid border-b-2 border-black dark:border-white w-full h-[60px] relative">
      {isLoggedIn ? (
        <div className="flex justify-center items-center w-screen h-full relative">
          <div className="absolute flex flex-col justify-center items-center left-[20px] top-[5px] w-[50px] h-[50px] border-black">
            <MTLogo />
          </div>
          <div className="flex justify-between absolute top-[5px] right-[20px] w-[200px] h-[40px]">
            <div className="flex flex-col justify-center items-center mt-[5px] w-[120px] h-[40px] border-solid border-[1px] rounded-xl border-black dark:border-white cursor-pointer  ">
              + New post
            </div>
            <div className="border-solid border-[1px] rounded-full border-black overflow-hidden w-[50px] h-[50px] z-50">
              <Image
                src={profileImage || "/images/defaultPFP.jpeg"}
                alt="your profile picture"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center w-screen h-full relative">
          {path === "/login" && (
            <div className="absolute flex flex-col justify-center items-center left-[15px] top-[15px] w-[100px] h-[30px] border-solid border-[1px] rounded-md border-black">
              <Link href="/" scroll={false}>
                Back
              </Link>
            </div>
          )}
          <h1 className="text-2xl">MediaTale</h1>
          {path !== "/login" && (
            <div className="absolute flex flex-col justify-center items-center top-[15px] right-[15px] w-[100px] h-[30px] border-solid border-[1px] rounded-md border-black">
              <Link href="/login">Sign in/up</Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navigation;
