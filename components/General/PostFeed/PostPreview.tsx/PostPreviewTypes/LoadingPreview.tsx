export const LoadingPreview = () => {
  return (
    <div className="dark:text-[#EDEDED] animate-pulse">
      <button className="flex flex-col justify-around relative w-[20rem] h-[10rem] rounded-[2px] border-solid border-[1px] border-black dark:border-[#EDEDED] bg-[#cecdcd] dark:bg-[#232323]">
        <div className="absolute left-[-20px] top-[-15px] w-[40px] h-[40px] rounded-full overflow-hidden border-black dark:border-[#EDEDED] border-solid bg-[#cecdcd] dark:bg-[#3d3d3d]"></div>
      </button>
    </div>
  );
};
