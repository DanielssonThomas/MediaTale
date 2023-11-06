import Link from "next/link";

type NavMenuProps = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const NavMenu = ({ active, setActive }: NavMenuProps) => {
  return (
    <div
      className={`absolute w-full h-[100vh] bg-black text-white
      ${active ? "right-0" : "right-[-9999px]"} 
      top-0 transition duration-500 border-l-[1px] border-solid border-black dark:border-white z-40`}
    >
      <div className="flex flex-col gap-5 p-[1rem] mt-[60px]">
        <Link href={"/create-post"} className="flex md:hidden">
          Create post
        </Link>
        <Link href={"/profile"}>Your profile</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/settings"}>Settings</Link>

        <form action="/auth/sign-out" method="post">
          <button>Logout</button>
        </form>
      </div>
    </div>
  );
};
