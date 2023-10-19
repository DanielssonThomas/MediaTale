"use client";
import Image from "next/image";
import { useState } from "react";
import BackBtn from "@/components/General/BackBtn/page";

type HeadingProps = {
  username: string | null | undefined;
  followers: number | null | undefined;
  following: number | null | undefined;
  PFImage?: string;
};

const EditProfileHeading = ({
  username,
  followers,
  following,
  PFImage,
}: HeadingProps) => {
  const [imageUpload, setImageUpload] = useState<Blob>();
  const [avatar, setAvatar] = useState<Blob | null>(null);
  const [name, setName] = useState<string | null | undefined>(username);
  return (
    <div>
      <div className="relative flex flex-col border-b-solid border-black dark:border-white border-b-[1px] p-2 gap-[2rem]">
        <BackBtn />
        <div className="mt-[3rem]">
          <div className="text-sm">Upload new profile picture:</div>
          <input
            name="avatar"
            type="file"
            accept=".jpg, .jpeg, .png"
            onChange={(e: any) => setImageUpload(e.target.files[0])}
          />
        </div>
        <div className="flex justify-center items-center">
          {imageUpload && (
            <div>
              <div className="relative flex flex-col justify-center items-center border-solid border-[1px] rounded-full border-black overflow-hidden w-[200px] h-[200px]">
                <Image
                  src={URL.createObjectURL(imageUpload)}
                  alt="Uploaded image"
                  fill={true}
                />
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col">
          <div className="text-sm">Username:</div>
          <input
            name="username"
            type="text"
            className="text-lg"
            onChange={(e) => setName(e.target.value)}
            value={name !== null ? name : ""}
          />
        </div>
      </div>
      <div>
        <div className="flex justify-between w-full h-[2rem]">
          <h3 className="w-full border-solid border-black dark:border-white border-r-[1px] px-2 text-sm">
            Followers:
          </h3>
          <h3 className="w-full px-2 ">Following:</h3>
        </div>
        <div className="flex justify-between w-full h-[2rem] border-solid border-black dark:border-white border-b-[1px]">
          <h4 className="w-full px-2 border-solid border-black dark:border-white border-r-[1px]">
            {followers}
          </h4>
          <h4 className="w-full px-2">{following}</h4>
        </div>
      </div>
    </div>
  );
};

export default EditProfileHeading;
