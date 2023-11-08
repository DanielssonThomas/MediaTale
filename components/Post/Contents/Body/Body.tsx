import Heart from "@/components/General/Icons/Heart";
import Views from "@/components/General/Icons/Views";
import FeedbackToggle from "@/components/General/FeedbackToggle";
type BodyProps = {
  post: post | null;
  postStatistics: postStatistic | null;
};

export const Body = ({ post, postStatistics }: BodyProps) => {
  const createdAt = postStatistics?.created_at.split("T")[0];
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <article className="border-solid border-b-[1px] border-black dark:border-white p-4 min-h-[8rem] w-full">
        {post?.text_content}
      </article>
      <div className="flex justify-between border-solid border-b-[1px] border-black dark:border-white w-full h-[4rem]">
        <div className="w-full px-2 border-solid border-black dark:border-white border-r-[1px]">
          <h3 className="w-full">Created:</h3>
          <p>{createdAt}</p>
        </div>

        <div className="flex flex-col justify-center items-center text-center w-1/2 border-r-[1px] border-solid border-black dark:border-white">
          <Heart />
          <p className="text-sm">{postStatistics?.like_count}</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center w-1/2">
          <Views />
          <p className="text-sm">{postStatistics?.view_count}</p>
        </div>
      </div>
      <div className="flex justify-between items-center w-full p-[0.5rem] border-b-[1px] border-solid border-black dark:border-white">
        <p>Did you like or dislike this post? </p>
        <FeedbackToggle />
      </div>
    </div>
  );
};
