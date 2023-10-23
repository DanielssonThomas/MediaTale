import LikeIcon from "@/public/icons/Like";
import Dislike from "@/public/icons/Dislike";
type BodyProps = {
  post: post | null;
  postStatistics: postStatistic | null;
};

export const Body = ({ post, postStatistics }: BodyProps) => {
  const createdAt = postStatistics?.created_at.split("T")[0];
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <article className="border-solid border-b-[1px] border-black dark:border-white p-4">
        {post?.text_content}
      </article>
      <div className="flex  justify-center border-solid border-b-[1px] border-black dark:border-white w-full h-[3rem]">
        <div className="flex justify-between items-center w-full border-r-[1px] border-solid border-black dark:border-white">
          <div className="flex w-32 p-4">{postStatistics?.like_count}</div>
          <div>
            <div className="w-[24px] h-[24px] mr-4"></div>
            <div className="w-[24px] h-[24px]"></div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          Created: {createdAt}
        </div>
      </div>
    </div>
  );
};