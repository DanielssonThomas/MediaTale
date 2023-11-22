const Hero = () => {
  return (
    <div className="bg-[#EDEDED] dark:bg-[#1C1C1C] flex flex-col justify-center items-center h-[90vh] w-full">
      <section className="md:absolute left-0 top-[-2px] h-[90vh] text-center dark:text-[#EDEDED] md:w-[25vw] z-10 bg-[#EDEDED] dark:bg-[#1C1C1C] p-2 border-r-[2px] border-solid border-black dark:border-white">
        <div className="h-12">
          <h2 className="text-4xl">MediaTale</h2>
        </div>
        <div className="flex flex-col gap-6 italic">
          <p>Welcome to MediaTale!</p>
          <p>
            Here you can post the latest news, something you are thinking about
            or ask for others opinions!
          </p>
          <p>
            You can also post images to contemplate your text, or visualize
            something of importance!
          </p>
          <p>Press sign in/up on the top right to get started</p>
        </div>
      </section>
      <div className="w-full h-screen md:w-[75vw] h-[90vh] object-contain md:absolute left-[25vw] top-0 bg-white dark:bg-black opacity-30 z-20" />
      <video
        loop
        muted
        autoPlay
        className="w-screen h-screen md:w-[75vw] md:h-[90vh] object-cover md:absolute left-[25vw] top-0"
      >
        <source src={"/video/MediaTale-posting.mov"} type="video/mp4" />
      </video>
    </div>
  );
};

export default Hero;
