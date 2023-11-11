import Navigation from "@/components/Navigation";
import CreatePostForm from "@/components/CreatePostForm/CreatePost";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { useState } from "react";
import { getSignedInProfilePictureUrl } from "@/app/utils/supabase-queries/queries";
export const dynamic = "force-dynamic";

const CreatePost = async () => {
  let categories: category[] | undefined = [];

  const supabase = createServerActionClient({ cookies });
  try {
    const { data, error } = await supabase.from("categories").select("*");
    if (data) {
      categories = data;
    }
  } catch (error) {
    console.error("Error fetching categories:");
  }
  const avatar_url = await getSignedInProfilePictureUrl();
  const theme = await cookies().get("theme");
  return (
    <div className={theme?.value}>
      <div className="bg-[#EDEDED] dark:bg-[#1C1C1C] min-h-[100vh]">
        <Navigation isLoggedIn={true} avatar_url={avatar_url} />
        <div className="flex flex-col justify-center items-center w-full h-full">
          <h2 className="px-[2rem] pt-[1rem] text-xl">
            Post an small article or just something on your mind that you want
            to start a discussion about!
          </h2>
          <CreatePostForm categories={categories} />
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
