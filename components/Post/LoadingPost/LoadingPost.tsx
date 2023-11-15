import { LoadingContents } from "./LoadingContents";
import { LoadingCreateComment } from "./LoadingCreateComment";
import { LoadingComments } from "./LoadingComments";

export const LoadingPost = () => {
  return (
    <div className="relative flex flex-col items-center dark:text-[#EDEDED] animate-pulse">
      <div className="w-[20rem] sm:w-[35rem] md:w-[45rem]">
        <LoadingContents />
        <LoadingCreateComment />
        <LoadingComments />
      </div>
    </div>
  );
};
