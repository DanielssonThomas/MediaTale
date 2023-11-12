"use client";
import { useEffect, useState } from "react";

type ToastProps = {
  error: boolean;
  text: string;
};

export const Toast = ({ error, text }: ToastProps) => {
  const [show, setShow] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => setShow(!show), 3000);
  }, [error, text]);
  return (
    <div className="absolute w-screen h-[8rem] flex justify-center items-center top-0">
      <div
        className={`absolute flex flex-col justify-center items-center border-[1px] border-solid border-black dark:border-[#EDEDED] w-[20rem] h-[3rem] rounded-lg ${
          show === true ? "top-[1rem]" : "top-[-4rem]"
        } ${
          error ? "bg-red-500 " : "bg-green-500"
        } text-[#EDEDED] transition-all z-50`}
      >
        <p
          className="absolute flex justify-center items-center top-[-0.5rem] right-[-0.5rem] bg-[#EDEDED]] rounded-full p-1 cursor-pointer w-4 h-4 text-xs"
          onClick={() => setShow(!show)}
        >
          X
        </p>
        <h2>{text}</h2>
      </div>
    </div>
  );
};
