import PostFeedLoading from "@/components/PostFeed/PostFeedLoading";
import Navigation from "@/components/Navigation";
const Loading = () => {
  return (
    <div className="bg-[#EDEDED] dark:bg-[#1C1C1C] w-full min-h-[100vh]">
      <Navigation isLoggedIn={true} avatar_url={null} showUploadPost={true} />
      <div className="flex justify-center items-center w-full">
        <div className="max-w-[40rem]">
          <PostFeedLoading />
        </div>
      </div>
    </div>
  );
};

export default Loading;
