import Link from "next/link";

type ButtonDefaultProps = {
  text: string;
  type: "default";
  posTopLeft?: boolean;
  posTopRight?: boolean;
  width?: string;
};

type ButtonFormActionProps = {
  text: string;
  type: "formAction";
  formAction: string;
  posTopLeft?: boolean;
  posTopRight?: boolean;
  width?: string;
};

type ButtonLinkProps = {
  text: string;
  type: "link";
  href: string;
  posTopLeft?: boolean;
  posTopRight?: boolean;
  width?: string;
};

type ButtonStatic = {
  text: string;
  type: "static";
  posTopLeft?: boolean;
  posTopRight?: boolean;
  width?: string;
};

type ButtonProps =
  | ButtonDefaultProps
  | ButtonFormActionProps
  | ButtonLinkProps
  | ButtonStatic;

export const Button = (Button: ButtonProps) => {
  const topLeft = "absolute left-[15px] top-[15px]";
  const topRight = "absolute right-[15px] top-[15px]";
  let isAbsolute = false;
  let pos = "";
  if (Button.posTopLeft || Button.posTopRight) {
    isAbsolute = true;
    if (Button.posTopLeft) pos = topLeft;
    if (Button.posTopRight) pos = topRight;
  }

  const WrapperStyle = `${
    isAbsolute ? pos : "relative"
  } group border-solid border-[1px] border-black dark:border-[#EDEDED] md:border-none ${
    Button.width === "" || Button.width === undefined ? "w-40" : Button.width
  } h-[2rem] overflow-hidden z-40 text-center`;

  const SpanTopStyle = `absolute ${
    Button.width === "" || Button.width === undefined ? "w-40" : Button.width
  }  h-[1px] bg-[#1C1C1C] dark:bg-[#EDEDED] transition-all duration-500 left-[-10rem] top-0 group-hover:left-0`;

  const SpanBottomStyle = `absolute ${
    Button.width === "" || Button.width === undefined ? "w-40" : Button.width
  }  h-[1px] bg-[#1C1C1C] dark:bg-[#EDEDED] transition-all duration-500 right-[-10rem] bottom-0 group-hover:right-0`;
  const SpanLeftStyle =
    "absolute w-[1px] h-[2rem] bg-[#1C1C1C] dark:bg-[#EDEDED] transition-all duration-500 left-0 top-[-2rem] group-hover:top-0";
  const SpanRightStyle =
    "absolute w-[1px] h-[2rem] bg-[#1C1C1C] dark:bg-[#EDEDED] transition-all duration-500 right-0 bottom-[-2rem] group-hover:bottom-0";

  switch (Button.type) {
    case "link":
      return (
        <Link href={Button ? Button.href : "/"} className={WrapperStyle}>
          <span className={SpanTopStyle}></span>
          <span className={SpanBottomStyle}></span>
          <span className={SpanLeftStyle}></span>
          <span className={SpanRightStyle}></span>
          <div className="flex justify-center items-center h-full text-black dark:text-[#EDEDED]">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-1"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </div>
            <div className="text-sm">{Button.text}</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1 h-4 w-4 rotate-180 transition-transform group-hover:translate-x-1 "
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </div>
          </div>
        </Link>
      );
    case "formAction":
      return (
        <button formAction={Button.formAction} className={WrapperStyle}>
          <span className={SpanTopStyle}></span>
          <span className={SpanBottomStyle}></span>
          <span className={SpanLeftStyle}></span>
          <span className={SpanRightStyle}></span>
          <div className="flex justify-center items-center h-full text-black dark:text-[#EDEDED]">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-1"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </div>
            <div className="text-sm">{Button.text}</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1 h-4 w-4 rotate-180 transition-transform group-hover:translate-x-1 "
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </div>
          </div>
        </button>
      );
    case "default":
      return (
        <button className={WrapperStyle}>
          <span className={SpanTopStyle}></span>
          <span className={SpanBottomStyle}></span>
          <span className={SpanLeftStyle}></span>
          <span className={SpanRightStyle}></span>
          <div className="flex justify-center items-center h-full text-black dark:text-[#EDEDED]">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-1"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </div>
            <div className="text-sm">{Button.text}</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1 h-4 w-4 rotate-180 transition-transform group-hover:translate-x-1 "
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </div>
          </div>
        </button>
      );
    case "static":
      return (
        <div className={WrapperStyle}>
          <div className="flex justify-center items-center h-full text-black dark:text-[#EDEDED]">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-1"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </div>
            <div className="text-sm text-[#d0d0d0]">{Button.text}</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1 h-4 w-4 rotate-180 transition-transform group-hover:translate-x-1 "
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </div>
          </div>
        </div>
      );
  }
};
