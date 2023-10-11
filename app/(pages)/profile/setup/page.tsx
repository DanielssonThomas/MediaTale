import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

const SetupProfile = async () => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session === null) {
    redirect("/");
  }

  return (
    <div className="bg-white dark:bg-black w-full h-screen">
      <div className="flex flex-col justify-center items-center h-[10vh]">
        <h1 className="text-2xl">MediaTale - Setup process</h1>
      </div>
      <div className="flex flex-col justify-center items-center w-full h-[90vh]">
        <form
          action="/auth/setup-profile"
          method="POST"
          className="flex flex-col gap-2"
        >
          <label htmlFor="first_name">First Name: </label>
          <input
            type="text"
            name="first_name"
            className="border-solid border-black dark:border-white border-[1px] py-[0.5rem] px-[1rem]"
          />

          <label htmlFor="last_name">Last Name: </label>
          <input
            type="text"
            name="last_name"
            className="border-solid border-black dark:border-white border-[1px] py-[0.5rem] px-[1rem]"
          />

          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            className="border-solid border-black dark:border-white border-[1px] py-[0.5rem] px-[1rem]"
          />

          <div className="flex flex-col">
            <label htmlFor="about">About</label>
            <textarea
              name="about"
              placeholder="Some general information you want others to know!"
              className="border-solid border-black border-[1px] p-[0.5rem]"
            ></textarea>
          </div>
          <div className="flex justify-between items-center">
            <label htmlFor="country">Country: </label>
            <select
              name="country"
              className="border-solid border-black dark:border-white border-[1px] py-[0.5rem] px-[1rem]"
            >
              <option value="Sweden">Sweden</option>
              <option value="Finland">Finland</option>
              <option value="Norway">Norway</option>
            </select>
          </div>
          <div className="flex flex-col mb-8">
            <label htmlFor="contact_email">Contact Email: </label>
            <input
              type="email"
              name="contact_email"
              className="border-solid border-black dark:border-white border-[1px] py-[0.5rem] px-[1rem]"
            />
          </div>

          <button className="border-solid border-black dark:border-white border-[1px] py-[0.5rem] px-[1rem]">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};
export default SetupProfile;
