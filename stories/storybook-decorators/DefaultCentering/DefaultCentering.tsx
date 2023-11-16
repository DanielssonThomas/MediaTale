export const DefaultCentering = ({ story }: { story: JSX.Element }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-[#EDEDED] dark:bg-[#1C1C1C] relative">
      {story}
    </div>
  );
};
