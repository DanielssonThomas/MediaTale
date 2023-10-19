import Navigation from "@/components/Navigation/Navigation";
import CreatePostForm from "@/components/CreatePostForm/CreatePost";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { useState } from "react";
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

  return (
    <div className="bg-white dark:bg-black min-h-[100vh]">
      <Navigation isLoggedIn={true} />
      <div className="flex flex-col justify-center items-center w-full h-full">
        <h2 className="px-[2rem] pt-[1rem] text-xl">
          Post an small article or just something on your mind that you want to
          start a discussion about!
        </h2>
        <CreatePostForm categories={categories} />
      </div>
    </div>
  );
};

export default CreatePost;
