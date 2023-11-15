import LoadingPost from "@/components/Post/LoadingPost";
import Navigation from "@/components/Navigation";

const Loading = () => {
  return (
    <div>
      <div className="bg-[#EDEDED] dark:bg-[#1C1C1C] min-h-[100vh]">
        <Navigation isLoggedIn={true} avatar_url={null} />

        <LoadingPost />
      </div>
    </div>
  );
};

export default Loading;
