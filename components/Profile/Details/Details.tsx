type DetailsProps = {
  about: string | null | undefined;
  country: string | null | undefined;
  contact_email: string | null | undefined;
  first_name: string | null | undefined;
  last_name: string | null | undefined;
  created_at: string | null | undefined;
};

export const ProfileDetails = ({
  about,
  country,
  contact_email,
  first_name,
  last_name,
  created_at,
}: DetailsProps) => {
  return (
    <div className="flex flex-col gap-4 px-6 w-[40rem] text-black dark:text-[#EDEDED]  border-x-[1px] border-solid border-black dark:border-[#EDEDED]">
      <div className="border-solid border-black dark:border-[#EDEDED] border-b-[1px] pb-2">
        <h2 className="text-xl">About:</h2>
        <section className="text-base min-h-[5rem]">{about}</section>
      </div>
      <div className="border-solid border-black dark:border-[#EDEDED] border-b-[1px] pb-2">
        <h3 className="text-xl">Name:</h3>
        <section>
          {first_name} {last_name}
        </section>
      </div>
      <div className="border-solid border-black dark:border-[#EDEDED] border-b-[1px] pb-2">
        <h3 className="text-xl">Country:</h3>
        <section>{country}</section>
      </div>
      <div className="border-solid border-black dark:border-[#EDEDED] border-b-[1px] pb-2">
        <h3 className="text-xl">Buisness email:</h3>
        <section>
          {contact_email ? contact_email : <i>No email entered</i>}
        </section>
      </div>
      <div className="border-solid border-black dark:border-[#EDEDED] border-b-[1px] pb-2">
        <h3 className="text-xl">Created at:</h3>
        <section>{created_at}</section>
      </div>
    </div>
  );
};
