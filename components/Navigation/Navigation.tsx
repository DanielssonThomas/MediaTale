"use client";
import MTLogo from "@/public/icons/MediaTale";
import Link from "next/link";
import Image from "next/image";
import NavMenu from "./NavMenu/NavMenu";
import { useState } from "react";

type NavProps = {
  isLoggedIn: boolean;
  path?: string;
  profileImage?: string;
};

const Navigation = ({ isLoggedIn, path, profileImage }: NavProps) => {
  const [navMenuActive, setNavMenuActive] = useState<boolean>(false);
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
            <div
              className="border-solid border-[1px] rounded-full border-black overflow-hidden w-[50px] h-[50px] z-50 cursor-pointer"
              onClick={() => setNavMenuActive(!navMenuActive)}
            >
              <Image
                src={profileImage || "/images/defaultPFP.jpeg"}
                alt="your profile picture"
                width={50}
                height={50}
              />
            </div>
          </div>
          <NavMenu active={navMenuActive} setActive={setNavMenuActive} />
        </div>
      ) : (
        <div className="flex justify-center items-center w-screen h-full relative">
          {path === "/login" && (
            <Link
              href="/"
              scroll={false}
              className="absolute flex flex-col justify-center items-center left-[15px] top-[15px] w-[100px] h-[30px] border-solid border-[1px] rounded-md border-black"
            >
              Back
            </Link>
          )}
          <h1 className="text-2xl">MediaTale</h1>
          {path !== "/login" && (
            <Link
              href="/login"
              className="absolute flex flex-col justify-center items-center top-[15px] right-[15px] w-[100px] h-[30px] border-solid border-[1px] rounded-md border-black"
            >
              Sign in/up
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Navigation;
