import { Meta, StoryObj } from "@storybook/react";
import EditProfileHeading from "@/components/EditProfile/Heading/Heading";
import EditProfileDetails from "@/components/EditProfile/Details/Details";
import UploadAvatar from "@/components/EditProfile/UploadAvatar";
import DefaultCentering from "../storybook-decorators/DefaultCentering";

const meta: Meta = {
  title: "components/Profile/Edit/EditProfile",
};

export const Primary: StoryObj = {
  render: () => (
    <div className="flex flex-col justify-center items-center w-full max-h-screen bg-[#EDEDED] dark:bg-[#1C1C1C] p-8">
      <div className="w-[20rem] sm:w-[35rem] lg:w-[60rem]">
        <UploadAvatar />
        <EditProfileHeading username={"Username"} />
        <EditProfileDetails
          about={"About"}
          contact_email={"email@goes.here"}
          country={"Country"}
          created_at={"2023-08-11"}
          first_name={"FirstName"}
          last_name={"LastName"}
        />
      </div>
    </div>
  ),
};

export default meta;
