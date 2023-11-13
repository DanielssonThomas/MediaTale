import Navigation from "@/components/Navigation";
const Loading = () => {
  return (
    <div>
      <Navigation isLoggedIn={false} avatar_url={null} />
      <div className="flex flex-col justify-center items-center w-screen h-screen bg-[#EDEDED] dark:bg-[#1C1C1C]">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] text-black dark:text-white"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
