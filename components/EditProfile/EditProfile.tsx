"use client";
import EditProfileHeading from "./Heading/Heading";
import EditProfileDetails from "./Details/Details";
import Button from "../General/Button";

type EditProfileProps = {
  profile: profile;
};

const EditProfile = ({ profile }: EditProfileProps) => {
  return (
    <form action={"/auth/edit-profile"} method="POST" className="full p-8">
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
        <Button type="default" text="Save changes" />
      </div>
    </form>
  );
};

export default EditProfile;
