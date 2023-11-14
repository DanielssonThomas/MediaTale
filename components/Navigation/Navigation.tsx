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
  showBackButton?: boolean;
  showUploadPost?: boolean;
};

export const Navigation = ({
  isLoggedIn,
  avatar_url,
  showLoginButton,
  showBackButton,
  showUploadPost,
}: NavProps) => {
  const [navMenuActive, setNavMenuActive] = useState<boolean>(false);
  return (
    <div className="flex flex-col border-solid border-b-2 border-black dark:border-[#EDEDED] w-screen bg-[#EDEDED] dark:bg-[#1C1C1C] h-[60px] relative text-black dark:text-[#EDEDED]">
      <div
        className={`absolute transition-all ${
          navMenuActive ? "right-0" : "-right-[100vw]"
        } z-40 w-screen h-screen`}
        onClick={() => {
          setNavMenuActive(!navMenuActive);
        }}
      />
      {isLoggedIn ? (
        <div className="flex justify-center items-center w-screen h-full relative">
          <Link
            href={"/"}
            className="absolute flex flex-col justify-center items-center left-[20px] top-[5px] w-[50px] h-[50px] border-black z-50"
          >
            <div className="border-[1px] dark:border-[#EDEDED] border-black border-solid rounded-full">
              <MTLogo />
            </div>
          </Link>
          {showUploadPost && (
            <Button type="link" href="/create-post" text="New post" />
          )}

          <div
            className="absolute top-[5px] right-[20px] border-solid border-[1px] rounded-full border-black overflow-hidden w-[50px] h-[50px] z-[99999] cursor-pointer"
            onClick={() => setNavMenuActive(!navMenuActive)}
          >
            <Image
              src={avatar_url || "/images/defaultPFP.jpeg"}
              alt="your avatar"
              fill
              className="object-cover"
            />
          </div>
          <NavMenu active={navMenuActive} setActive={setNavMenuActive} />
        </div>
      ) : (
        <div className="relative flex justify-center items-center w-screen h-full">
          {showBackButton && (
            <Button text="Back" type="link" href="/" posTopLeft={true} />
          )}
          <h1 className="text-2xl">MediaTale</h1>
          {showLoginButton && (
            <Button
              type="link"
              text="Sign in/up"
              href="/login"
              posTopRight={true}
            />
          )}
        </div>
      )}
    </div>
  );
};
