export const CardCentering = ({ story }: { story: JSX.Element }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-[#EDEDED] dark:bg-[#1C1C1C]">
      <div className="w-[20rem]">{story}</div>
    </div>
  );
};
