import { Meta, StoryObj } from "@storybook/react";
import PostPreview from "@/components/PostFeed/PostPreview.tsx";
import { LoadingPreview } from "@/components/PostFeed/PostPreview.tsx/PostPreviewTypes/LoadingPreview";
const meta: Meta = {
  title: "components/General/PostFeed/PostFeed",
};

const PostPreviewCardProps = {};

export const Primary: StoryObj = {
  render: () => (
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
      </div>
    </section>
  ),
};

export const Loading: StoryObj = {
  render: () => (
    <section className="flex flex-col justify-center items-center w-full bg-[#EDEDED] dark:bg-[#1C1C1C] min-h-screen">
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
      </div>
    </section>
  ),
};

export default meta;
