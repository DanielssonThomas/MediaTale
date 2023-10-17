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
  return (
    <div className="flex flex-col gap-4 p-2">
      <div className="flex flex-col border-solid border-black dark:border-white border-b-[1px] pb-2">
        <label htmlFor="about" className="text-xl">
          About:
        </label>
        <textarea
          name="about"
          className="text-base min-h-[5rem]"
          placeholder={about ?? ""}
        ></textarea>
      </div>
      <div className=" flex flex-col border-solid border-black dark:border-white border-b-[1px] pb-2">
        <div>
          <label htmlFor="first_name" className="text-xl py-4">
            First Name:
          </label>
          <input
            name="first_name"
            type="text"
            placeholder={first_name ?? ""}
            className="px-4"
          />
        </div>
        <div>
          <label htmlFor="last_name" className="text-xl">
            Last Name:
          </label>
          <input
            name="last_name"
            type="text"
            placeholder={last_name ?? ""}
            className="px-4"
          />
        </div>
      </div>
      <div className="border-solid border-black dark:border-white border-b-[1px] pb-2">
        <label htmlFor="country" className="text-xl">
          Country:
        </label>
        <input
          name="country"
          type="text"
          placeholder={country ?? ""}
          className="px-4"
        />
      </div>
      <div className="border-solid border-black dark:border-white border-b-[1px] pb-2">
        <label htmlFor="contact_email" className="text-xl">
          Buisness email:
        </label>
        <input
          name="contact_email"
          type="email"
          placeholder={contact_email ? contact_email : "No email entered"}
        />
      </div>
      <div className="border-solid border-black dark:border-white border-b-[1px] pb-2">
        <h3 className="text-xl">Created at:</h3>
        <section>{created_at}</section>
      </div>
      <button>Save changes</button>
    </div>
  );
};

export default EditProfileDetails;
