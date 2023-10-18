"use client";
import EditProfileHeading from "./Heading/Heading";
import EditProfileDetails from "./Details/Details";
import { FormEvent } from "react";

type EditProfileProps = {
  userProfile: profile;
};

const EditProfile = ({ userProfile }: EditProfileProps) => {
  return (
    <form action={"/auth/edit-profile"} method="POST">
      <EditProfileHeading
        followers={userProfile?.followers}
        following={userProfile?.following}
        username={userProfile?.username}
        PFImage=""
      />
      <EditProfileDetails
        about={userProfile?.about}
        contact_email={userProfile?.contact_email}
        country={userProfile?.country}
        created_at={userProfile?.created_at}
        first_name={userProfile?.first_name}
        last_name={userProfile?.last_name}
      />
      <div className="flex justify-center items-center">
        <button
          type="submit"
          className="border-solid border-black dark:border-white border-[1px] bg-green-700 text-white rounded py-2 px-4 mb-4"
        >
          Save changes
        </button>
      </div>
    </form>
  );
};

export default EditProfile;
