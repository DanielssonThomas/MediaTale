"use client";
import MTLogo from "@/components/General/Icons/MediaTale";
import Link from "next/link";
import NavMenu from "./NavMenu";
import Button from "../General/Button";
import Image from "next/image";
import { useState } from "react";

type NavProps = {
  isLoggedIn: boolean;
  avatar_url: string | null | undefined;
  showLoginButton?: boolean;
  profileImage?: string;
};

export const Navigation = ({
  isLoggedIn,
  avatar_url,
  showLoginButton,
}: NavProps) => {
  const [navMenuActive, setNavMenuActive] = useState<boolean>(false);
  return (
    <div className="flex flex-col border-solid border-b-2 border-black dark:border-white w-screen bg-white dark:bg-black h-[60px] relative text-black dark:text-white">
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
            className="absolute top-[5px] right-[20px] border-solid border-[1px] rounded-full border-black overflow-hidden w-[50px] h-[50px] z-50 cursor-pointer object-contain"
            onClick={() => setNavMenuActive(!navMenuActive)}
          >
            <Image
              src={avatar_url || "/images/defaultPFP.jpeg"}
              alt="your avatar"
              fill={true}
            />
          </div>
          <NavMenu active={navMenuActive} setActive={setNavMenuActive} />
        </div>
      ) : (
        <div className="relative flex justify-center items-center w-screen h-full">
          {showLoginButton && (
            <Button text="Back" type="link" href="/" posTopLeft={true} />
          )}
          <h1 className="text-2xl">MediaTale</h1>
          {showLoginButton && (
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
