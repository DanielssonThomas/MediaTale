type PostFeedProps = {
  children: JSX.Element;
};

export const StorybookPostFeed = async ({ children }: PostFeedProps) => {
  if (children === null) {
    return (
      <div className="flex flex-col justify-center items-center w-full text-center p-4 gap-8 text-black dark:text-[#EDEDED]">
        <h2 className="text-3xl">No posts here yet!</h2>
        <p>Unfortunently there are no posts here!</p>
      </div>
    );
  }

  return (
    <section className="flex flex-col justify-center items-center w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full sm:w-[40rem] lg:w-[60rem] p-6 ">
        {children}
      </div>
    </section>
  );
};
