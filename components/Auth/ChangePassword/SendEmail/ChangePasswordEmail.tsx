"use client";
import { useState } from "react";
import Button from "@/components/General/Button";

export const ChangePasswordEmail = async () => {
  const [alertActive, setAlertActive] = useState<boolean>(false);
  return (
    <div>
      <div
        className={`${
          alertActive && "hidden"
        }absolute flex flex-col justify-center items-center w-full min-h-screen `}
      >
        <div
          className="w-full min-h-screen z-20 bg-black dark:bg-white opacity-30"
          onClick={() => setAlertActive(false)}
        ></div>
        <div className="flex flex-col justify-center items-center w-[15rem] h-[20rem] gap-4 z-30 bg-white dark:bg-black">
          <h2>An email for password update will be sent</h2>
          <p>Do you want to change your password</p>
          <div className="flex justify-around">
            <form action="/auth/send-PW-reset-email" method="POST">
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
