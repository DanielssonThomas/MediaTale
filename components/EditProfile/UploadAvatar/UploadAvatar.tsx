"use client";
import { useState } from "react";
import Image from "next/image";
import Button from "@/components/General/Button";
import Toast from "@/components/General/Toast";
import AddIcon from "@/components/General/Icons/Add";

export const UploadAvatar = () => {
  const [imageUpload, setImageUpload] = useState<File>();
  const [status, setStatus] = useState<boolean | null>(null);
  const [message, setMessage] = useState<string>("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!imageUpload) return;

    const data = new FormData();
    data.set("avatar", imageUpload);
    const res = await fetch("/auth/upload-avatar", {
      method: "POST",
      body: data,
    });

    const statusAndMessage = await res.json();
    setStatus(statusAndMessage.status);
    setMessage(statusAndMessage.message);
  };
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col justify-center items-center w-full gap-2"
    >
      {status !== null && <Toast error={status} text={message} />}

      <div className="mt-[3rem]">
        <div className="text-sm">Upload new profile picture:</div>
        <input
          name="avatar"
          type="file"
          accept="image/jpg, image/jpeg, image/png, image/webp"
          onChange={(e: any) => setImageUpload(e.target.files[0])}
          id="image-input"
          hidden
        />
      </div>
      <div className="flex justify-center items-center">
        {imageUpload ? (
          <div>
            <div
              className="relative flex flex-col justify-center items-center border-solid border-[1px] rounded-full border-black overflow-hidden w-[200px] h-[200px]"
              onClick={() => document.getElementById("image-input")?.click()}
            >
              <Image
                src={URL.createObjectURL(imageUpload)}
                alt="Uploaded image"
                fill
                className="object-cover"
              />
            </div>
          </div>
        ) : (
          <div>
            <div
              className="relative flex flex-col justify-center items-center border-solid border-[1px] rounded-full border-black dark:border-white overflow-hidden w-[200px] h-[200px]"
              onClick={() => document.getElementById("image-input")?.click()}
            >
              <AddIcon />
            </div>
          </div>
        )}
      </div>
      <Button
        type="default"
        text={`${message !== "" ? message : "Upload avatar"}`}
      />
    </form>
  );
};
