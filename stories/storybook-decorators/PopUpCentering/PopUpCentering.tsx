export const PopUpCentering = ({ story }: { story: JSX.Element }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-[#EDEDED] dark:bg-[#1C1C1C] relative">
      <div className="relative top-0 bottom-0 left-0 right-0 w-full">
        {story}
      </div>
    </div>
  );
};
