import Image from "next/image";

type HeadingProps = {
  username: string | null | undefined;
  followers: number | null | undefined;
  following: number | null | undefined;
  PFImage?: string;
};

const EditProfileHeading = ({
  username,
  followers,
  following,
  PFImage,
}: HeadingProps) => {
  return (
    <div>
      <div className="flex flex-col border-b-solid border-black dark:border-white border-b-[1px] p-2 text-center">
        <div className="flex">
          <div className="flex border-solid border-[1px] rounded-full border-black overflow-hidden w-[80px] h-[80px] cursor-pointer">
            <Image
              src={PFImage || "/images/defaultPFP.jpeg"}
              alt="your profile picture"
              width={80}
              height={80}
            />
          </div>

          <label htmlFor="avatar">Upload new profile picture:</label>
          <input name="avatar" type="file" accept=".jpg, .jpeg, .png" />
        </div>

        <div>
          <label htmlFor="username">Username:</label>
          <input
            name="username"
            type="text"
            className="w-[80px] text-3xl"
            placeholder={username ?? ""}
          />
        </div>
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

export default EditProfileHeading;
