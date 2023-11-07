import Link from "next/link";

type ButtonDefaultProps = {
  text: string;
  type: "default";
};

type ButtonFormActionProps = {
  text: string;
  type: "formAction";
  formAction: string;
};

type ButtonLinkProps = {
  text: string;
  type: "link";
  href: string;
};

type ButtonProps = ButtonDefaultProps | ButtonFormActionProps | ButtonLinkProps;

export const Button = (Button: ButtonProps) => {
  switch (Button.type) {
    case "link":
      return (
        <Link
          href={Button ? Button.href : "/"}
          className={`group border-solid border-[1px] border-black dark:border-white md:border-none relative w-40 h-[2rem] overflow-hidden `}
        >
          <span className="absolute w-40 h-[1px] bg-black dark:bg-white transition-all duration-500 left-[-10rem] top-0 group-hover:left-0"></span>
          <span className="absolute w-40 h-[1px] bg-black dark:bg-white transition-all duration-500 right-[-10rem] bottom-0 group-hover:right-0"></span>
          <span className="absolute w-[1px] h-[2rem] bg-black dark:bg-white transition-all duration-500 left-0 top-[-2rem] group-hover:top-0"></span>
          <span className="absolute w-[1px] h-[2rem] bg-black dark:bg-white transition-all duration-500 right-0 bottom-[-2rem] group-hover:bottom-0"></span>
          <div className="flex flex-col justify-center items-center h-full text-black dark:text-white">
            {Button.text}
          </div>
        </Link>
      );
    case "formAction":
      return (
        <button
          formAction={Button.formAction}
          className={`group border-solid border-[1px] border-black dark:border-white md:border-none relative w-40 h-[2rem] overflow-hidden`}
        >
          <span className="absolute w-40 h-[1px] bg-black dark:bg-white transition-all duration-500 left-[-10rem] top-0 group-hover:left-0"></span>
          <span className="absolute w-40 h-[1px] bg-black dark:bg-white transition-all duration-500 right-[-10rem] bottom-0 group-hover:right-0"></span>
          <span className="absolute w-[1px] h-[2rem] bg-black dark:bg-white transition-all duration-500 left-0 top-[-2rem] group-hover:top-0"></span>
          <span className="absolute w-[1px] h-[2rem] bg-black dark:bg-white transition-all duration-500 right-0 bottom-[-2rem] group-hover:bottom-0"></span>
          <div className="flex flex-col justify-center items-center h-full text-black dark:text-white">
            {Button.text}
          </div>
        </button>
      );
    case "default":
      return (
        <button
          className={`group border-solid border-[1px] border-black dark:border-white md:border-none relative w-40 h-[2rem] overflow-hidden`}
        >
          <span className="absolute w-40 h-[1px] bg-black dark:bg-white transition-all duration-500 left-[-10rem] top-0 group-hover:left-0"></span>
          <span className="absolute w-40 h-[1px] bg-black dark:bg-white transition-all duration-500 right-[-10rem] bottom-0 group-hover:right-0"></span>
          <span className="absolute w-[1px] h-[2rem] bg-black dark:bg-white transition-all duration-500 left-0 top-[-2rem] group-hover:top-0"></span>
          <span className="absolute w-[1px] h-[2rem] bg-black dark:bg-white transition-all duration-500 right-0 bottom-[-2rem] group-hover:bottom-0"></span>
          <div className="flex flex-col justify-center items-center h-full text-black dark:text-white">
            {Button.text}
          </div>
        </button>
      );
  }
};
