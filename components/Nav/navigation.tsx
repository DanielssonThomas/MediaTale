"use client";
import MTLogo from "@/public/icons/MediaTale";
import Link from "next/link";

type NavProps = {
  isLoggedIn: boolean;
  path: string;
  profileImage?: string;
};

const Nav = ({ isLoggedIn, path, profileImage }: NavProps) => {
  return (
    <div className="flex flex-col border-solid border-b-2 border-black dark:border-white w-full h-[60px] relative">
      {isLoggedIn ? (
        <div className="flex justify-center items-center w-screen h-full relative">
          <div>
            <MTLogo />
          </div>
          <div>
            <img src={profileImage} alt="Profile avatar" />
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center w-screen h-full relative">
          {path === "/login" ? (
            <div className="absolute flex flex-col justify-center items-center left-[15px] top-[15px] w-[100px] h-[30px] border-solid border-[1px] rounded-md border-black">
              <Link href="/" scroll={false}>
                Back
              </Link>
            </div>
          ) : (
            <></>
          )}
          <h1>MediaTale</h1>
          {path !== "/login" ? (
            <div className="absolute flex flex-col justify-center items-center top-[15px] right-[15px] w-[100px] h-[30px] border-solid border-[1px] rounded-md border-black">
              <Link href="/login">Sign in/up</Link>
            </div>
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
};

export default Nav;
