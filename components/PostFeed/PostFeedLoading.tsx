import { LoadingPreview } from "./PostPreview/PostPreviewTypes/LoadingPreview";
const PostFeedLoading = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full sm:w-[40rem] lg:w-[60rem] p-6">
        <LoadingPreview />
        <LoadingPreview />
        <LoadingPreview />
        <LoadingPreview />
        <LoadingPreview />
        <LoadingPreview />
        <LoadingPreview />
        <LoadingPreview />
        <LoadingPreview />
        <LoadingPreview />
        <LoadingPreview />
        <LoadingPreview />
      </div>
    </section>
  );
};

export default PostFeedLoading;
