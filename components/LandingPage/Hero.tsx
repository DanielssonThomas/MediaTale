const Hero = () => {
  return (
    <div className="bg-[#EDEDED] dark:bg-[#1C1C1C] flex flex-col justify-center items-center h-[90vh] w-full">
      <section className="h-full text-center mt-[15rem] dark:text-[#EDEDED]">
        <div className="h-12">
          <h2 className="text-lg">MediaTale</h2>
        </div>
        <div className="italic">
          <p>
            Welcome to MediaTale, a small media platform for you to share
            events. You can share images, videos or perhaps plain text. Thus we
            allow many ways to share your thoughts and intrigued topics!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
