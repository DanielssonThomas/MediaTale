import { useState } from "react";
import Button from "@/components/General/Button";

type DeletePostPopUpProps = {
  isDeletePostActive: boolean;
  setDeletePostActive: React.Dispatch<React.SetStateAction<boolean>>;
  post_id: number;
};

export const DeletePostPopUp = ({
  isDeletePostActive,
  setDeletePostActive,
  post_id,
}: DeletePostPopUpProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  return (
    <div
      className={`fixed ${
        isDeletePostActive ? "top-0" : "top-[120vh]"
      } left-0 w-screen h-screen z-[9999]`}
    >
      <div
        className="absolute top-0 left-0 bottom-0 right-0 w-screen h-screen bg-white dark:bg-black opacity-30"
        onClick={() => setDeletePostActive(!isDeletePostActive)}
      />
      <section
        className={`absolute transition-all duration-300 ${
          isDeletePostActive ? "scale-1" : "scale-[0.2]"
        } top-[33vh] left-[16.5vw] w-[66vw] md:w-[33vw] md:left-[33vw] h-[15rem] bg-[#EDEDED] dark:bg-[#1C1C1C] border-solid border-[1px] border-black dark:border-white`}
      >
        <div className="flex flex-col justify-around items-center h-full text-center">
          <p
            className="absolute flex justify-center items-center top-[-0.5rem] right-[-0.5rem] border-[1px] border-solid border-black dark:border-white bg-[#EDEDED] dark:bg-[#1C1C1C] rounded-full p-3 cursor-pointer w-4 h-4 text-xs"
            onClick={() => setDeletePostActive(!isDeletePostActive)}
          >
            X
          </p>
          <h2 className="text-xl">
            Are you sure you want to delete this post?
          </h2>
          <p>
            This will be <i className="text-red-700">permanent</i>
          </p>
          <i>Enter "DELETE" to continue</i>
          <input
            type="text"
            className="text-black dark:text-white border-[1px] border-solid border-black dark:border-white bg-[#EDEDED] dark:bg-[#1C1C1C] px-2 text-center"
            onChange={(e) => setInputValue(e.target.value)}
          />
          {inputValue === "DELETE" ? (
            <form action="/api/posts/delete-post" method="POST">
              <input type="hidden" name="post_id" value={post_id} />
              <Button type="default" text="Delete" />
            </form>
          ) : (
            <Button type="static" text="Delete" />
          )}
        </div>
      </section>
    </div>
  );
};
