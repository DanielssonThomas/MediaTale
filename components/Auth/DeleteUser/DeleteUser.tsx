"use client";
import { useState } from "react";
import Button from "@/components/General/Button";

export const DeleteUser = () => {
  const [alertActive, setAlertActive] = useState<boolean>(false);
  const [inputValue, setInputvalue] = useState<string>("");

  return (
    <div>
      <div
        className={`${
          alertActive ? "opacity-100" : "opacity-0"
        } transition-all duration-300 absolute top-0 left-0 flex flex-col justify-center items-center w-full min-h-screen overflow-hidden`}
      >
        <div
          className={`transition-all duration-300 w-full min-h-screen z-20 bg-[#EDEDED]] dark:bg-[#EDEDED] ${
            alertActive ? "opacity-30" : "opacity-0"
          }`}
          onClick={() => setAlertActive(false)}
        ></div>
        <div
          className={`transition-all duration-700 ${
            alertActive ? "bottom-[12rem]" : "bottom-[-25rem]"
          } absolute flex flex-col justify-center items-center w-[25rem] h-[35rem] gap-12 z-[9999] bg-[#EDEDED] dark:bg-[#1C1C1C] text-center rounded-md`}
        >
          <h2 className="text-2xl">
            This will <i className="text-red-600">permanentaly</i> remove your
            account
          </h2>
          <p className="text-sm">
            Your posts, avatar and comments will be removed from the platform.
          </p>
          <p>Enter "CONFIRM" to continue</p>
          <input
            type="text"
            className="text-black dark:text-white border-[1px] border-solid border-black dark:border-white bg-[#EDEDED] dark:bg-[#1C1C1C] p-2 text-center"
            onChange={(e) => setInputvalue(e.target.value)}
          />
          <i>Are you sure about this?</i>
          <div className="flex justify-around">
            <form action="/auth/delete-user" method="POST">
              {inputValue == "CONFIRM" ? (
                <Button text="DELETE" type="default" />
              ) : (
                <Button text="DELETE" type="static" />
              )}
            </form>
          </div>
        </div>
      </div>

      <div onClick={() => setAlertActive(true)}>
        <Button text="Delete account" type="default" />
      </div>
    </div>
  );
};
