import Navigation from "@/components/Navigation/Navigation";
import CreatePostForm from "@/components/CreatePostForm/CreatePostForm";

const CreatePost = () => {
  return (
    <div className="bg-white dark:bg-black">
      <Navigation isLoggedIn={true} />
      <div className="flex flex-col justify-center items-center w-full h-full">
        <h2 className="px-[2rem] pt-[1rem] text-xl">
          Post an small article or just something on your mind that you want to
          start a discussion about!
        </h2>
        <CreatePostForm />
      </div>
    </div>
  );
};

export default CreatePost;
