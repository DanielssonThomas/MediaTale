import Image from "next/image";
import Heart from "@/components/General/Icons/Heart";
import Views from "../Icons/Views";
import Link from "next/link";

type PostPreviewProps = {
  post_id: number;
  avatar_url: string | null;
  username: string | null;
  title: string | null;
  description: string | null;
  like_count: number | null;
  view_count: number | null;
  imageUrl: string | null;
};

export const PostPreview = ({
  post_id,
  avatar_url,
  username,
  title,
  description,
  like_count,
  view_count,
  imageUrl,
}: PostPreviewProps) => {
  return (
    <Link href={`/post/${post_id}`}>
      <input type="hidden" value={post_id} name="post_id" />
      <button className="flex flex-col justify-around relative w-full h-[10rem] rounded-[2px] border-solid border-[1px] border-black dark:border-white">
        <div className="absolute left-[-20px] top-[-15px] w-[25px] h-[25px] rounded-full overflow-hidden border-black dark:border-white border-solid">
          <Image
            src={avatar_url || "/images/defaultPFP.jpeg"}
            alt={`${username}'s avatar`}
            fill={true}
          />
        </div>

        {imageUrl !== "" ? (
          <div className="flex flex-col p-1 text-center w-full">
            <h3 className="text-2xl border-solid border-b-[1px] border-black dark:border-white">
              {title}
            </h3>
            <p className="min-h-[3rem] p-2">{description}</p>
          </div>
        ) : (
          <></>
        )}
        <div className="flex w-full justify-end items-center h-[3rem]">
          <div className="flex flex-col justiy-center items-center text-center">
            <Heart />
            <p className="text-sm">{like_count}</p>
          </div>
          <div className="flex flex-col justiy-center items-center text-center">
            <Views />
            <p className="text-sm">{view_count}</p>
          </div>
        </div>
      </button>
    </Link>
  );
};
