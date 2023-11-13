export const LoadingContents = () => {
  return (
    <div>
      <div className="relative flex justify-between w-full p-4 border-solid border-b-[1px] border-black dark:border-[#EDEDED]">
        <div className="flex justify-center items-center mt-10" />
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <article className="border-solid border-b-[1px] border-black dark:border-[#EDEDED] py-4 min-h-[8rem] w-full"></article>
        <div className="flex justify-between border-solid border-b-[1px] border-black dark:border-[#EDEDED] w-full h-[4rem]">
          <div className="w-full px-2 border-solid border-black dark:border-[#EDEDED] border-r-[1px]">
            <h3 className="w-full">Created:</h3>
          </div>

          <div className="flex flex-col justify-center items-center text-center w-1/2 border-r-[1px] border-solid border-black dark:border-[#EDEDED]"></div>
          <div className="flex flex-col justify-center items-center text-center w-1/2"></div>
        </div>
        <div className="flex justify-between items-center w-full p-[0.5rem] border-b-[1px] border-solid border-black dark:border-[#EDEDED]">
          <p>Did you like or dislike this post? </p>
        </div>
      </div>
    </div>
  );
};
