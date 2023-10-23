import Link from "next/link";

const BackBtn = () => {
  return (
    <Link
      href="/"
      scroll={false}
      className="absolute flex flex-col justify-center items-center left-[15px] top-[15px] w-[100px] h-[30px] border-solid border-[1px] rounded-md border-black z-50"
    >
      Back
    </Link>
  );
};

export default BackBtn;
