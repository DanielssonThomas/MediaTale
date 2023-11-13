"use client";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";

const CreatePostForm = () => {
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
      className="flex flex-col gap-6 m-[2rem]"
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
            accept="image/jpg, image/png"
            onChange={(e: any) => setImageUpload(e.target.files[0])}
          />
        </div>
        <div>
          {imageUpload && (
            <div>
              Preview:
              <Image
                src={URL.createObjectURL(imageUpload)}
                alt="Uploaded image"
                width={600}
                height={600}
              />
            </div>
          )}

          <i className="text-xs">
            *Image uploaded will act as the thumbnail and banner of your post*
          </i>
        </div>
      </div>
      <button className="border-solid border-black dark:border-[#EDEDED] border-[1px] bg-green-700 text-[#EDEDED] rounded">
        Post
      </button>
    </form>
  );
};

export default CreatePostForm;
