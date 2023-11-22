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
    <Link
      href={`/post/${post_id}`}
      className="dark:text-[#EDEDED] sm:min-w-[15rem]"
    >
      <input type="hidden" value={post_id} name="post_id" />
      <div className="flex flex-col justify-around relative w-full h-[10rem] rounded-[2px] border-solid border-[1px] border-black dark:border-[#EDEDED] bg-[#EDEDED] dark:bg-[#232323]">
        <div className="absolute left-[-20px] top-[-15px] w-[40px] h-[40px] rounded-full overflow-hidden border-solid border-[1px] border-black dark:border-white">
          <Image
            src={avatar_url || "/images/defaultPFP.jpeg"}
            alt={`${username}'s avatar`}
            fill
            className="object-cover"
          />
        </div>
        <p className="absolute left-6 top-[-20px] text-sm">{username}</p>
        <div className="flex flex-col p-1 text-center w-full">
          <h3
            className={`${
              description === "" && "border-none"
            } sm:text-sm md:text-xl mx-4 border-solid border-b-[1px] border-black dark:border-[#EDEDED] p-2`}
          >
            {title}
          </h3>
          {description !== "" && (
            <p className="min-h-[3rem] p-2 text-sm">{description}</p>
          )}
        </div>

        <div className="flex w-full justify-between items-center max-h-[1rem] p-2 absolute bottom-2">
          <div className="flex justiy-center items-center text-center h-[1rem] w-full border-r-[1px] border-solid border-black dark:border-white">
            <Heart action="liked" />
            <p className="text-[12px] ml-2">{like_count}</p>
          </div>
          <div className="flex justiy-center items-center text-center h-[1rem] w-full ml-2">
            <Views />
            <p className="text-sm ml-2">{view_count}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
