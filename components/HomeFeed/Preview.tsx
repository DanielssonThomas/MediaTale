import Image from "next/image";
import Link from "next/link";
import Heart from "@/components/General/Icons/Heart";
type PreviewProps = {
  postStatistics: postStatistic | undefined;
  post: postWithEvent;
  postLiked: boolean | null;
};

const Preview = ({ post, postStatistics, postLiked }: PreviewProps) => {
  return (
    <Link
      href={`/post/${post.id}`}
      className="relative w-full h-[100px] rounded-[2px] border-solid border-[1px] border-black dark:border-white"
    >
      <div className="absolute left-[-20px] top-[-15px] w-[25px] h-[25px] rounded-full overflow-hidden border-black dark:border-white border-solid">
        <Image
          src={post.image || "/images/defaultPFP.jpeg"}
          alt="your profile picture"
          fill={true}
        />
      </div>

      {post.image !== "" ? (
        <div className="flex flex-col p-1">
          <h3 className="text-2xl border-solid border-b-[1px] border-black dark:border-white">
            {post.title}
          </h3>
          <p>{post.description}</p>
        </div>
      ) : (
        <></>
      )}
      <div className="flex w-full justify-between items-center h-[1.5rem]">
        <div className="flex justify-between items-center w-full border-solid border-black dark:border-white border-r-[1px] px-1">
          <p>
            Likes:
            {postStatistics?.like_count}
          </p>
          <Heart />
        </div>
        <p className="w-full px-1">
          Views:
          {postStatistics?.view_count}
        </p>
      </div>
    </Link>
  );
};

export default Preview;
