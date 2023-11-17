"use client";
import Button from "@/components/General/Button";
import Image from "next/image";
import { useState } from "react";

type HeadingProps = {
  username: string | null | undefined;
};

const EditProfileHeading = ({ username }: HeadingProps) => {
  const [name, setName] = useState<string | null | undefined>(username);
  return (
    <div className="text-black dark:text-white">
      <div className="relative flex flex-col border-b-solid border-black dark:border-[#EDEDED] border-b-[1px] p-2 gap-[2rem]">
        <div className="flex flex-col">
          <div className="text-sm">Username:</div>
          <input
            name="username"
            type="text"
            className="text-lg dark:text-[#EDEDED] dark:bg-[#1C1C1C]"
            onChange={(e) => setName(e.target.value)}
            value={name !== null ? name : ""}
          />
        </div>
      </div>
    </div>
  );
};

export default EditProfileHeading;
