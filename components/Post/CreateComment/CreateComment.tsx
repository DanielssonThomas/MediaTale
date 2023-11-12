import Image from "next/image";

type CreateCommentProps = {
  profile_id: number | undefined;
  post_id: number | null | undefined;
  avatar_url: string | null | undefined;
};

export const CreateComment = ({
  profile_id,
  post_id,
  avatar_url,
}: CreateCommentProps) => {
  return (
    <form
      action={`/api/comments/create-comment`}
      method="POST"
      className="flex justify-between items-center border-solid border-black dark:border-[#EDEDED] border-b-[1px] w-full p-4 bg-[#EDEDED] dark:bg-[#1C1C1C]"
    >
      <div className="relative overflow-hidden rounded-full w-[32px] h-[32px]">
        <Image
          alt="your avatar"
          src={avatar_url || "/images/defaultPFP.jpeg"}
          fill={true}
          objectFit="cover"
        />
      </div>
      <input
        type="hidden"
        name="profile_id"
        value={profile_id === undefined ? 0 : profile_id}
      />
      <input type="hidden" name="post_id" value={post_id ?? 0} />
      <input
        type="text"
        name="comment"
        className="w-1/2 p-1 dark:bg-[#1C1C1C] dark:border-[#EDEDED] border-solid border-[1px]"
        placeholder="Write a comment for this post here"
      />
      <button
        type="submit"
        className="border-solid border-[1px] border-black dark:border-[#EDEDED] p-2 rounded-md"
      >
        Comment
      </button>
    </form>
  );
};
