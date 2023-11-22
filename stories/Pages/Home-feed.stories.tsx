import { Meta, StoryObj } from "@storybook/react";
import Navigation from "@/components/Navigation";
import PostPreview from "@/components/PostFeed/PostPreview.tsx";

const meta: Meta = {
  title: "Pages/home",
  tags: ["autodocs"],
};

export const Primary: StoryObj = {
  render: () => (
    <div className="bg-[#EDEDED] dark:bg-[#1C1C1C] w-full h-screen">
      <Navigation avatar_url={null} isLoggedIn={true} showUploadPost={true} />
      <section className="flex flex-col justify-center items-center w-full bg-[#EDEDED] dark:bg-[#1C1C1C] min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full sm:w-[40rem] lg:w-[60rem] p-6">
          <PostPreview
            avatar_url={null}
            description={"Description"}
            imageUrl={null}
            like_count={0}
            post_id={0}
            title={"Title"}
            username={"Username"}
            view_count={0}
          />
          <PostPreview
            avatar_url={null}
            description={"Description"}
            imageUrl={null}
            like_count={0}
            post_id={0}
            title={"Title"}
            username={"Username"}
            view_count={0}
          />
          <PostPreview
            avatar_url={null}
            description={"Description"}
            imageUrl={null}
            like_count={0}
            post_id={0}
            title={"Title"}
            username={"Username"}
            view_count={0}
          />
          <PostPreview
            avatar_url={null}
            description={"Description"}
            imageUrl={null}
            like_count={0}
            post_id={0}
            title={"Title"}
            username={"Username"}
            view_count={0}
          />
          <PostPreview
            avatar_url={null}
            description={"Description"}
            imageUrl={null}
            like_count={0}
            post_id={0}
            title={"Title"}
            username={"Username"}
            view_count={0}
          />
          <PostPreview
            avatar_url={null}
            description={"Description"}
            imageUrl={null}
            like_count={0}
            post_id={0}
            title={"Title"}
            username={"Username"}
            view_count={0}
          />
          <PostPreview
            avatar_url={null}
            description={"Description"}
            imageUrl={null}
            like_count={0}
            post_id={0}
            title={"Title"}
            username={"Username"}
            view_count={0}
          />
          <PostPreview
            avatar_url={null}
            description={"Description"}
            imageUrl={null}
            like_count={0}
            post_id={0}
            title={"Title"}
            username={"Username"}
            view_count={0}
          />
          <PostPreview
            avatar_url={null}
            description={"Description"}
            imageUrl={null}
            like_count={0}
            post_id={0}
            title={"Title"}
            username={"Username"}
            view_count={0}
          />
          <PostPreview
            avatar_url={null}
            description={"Description"}
            imageUrl={null}
            like_count={0}
            post_id={0}
            title={"Title"}
            username={"Username"}
            view_count={0}
          />
          <PostPreview
            avatar_url={null}
            description={"Description"}
            imageUrl={null}
            like_count={0}
            post_id={0}
            title={"Title"}
            username={"Username"}
            view_count={0}
          />
        </div>
      </section>
    </div>
  ),
};

export default meta;
