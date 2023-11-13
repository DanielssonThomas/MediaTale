import Heart from "@/components/General/Icons/Heart";
import Views from "@/components/General/Icons/Views";
import FeedbackToggle from "@/components/General/FeedbackToggle";
import { redirect } from "next/navigation";
type BodyProps = {
  text_contents: string | null | undefined;
  createdAt: string;
  like_count: number | null;
  view_count: number | null;
  post_id: number;
  disliked: boolean | null;
  liked: boolean | null;
};

export const Body = ({
  text_contents,
  createdAt,
  like_count,
  view_count,
  post_id,
  disliked,
  liked,
}: BodyProps) => {
  const parsedCreatedAt = createdAt.split("T")[0];

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <article className="border-solid border-b-[1px] border-black dark:border-[#EDEDED] p-4 min-h-[8rem] w-full">
        {text_contents}
      </article>
      <div className="flex justify-between border-solid border-b-[1px] border-black dark:border-[#EDEDED] w-full h-[4rem]">
        <div className="w-full px-2 border-solid border-black dark:border-[#EDEDED] border-r-[1px]">
          <h3 className="w-full">Created:</h3>
          <p>{parsedCreatedAt}</p>
        </div>

        <div className="flex flex-col justify-center items-center text-center w-1/2 border-r-[1px] border-solid border-black dark:border-[#EDEDED]">
          <Heart action="liked" />
          <p className="text-sm">{like_count}</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center w-1/2">
          <Views />
          <p className="text-sm">{view_count}</p>
        </div>
      </div>
      <div className="flex justify-between items-center w-full p-[0.5rem] border-b-[1px] border-solid border-black dark:border-[#EDEDED]">
        <p>Did you like or dislike this post? </p>
        <FeedbackToggle
          id={post_id}
          type="posts"
          disliked={disliked !== null ? disliked : undefined}
          liked={liked !== null ? liked : undefined}
        />
      </div>
    </div>
  );
};
