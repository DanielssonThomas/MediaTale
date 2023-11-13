import Image from "next/image";
import Link from "next/link";
import Heart from "@/components/General/Icons/Heart";
import Views from "@/components/General/Icons/Views";

type PostPreviewProps = {
  post_id: number;
  avatar_url: string | null;
  username: string | null;
  title: string | null;
  description: string | null;
  like_count: number | null;
  view_count: number | null;
};

export const TextPreview = ({
  post_id,
  avatar_url,
  username,
  title,
  description,
  like_count,
  view_count,
}: PostPreviewProps) => {
  return (
    <Link href={`/post/${post_id}`} className="dark:text-[#EDEDED]">
      <input type="hidden" value={post_id} name="post_id" />
      <button className="flex flex-col justify-around relative w-full h-[10rem] rounded-[2px] border-solid border-[1px] border-black dark:border-[#EDEDED] bg-[#EDEDED] dark:bg-[#232323]">
        <div className="absolute left-[-20px] top-[-15px] w-[40px] h-[40px] rounded-full overflow-hidden border-black dark:border-[#EDEDED] border-solid">
          <Image
            src={avatar_url || "/images/defaultPFP.jpeg"}
            alt={`${username}'s avatar`}
            fill={true}
            objectFit="cover"
          />
        </div>
        <p className="absolute left-6 top-[-20px] text-sm">{username}</p>

        <div className="flex flex-col p-1 text-center w-full">
          <h3 className="sm:text-2xl border-solid border-b-[1px] border-black dark:border-[#EDEDED]">
            {title}
          </h3>
          <p className="min-h-[3rem] p-2 text-sm">{description}</p>
        </div>

        <div className="flex w-full justify-end items-center h-[3rem]">
          <div className="flex flex-col justiy-center items-center text-center">
            <Heart action="liked" />

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
