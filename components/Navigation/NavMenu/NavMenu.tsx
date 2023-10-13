import Link from "next/link";

type NavMenuProps = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavMenu = ({ active, setActive }: NavMenuProps) => {
  return (
    <div
      className={`absolute w-[20rem] h-[100vh]
      ${active ? "right-0" : "right-[-20rem]"} 
      top-[60px] transition duration-500 border-l-[1px] border-solid border-black dark:border-white`}
    >
      <div className="flex flex-col gap-5 p-[1rem]">
        <Link href={"/profile"}>Your profile</Link>
        <Link href={"/About"}>About</Link>
        <Link href={"/Settings"}>Settings</Link>
        <form action="/auth/sign-out" method="post">
          <button>Logout</button>
        </form>
      </div>
    </div>
  );
};

export default NavMenu;
