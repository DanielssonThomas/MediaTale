import Navigation from "@/components/Navigation";
import CreatePostForm from "@/components/CreatePostForm";
import { getSignedInProfilePictureUrl } from "@/app/utils/supabase-queries/queries";
export const dynamic = "force-dynamic";

const CreatePost = async () => {
  const avatar_url = await getSignedInProfilePictureUrl();
  return (
    <div>
      <div className="bg-[#EDEDED] dark:bg-[#1C1C1C] min-h-[100vh] ">
        <Navigation isLoggedIn={true} avatar_url={avatar_url} />
        <div className="flex flex-col justify-center items-center w-full h-full">
          <h2 className="px-[2rem] pt-[1rem] text-2xl text-black dark:text-[#EDEDED]">
            Post something eye catching, or something you wish to discuss!
          </h2>
          <CreatePostForm />
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
