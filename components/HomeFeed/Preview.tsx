import Image from "next/image";

type PreviewProps = {
  post: post;
};

const Preview = ({ post }: PreviewProps) => {
  return (
    <div className="relative w-full h-[100px] rounded-[2px] border-solid border-[1px] border-black dark:border-white">
      <div className="absolute left-[-20px] top-[-15px] w-[25px] h-[25px] rounded-full overflow-hidden border-black dark:border-white border-solid">
        <Image
          src={post.image || "/images/defaultPFP.jpeg"}
          alt="your profile picture"
          fill={true}
        />
      </div>

      {post.image !== "" ? (
        <div className="flex flex-col p-1">
          <h3 className="text-2xl">{post.title}</h3>
          <p>{post.description}</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Preview;
