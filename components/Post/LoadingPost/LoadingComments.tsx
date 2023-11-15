import { LoadingComment } from "./LoadingComment";

export const LoadingComments = () => {
  return (
    <div className="flex flex-col gap-6 p-4 w-full">
      <LoadingComment />
      <LoadingComment />
    </div>
  );
};
