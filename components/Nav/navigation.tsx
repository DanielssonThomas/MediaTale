import MTLogo from "@/public/icons/MediaTale";
import Link from "next/link";
import NavBurger from "@/public/icons/Navigation";
type NavProps = {
  isLoggedIn: boolean;
};

const Nav = ({ isLoggedIn }: NavProps) => {
  return (
    <div className="flex flex-col border-solid border-b-2 border-black dark:border-white w-full h-[60px] relative">
      {isLoggedIn ? (
        <div className="flex justify-center items-center w-screen h-full relative">
          <h1>MediaTale</h1>

          <div className="absolute flex flex-col justify-center items-center top-[15px] right-[15px] w-[100px] h-[30px] border-solid border-[1px] rounded-lg border-black">
            <Link href="/login">Sign in/up</Link>
          </div>
        </div>
      ) : (
        <MTLogo />
      )}
    </div>
  );
};

export default Nav;
