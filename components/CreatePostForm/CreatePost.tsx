"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

type CreatePostFormProps = {
  categories: category[] | undefined;
};

const CreatePostForm = ({ categories }: CreatePostFormProps) => {
  const [imageUpload, setImageUpload] = useState<Blob>();

  return (
    <form
      action={"/api/posts/create-post"}
      method="POST"
      className="flex flex-col gap-6 m-[2rem]"
    >
      <div className="flex flex-col">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          required
          className="border-solid border-[1px] rounded-sm border-black p-[0.5rem]"
          placeholder="Catching title here"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          placeholder="Quickly describe your posts contents"
          className="p-[0.5rem] border-solid border-[1px] rounded-sm border-black"
          maxLength={200}
          required
        ></textarea>
      </div>

      <div className="flex flex-col">
        <label htmlFor="text_content">Enter text contents: </label>
        <textarea
          name="text_content"
          placeholder="Write away as you please!"
          className="p-[0.5rem] border-solid border-[1px] rounded-sm border-black"
        ></textarea>
      </div>

      <div className="flex flex-col gap-5">
        <div>
          <label htmlFor="image">Upload image:</label>
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
      <button className="border-solid border-black dark:border-white border-[1px] bg-green-700 text-white rounded">
        Post
      </button>
    </form>
  );
};

export default CreatePostForm;
