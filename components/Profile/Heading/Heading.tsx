import Image from "next/image";
import Button from "@/components/General/Button";

type HeadingProps = {
  username: string | null | undefined;
  followers: number | null | undefined;
  following: number | null | undefined;
  isCurrentUser: boolean;
  user_id: string | null | undefined;
  avatar_url: string | null;
};

export const ProfileHeading = ({
  username,
  followers,
  following,
  avatar_url,
  isCurrentUser,
}: HeadingProps) => {
  return (
    <div className="w-[40rem]">
      <div className="flex justify-between items-center border-b-solid border-black dark:border-[#EDEDED] border-b-[1px] p-2 text-center relative">
        <div className="relative border-solid border-[1px] rounded-full border-black overflow-hidden w-[50px] h-[50px]">
          <Image
            src={avatar_url || "/images/defaultPFP.jpeg"}
            alt={`${username}'s avatar`}
            fill={true}
          />
        </div>
        <h2 className="absolute left-1/3 text-3xl">{username}</h2>
        {isCurrentUser && (
          <Button type="link" text="edit" href="/profile/edit" />
        )}
      </div>
      <div>
        <div className="flex justify-between w-full h-[2rem]">
          <h3 className="w-full border-solid border-black dark:border-[#EDEDED] border-r-[1px] px-2">
            Followers:
          </h3>
          <h3 className="w-full px-2">Following:</h3>
        </div>
        <div className="flex justify-between w-full h-[2rem] border-solid border-black dark:border-[#EDEDED] border-b-[1px]">
          <h4 className="w-full px-2 border-solid border-black dark:border-[#EDEDED] border-r-[1px]">
            {followers}
          </h4>
          <h4 className="w-full px-2">{following}</h4>
        </div>
      </div>
    </div>
  );
};
