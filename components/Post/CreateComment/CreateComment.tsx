import Image from "next/image";

type CreateCommentProps = {
  image?: string;
};

export const CreateComment = ({ image }: CreateCommentProps) => {
  return (
    <form className="flex justify-between items-center border-solid border-black dark:border-white border-b-[1px] w-full p-4 ">
      <div className="relative overflow-hidden rounded-full w-[32px] h-[32px]">
        <Image
          alt="your avatar"
          src={image || "/images/defaultPFP.jpeg"}
          fill={true}
        />
      </div>
      <input
        type="text"
        name="comment"
        placeholder="Write a comment for this post here"
      />
      <button
        type="submit"
        className="border-solid border-[1px] border-black dark:border-white p-2 rounded-md"
      >
        Comment
      </button>
    </form>
  );
};
