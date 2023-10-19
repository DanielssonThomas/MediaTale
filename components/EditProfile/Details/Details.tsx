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
  const [countryContent, setCountryContent] = useState<
    string | null | undefined
  >(country);
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
    <div className="flex flex-col gap-4 p-2">
      <div className="flex flex-col border-solid border-black dark:border-white border-b-[1px] pb-2">
        <div className="text-sm">About:</div>
        <textarea
          name="about"
          className="text-base min-h-[5rem]"
          onChange={(e) => setAboutContent(e.target.value)}
          value={aboutContent === null ? "" : aboutContent}
        ></textarea>
      </div>
      <div className=" flex flex-col border-solid border-black dark:border-white border-b-[1px] pb-2">
        <div>
          <div className="text-sm py-4">First Name:</div>
          <input
            name="first_name"
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName === null ? "" : firstName}
            className="px-4"
          />
        </div>
        <div>
          <div className="text-sm">Last Name:</div>
          <input
            name="last_name"
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName === null ? "" : lastName}
            className="px-4"
          />
        </div>
      </div>
      <div className="border-solid border-black dark:border-white border-b-[1px] pb-2">
        <div className="text-sm py-4">Country:</div>
        <input
          name="country"
          type="text"
          onChange={(e) => setCountryContent(e.target.value)}
          value={countryContent === null ? "" : countryContent}
          className="px-4"
        />
      </div>
      <div className="border-solid border-black dark:border-white border-b-[1px] pb-2">
        <div className="text-sm">Buisness email:</div>
        <input
          name="contact_email"
          type="email"
          onChange={(e) => setContactContent(e.target.value)}
          value={contactContent === null ? "" : contactContent}
          className="px-4"
        />
      </div>
      <div className="border-solid border-black dark:border-white border-b-[1px] pb-2">
        <h3 className="text-sm">Created at:</h3>
        <section>{created_at}</section>
      </div>
    </div>
  );
};

export default EditProfileDetails;
