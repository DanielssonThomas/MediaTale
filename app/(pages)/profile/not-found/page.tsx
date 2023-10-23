import Navigation from "@/components/Navigation/Navigation";
import BackBtn from "@/components/General/BackBtn/BackBtn";

const ProfileNotFound = () => {
  return (
    <div className="bg-white dark:bg-black min-h-[100vh]">
      <Navigation isLoggedIn={false} />
      <BackBtn />

      <div className="flex flex-col justify-center items-center w-full">
        <section className="flex flex-col gap-8 text-center p-8">
          <h2 className="text-4xl">No profile was found!</h2>
          <div>
            <i className="pb-2">
              If you are seeing this message there was an error fetching the
              profile you were looking for.
            </i>
            <i>Fix will be available soon! </i>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfileNotFound;
