export const LoadingContents = () => {
  return (
    <div className="">
      <div className="relative flex justify-between w-full p-4 border-solid border-b-[1px] border-black dark:border-[#EDEDED]">
        <div className="flex gap-4 mt-10">
          <div className="relative border-solid border-[1px] border-black dark:border-white w-[50px] h-[50px] rounded-full overflow-hidden bg-[#232323]" />
          <div className="flex flex-col ml-2 gap-1">
            <h3 className="h-4 w-20 bg-[#232323]"></h3>
            <p className="h-4 w-16 bg-[#232323]" />
          </div>
        </div>
        <div className="flex justify-center items-center mt-10">
          <div className="w-[5rem] h-8 bg-[#232323]" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <article className="border-solid border-b-[1px] border-black dark:border-[#EDEDED] py-4 min-h-[8rem] w-full bg-[#232323]"></article>
        <div className="flex justify-between border-solid border-b-[1px] border-black dark:border-[#EDEDED] w-full h-[4rem] bg-[#232323]">
          <div className="w-full px-2 border-solid border-black dark:border-[#EDEDED] border-r-[1px]" />
          <div className="flex flex-col justify-center items-center text-center w-1/2 border-r-[1px] border-solid border-black dark:border-[#EDEDED]" />
          <div className="flex flex-col justify-center items-center text-center w-1/2" />
        </div>
        <div className="flex justify-between items-center w-full p-[0.5rem] border-b-[1px] h-8 border-solid border-black dark:border-[#EDEDED] bg-[#232323]" />
      </div>
    </div>
  );
};
