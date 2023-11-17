"use client";
import EditProfileHeading from "./Heading/Heading";
import EditProfileDetails from "./Details/Details";
import UploadAvatar from "./UploadAvatar";
import Button from "../General/Button";
type EditProfileProps = {
  username: string;
  about: string;
  contact_email: string;
  country: string;
  created_at: string;
  first_name: string;
  last_name: string;
};

const EditProfile = ({
  username,
  about,
  contact_email,
  country,
  created_at,
  first_name,
  last_name,
}: EditProfileProps) => {
  return (
    <div>
      <div className="full p-8">
        <UploadAvatar />
      </div>
      <form action={"/auth/edit-profile"} method="POST" className="w-full p-8">
        <EditProfileHeading username={username} />
        <EditProfileDetails
          about={about}
          contact_email={contact_email}
          country={country}
          created_at={created_at}
          first_name={first_name}
          last_name={last_name}
        />
        <div className="flex justify-center items-center">
          <Button type="default" text="Save changes" />
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
