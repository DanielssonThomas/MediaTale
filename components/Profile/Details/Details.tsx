type DetailsProps = {
  about: string | null | undefined;
  country: string | null | undefined;
  contact_email: string | null | undefined;
  created_at: string | null | undefined;
};

export const ProfileDetails = ({
  about,
  country,
  contact_email,
  created_at,
}: DetailsProps) => {
  const parsedCreatedAt = created_at?.split("T")[0];
  return (
    <div className="flex flex-col gap-4 px-6 w-full text-black dark:text-[#EDEDED]">
      <div className="border-b-[1px] border-solid border-black dark:border-white pb-4">
        <h2 className="text-sm">About:</h2>
        <p className="p-1">{about}</p>
      </div>
      <div className="flex flex-col sm:flex-row text-sm gap-4 w-full">
        <div className="flex gap-4 border-none sm:border-solid sm:border-r-[1px] sm:border-black sm:dark:border-white pr-4 w-full">
          <h2>Joined MediaTale: </h2>
          <p>{parsedCreatedAt}</p>
        </div>
        <div className="flex gap-4 border-none sm:border-solid sm:border-r-[1px] sm:border-black sm:dark:border-white pr-4 w-full">
          <h2>Located at:</h2>
          <p>{country}</p>
        </div>
        <div className="w-full">
          <h2>Contact:</h2>
          <p>{contact_email}</p>
        </div>
      </div>
    </div>
  );
};
