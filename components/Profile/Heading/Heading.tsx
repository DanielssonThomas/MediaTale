import Image from "next/image";
import Link from "next/link";

type HeadingProps = {
  username: string | null | undefined;
  followers: number | null | undefined;
  following: number | null | undefined;
  PFImage?: string;
  isCurrentUser: boolean;
};

export const ProfileHeading = ({
  username,
  followers,
  following,
  PFImage,
  isCurrentUser,
}: HeadingProps) => {
  return (
    <div>
      <div className="flex justify-between items-center border-b-solid border-black dark:border-white border-b-[1px] p-2 text-center">
        <div className="border-solid border-[1px] rounded-full border-black overflow-hidden w-[80px] h-[80px] cursor-pointer">
          <Image
            src={PFImage || "/images/defaultPFP.jpeg"}
            alt="your profile picture"
            width={80}
            height={80}
          />
        </div>
        <h2 className="w-[80px] text-3xl">{username}</h2>
        {isCurrentUser && (
          <Link
            href={"/profile/edit"}
            className="w-[80px] border-solid border-[1px] border-black dark:border-white px-2"
          >
            edit
          </Link>
        )}
      </div>
      <div>
        <div className="flex justify-between w-full h-[2rem]">
          <h3 className="w-full border-solid border-black dark:border-white border-r-[1px] px-2">
            Followers:
          </h3>
          <h3 className="w-full px-2">Following:</h3>
        </div>
        <div className="flex justify-between w-full h-[2rem] border-solid border-black dark:border-white border-b-[1px]">
          <h4 className="w-full px-2 border-solid border-black dark:border-white border-r-[1px]">
            {followers}
          </h4>
          <h4 className="w-full px-2">{following}</h4>
        </div>
      </div>
    </div>
  );
};
