"use client";
import { useState } from "react";
import Button from "@/components/General/Button";

export const ChangePasswordEmail = () => {
  const [alertActive, setAlertActive] = useState<boolean>(false);
  return (
    <div>
      <div
        className={`${
          alertActive ? "opacity-100" : "opacity-0"
        } transition-all duration-300 absolute top-0 left-0 flex flex-col justify-center items-center w-full min-h-screen overflow-hidden`}
      >
        <div
          className={`transition-all duration-300 w-screen min-h-screen z-20 bg-[#EDEDED]] dark:bg-[#EDEDED] ${
            alertActive ? "opacity-30" : "opacity-0"
          }`}
          onClick={() => setAlertActive(false)}
        ></div>
        <div
          className={`transition-all duration-700 ${
            alertActive ? "bottom-[12rem]" : "bottom-[-25rem]"
          } absolute flex flex-col justify-center items-center w-[20rem] h-[25rem] gap-12 z-[9999] bg-[#EDEDED] dark:bg-[#1C1C1C] text-center rounded-md`}
        >
          <h2 className="text-2xl">We will email you!</h2>
          <p className="text-sm">
            To update the password we will send a link where you will be able to
            change your password once.
          </p>
          <div className="flex justify-around">
            <form
              action="/auth/send-PW-reset-user"
              method="POST"
              className="text-red"
            >
              <Button text="Send email" type="default" />
            </form>
          </div>
        </div>
      </div>
      <div onClick={() => setAlertActive(true)}>
        <Button text="Change password" type="default" />
      </div>
    </div>
  );
};
