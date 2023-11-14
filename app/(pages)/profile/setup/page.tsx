import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import IsSignedIn from "@/app/utils/auth/isSignedIn";
import Button from "@/components/General/Button";

export const dynamic = "force-dynamic";

const SetupProfile = async () => {
  const signedIn = await IsSignedIn();
  if (!signedIn) {
    redirect("/profile/not-found");
  }
  return (
    <div className="flex flex-col justify-center items-center bg-[#EDEDED] dark:bg-[#1C1C1C] w-screen h-screen text-black dark:text-white">
      <div className="flex flex-col justify-center items-center h-[10vh]">
        <h1 className="text-2xl">MediaTale - Setup process</h1>
      </div>
      <div className="flex flex-col justify-center items-center w-full h-[90vh]">
        <form
          action="/auth/setup-profile"
          method="POST"
          className="flex flex-col gap-2 w-[20rem] sm:w-[35rem] md:w-[45rem]"
        >
          <div>First Name: </div>
          <input
            type="text"
            name="first_name"
            className="border-solid border-black dark:border-[#EDEDED] border-[1px] py-[0.5rem] px-[1rem] bg-white dark:bg-[#1C1C1C]"
          />

          <div>Last Name: </div>
          <input
            type="text"
            name="last_name"
            className="border-solid border-black dark:border-[#EDEDED] border-[1px] py-[0.5rem] px-[1rem] bg-white dark:bg-[#1C1C1C]"
          />

          <div>Username: </div>
          <input
            type="text"
            name="username"
            className="border-solid border-black dark:border-[#EDEDED] border-[1px] py-[0.5rem] px-[1rem] bg-white dark:bg-[#1C1C1C]"
          />

          <div className="flex flex-col">
            <div>About</div>
            <textarea
              name="about"
              placeholder="Some general information you want others to know!"
              className="border-solid border-black dark:border-[#EDEDED] border-[1px] p-[0.5rem] bg-white dark:bg-[#1C1C1C]"
            ></textarea>
          </div>
          <div className="flex justify-between items-center">
            <div>Country: </div>
            <select
              name="country"
              className="border-solid border-black dark:border-[#EDEDED] border-[1px] py-[0.5rem] px-[1rem] bg-white dark:bg-[#1C1C1C]"
            >
              <option value="Sweden">Sweden</option>
              <option value="Finland">Finland</option>
              <option value="Norway">Norway</option>
            </select>
          </div>
          <div className="flex flex-col mb-8">
            <div>Contact Email: </div>
            <input
              type="email"
              name="contact_email"
              className="border-solid border-black dark:border-[#EDEDED] border-[1px] py-[0.5rem] px-[1rem] bg-white dark:bg-[#1C1C1C]"
            />
          </div>
          <div className="flex justify-center items-center">
            <Button text="save" type="default" />
          </div>
        </form>
      </div>
    </div>
  );
};
export default SetupProfile;
