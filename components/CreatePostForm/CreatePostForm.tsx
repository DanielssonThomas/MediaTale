"use client";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";
import AddIcon from "../General/Icons/Add";
import Button from "../General/Button";

export const CreatePostForm = () => {
  const [imageUpload, setImageUpload] = useState<File>();

  const handleForm = async (e: FormData) => {
    if (imageUpload) e.set("image", imageUpload);
    const data = await fetch("/api/posts/create-post", {
      method: "POST",
      body: e,
    });
    const res = await data.json();
    redirect(res.postUrl);
  };

  return (
    <form
      action={handleForm}
      method="POST"
      className="flex flex-col gap-6 m-[2rem] w-[20rem] sm:w-[35rem] md:w-[45rem]"
    >
      <div className="flex flex-col text-black dark:text-[#EDEDED]">
        <div>Title:</div>
        <input
          type="text"
          name="title"
          required
          className="border-solid border-[1px] rounded-sm border-black p-[0.5rem] bg-[#EDEDED] dark:bg-[#1C1C1C] dark:border-[#EDEDED]"
          placeholder="Catching title here"
        />
      </div>
      <div className="flex flex-col text-black dark:text-[#EDEDED]">
        <div>Description:</div>
        <textarea
          name="description"
          placeholder="Quickly describe your posts contents"
          className="p-[0.5rem] border-solid border-[1px] rounded-sm border-black bg-[#EDEDED] dark:bg-[#1C1C1C] dark:border-[#EDEDED]"
          maxLength={200}
        ></textarea>
      </div>

      <div className="flex flex-col text-black dark:text-[#EDEDED]">
        <div>Enter text contents: </div>
        <textarea
          name="text_content"
          placeholder="Write away as you please!"
          className="p-[0.5rem] border-solid border-[1px] rounded-sm border-black resize-y min-h-[30vh] bg-[#EDEDED] dark:bg-[#1C1C1C] dark:border-[#EDEDED]"
        ></textarea>
      </div>

      <div className="flex flex-col gap-5 text-black dark:text-[#EDEDED]">
        <div>
          <div>Upload image:</div>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={(e: any) => setImageUpload(e.target.files[0])}
            id="image-input"
            hidden
          />
        </div>
        <div>
          {imageUpload ? (
            <div className="flex flex-col justify-center items-center w-full h-[30rem] border-solid border-[1px] border-black dark:border-white relative">
              Preview
              <Image
                src={URL.createObjectURL(imageUpload)}
                alt="Uploaded image"
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div
              className="flex flex-col justify-center items-center w-full h-[30rem] border-solid border-[1px] border-black dark:border-white"
              onClick={() => document.getElementById("image-input")?.click()}
            >
              <AddIcon />
            </div>
          )}

          <i className="text-xs">
            *Image uploaded will act as the thumbnail of your post*
          </i>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <Button type="default" text="Post!" />
      </div>
    </form>
  );
};
