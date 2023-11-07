"use client";
import MTLogo from "@/components/General/Icons/MediaTale";
import Link from "next/link";
import Image from "next/image";
import NavMenu from "./NavMenu";
import Button from "../General/Button";
import { useState } from "react";

type NavProps = {
  isLoggedIn: boolean;
  path?: string;
  profileImage?: string;
};

export const Navigation = ({ isLoggedIn, path, profileImage }: NavProps) => {
  const [navMenuActive, setNavMenuActive] = useState<boolean>(false);
  return (
    <div className="flex flex-col border-solid border-b-2 border-black dark:border-white w-full h-[60px] relative text-black dark:text-white">
      {isLoggedIn ? (
        <div className="flex justify-center items-center w-screen h-full relative">
          <Link
            href={"/"}
            className="absolute flex flex-col justify-center items-center left-[20px] top-[5px] w-[50px] h-[50px] border-black z-50"
          >
            <div className="border-[1px] dark:border-white border-black border-solid rounded-full">
              <MTLogo />
            </div>
          </Link>

          <Link
            href={"/create-post"}
            className="absolute right-[90px] top-[5px] flex-col justify-center items-center mt-[5px] w-[120px] h-[40px] border-solid border-[1px] rounded-xl border-black dark:border-white cursor-pointer hidden md:flex"
          >
            + New post
          </Link>

          <div
            className="absolute top-[5px] right-[20px] border-solid border-[1px] rounded-full border-black overflow-hidden w-[50px] h-[50px] z-50 cursor-pointer"
            onClick={() => setNavMenuActive(!navMenuActive)}
          >
            <Image
              src={profileImage || "/images/defaultPFP.jpeg"}
              alt="your profile picture"
              width={50}
              height={50}
            />
          </div>
          <NavMenu active={navMenuActive} setActive={setNavMenuActive} />
        </div>
      ) : (
        <div className="relative flex justify-center items-center w-screen h-full">
          {path === "/login" && (
            <Button text="Back" type="link" href="/" posTopLeft={true} />
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
