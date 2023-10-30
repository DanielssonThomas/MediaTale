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
      <article className="border-solid border-b-[1px] border-black dark:border-white p-4 min-h-[8rem]">
        {post?.text_content}
      </article>
      <div className="flex justify-center border-solid border-b-[1px] border-black dark:border-white w-full h-[4rem]">
        <div className="flex flex-col w-full border-r-[1px] border-solid border-black dark:border-white px-2">
          <h3>Likes:</h3>
          <div className="flex justify-between">
            <p>{postStatistics?.like_count}</p>
            <div className="flex justify-center items-center w-[24px] h-[24px] ">
              <LikeIcon />
            </div>
          </div>
        </div>
        <div className="w-full px-2 border-solid border-black dark:border-white border-r-[1px]">
          <h3 className="w-full">Created:</h3>
          <p>{createdAt}</p>
        </div>
        <div className="w-full px-2">
          <h3 className="w-full">Views:</h3>
          <p>{postStatistics?.view_count}</p>
        </div>
      </div>
      <div className="flex justify-between items-center w-full p-[0.5rem] border-b-[1px] border-solid border-black dark:border-white">
        <p>Did you like or dislike this post? </p>
        <div className="flex gap-2">
          <LikeIcon />
          <Dislike />
        </div>
      </div>
    </div>
  );
};
