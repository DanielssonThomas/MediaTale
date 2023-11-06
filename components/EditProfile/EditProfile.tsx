"use client";
import EditProfileHeading from "./Heading/Heading";
import EditProfileDetails from "./Details/Details";
import { FormEvent } from "react";

type EditProfileProps = {
  profile: profile;
};

const EditProfile = ({ profile }: EditProfileProps) => {
  return (
    <form action={"/auth/edit-profile"} method="POST">
      <EditProfileHeading
        followers={profile?.followers}
        following={profile?.following}
        username={profile?.username}
        PFImage=""
      />
      <EditProfileDetails
        about={profile?.about}
        contact_email={profile?.contact_email}
        country={profile?.country}
        created_at={profile?.created_at}
        first_name={profile?.first_name}
        last_name={profile?.last_name}
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
