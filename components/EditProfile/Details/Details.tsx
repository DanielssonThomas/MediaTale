"use client";

import { useState } from "react";

type DetailsProps = {
  about: string | null | undefined;
  country: string | null | undefined;
  contact_email: string | null | undefined;
  first_name: string | null | undefined;
  last_name: string | null | undefined;
  created_at: string | null | undefined;
};

const EditProfileDetails = ({
  about,
  country,
  contact_email,
  first_name,
  last_name,
  created_at,
}: DetailsProps) => {
  const [aboutContent, setAboutContent] = useState<string | null | undefined>(
    about
  );
  const [contactContent, setContactContent] = useState<
    string | null | undefined
  >(contact_email);
  const [firstName, setFirstName] = useState<string | null | undefined>(
    first_name
  );
  const [lastName, setLastName] = useState<string | null | undefined>(
    last_name
  );

  return (
    <div className="flex flex-col gap-4 p-2 text-black dark:text-white">
      <div className="flex flex-col border-solid border-black dark:border-[#EDEDED] border-b-[1px]">
        <div className="text-sm">About:</div>
        <textarea
          name="about"
          className="text-base min-h-[5rem] dark:bg-[#1C1C1C]"
          onChange={(e) => setAboutContent(e.target.value)}
          value={aboutContent === null ? "" : aboutContent}
        ></textarea>
      </div>
      <div className=" flex flex-col border-solid border-black dark:border-[#EDEDED] border-b-[1px]">
        <div>
          <div className="text-sm">First Name:</div>
          <input
            name="first_name"
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName === null ? "" : firstName}
            className="text-lg w-full dark:bg-[#1C1C1C]"
          />
        </div>
        <div>
          <div className="text-sm">Last Name:</div>
          <input
            name="last_name"
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName === null ? "" : lastName}
            className="text-lg w-full dark:bg-[#1C1C1C]"
          />
        </div>
      </div>
      <div className="border-solid border-black dark:border-[#EDEDED] border-b-[1px]">
        <div className="text-sm">Country:</div>
        <select
          name="country"
          className="border-solid border-black dark:border-[#EDEDED] border-[1px] py-[0.5rem] px-[1rem] dark:bg-[#1C1C1C] w-full"
        >
          <option value="Sweden">Sweden</option>
          <option value="Finland">Finland</option>
          <option value="Norway">Norway</option>
        </select>
      </div>
      <div className="border-solid border-black dark:border-[#EDEDED] border-b-[1px] ">
        <div className="text-sm dark:text-[#EDEDED]">Buisness email:</div>
        <input
          name="contact_email"
          type="email"
          onChange={(e) => setContactContent(e.target.value)}
          value={contactContent === null ? "" : contactContent}
          placeholder="email here"
          className="text-lg w-full dark:bg-[#1C1C1C]"
        />
      </div>
      <div className="border-solid border-black dark:border-[#EDEDED] border-b-[1px]">
        <h3 className="text-sm">Created at:</h3>
        <section>{created_at}</section>
      </div>
    </div>
  );
};

export default EditProfileDetails;
