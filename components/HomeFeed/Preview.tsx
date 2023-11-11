import Image from "next/image";
import Heart from "@/components/General/Icons/Heart";
import Views from "../General/Icons/Views";
import Link from "next/link";

type PreviewProps = {
  postStatistics: postStatistic | undefined;
  post: postWithEvent;
  postLiked: boolean | null;
};

const Preview = ({ post, postStatistics }: PreviewProps) => {
  return (
    <Link href={`/post/${post.id}`}>
      <input type="hidden" value={post.id} name="post_id" />
      <button className="flex flex-col justify-around relative w-full h-[10rem] rounded-[2px] border-solid border-[1px] border-black dark:border-white">
        <div className="absolute left-[-20px] top-[-15px] w-[25px] h-[25px] rounded-full overflow-hidden border-black dark:border-white border-solid">
          <Image
            src={
              postStatistics?.profiles?.avatar_url || "/images/defaultPFP.jpeg"
            }
            alt={`${postStatistics?.created_by}'s avatar`}
            fill={true}
          />
        </div>

        {post.image !== "" ? (
          <div className="flex flex-col p-1 text-center w-full">
            <h3 className="text-2xl border-solid border-b-[1px] border-black dark:border-white">
              {post.title}
            </h3>
            <p className="min-h-[3rem] p-2">{post.description}</p>
          </div>
        ) : (
          <></>
        )}
        <div className="flex w-full justify-end items-center h-[3rem]">
          <div className="flex flex-col justiy-center items-center text-center">
            <Heart />
            <p className="text-sm">{postStatistics?.like_count}</p>
          </div>
          <div className="flex flex-col justiy-center items-center text-center">
            <Views />
            <p className="text-sm">{postStatistics?.view_count}</p>
          </div>
        </div>
      </button>
    </Link>
  );
};

export default Preview;
