import { cookies } from "next/headers";

const Loading = async () => {
  const theme = cookies().get("theme")?.value;
  return (
    <div className={theme}>
      <div className="flex flex-col justiy-center items-center w-screen min-h-screen bg-[#EDEDED] dark:bg-[#1C1C1C]">
        <h2 className="text-black dark:text-white">Loading...</h2>
      </div>
    </div>
  );
};

export default Loading;
