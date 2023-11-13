import { LoadingPreview } from "./PostPreview.tsx/PostPreviewTypes/LoadingPreview";
const PostFeedLoading = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-col gap-6 max-w-[100rem] min-h-screen h-auto p-6 border-x-[1px] border-solid border-black dark:border-[#EDEDED] w-full">
        <LoadingPreview />
        <LoadingPreview />
        <LoadingPreview />
        <LoadingPreview />
      </div>
    </section>
  );
};

export default PostFeedLoading;
