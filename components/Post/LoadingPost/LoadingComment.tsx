export const LoadingComment = () => {
  return (
    <div>
      <div className="relative border-solid border-black dark:border-[#EDEDED] border-[1px] rounded-md  text-black dark:text-[#EDEDED]">
        <div className="absolute left-[-15px] top-[-10px] w-[30px] h-[30px] rounded-full overflow-hidden border-black dark:border-[#EDEDED] border-solid bg-white dark:bg-[#232323]" />
        <div className="border-solid border-black dark:border-[#EDEDED] border-b-[1px] p-4 text-black dark:text-[#EDEDED]">
          <h3 className="text-sm w-16 h-4 bg-white dark:bg-[#232323] mb-2"></h3>
          <p className="text-xs w-full h-12 bg-white dark:bg-[#232323]"></p>
        </div>
        <div className="flex justify-between px-2 w-full text-black dark:text-[#EDEDED] h-6">
          <p className="h-12 w-full"></p>
          <div className="flex justify-end items-center w-full gap-6">
            <div className="flex gap-2 mr-[16px] h-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
