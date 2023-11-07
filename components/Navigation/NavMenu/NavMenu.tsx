import Link from "next/link";
import Button from "@/components/General/Button";
type NavMenuProps = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const NavMenu = ({ active, setActive }: NavMenuProps) => {
  return (
    <div
      className={`absolute w-[425px] h-[100vh] transition-all bg-white text-black dark:bg-black dark:text-white
      ${active ? "right-0" : "right-[-100vw]"} 
      top-0 transition duration-200 border-l-[1px] border-solid border-black dark:border-white z-40`}
    >
      <div className="flex flex-col items-center gap-5 p-[1rem] mt-[60px] text-center">
        <Link href={"/create-post"} className="flex md:hidden">
          Create post
        </Link>
        <Button text="Your profile" type="link" href={"/profile"} />
        <Button text="About" type="link" href={"/about"} />
        <Button text="Settings" type="link" href={"/settings"} />

        <form action="/auth/sign-out" method="post">
          <Button text="Logout" type="default" />
        </form>
      </div>
    </div>
  );
};
