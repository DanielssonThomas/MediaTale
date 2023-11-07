type ButtonProps = {
  text: string;
};

export const Button = ({ text }: ButtonProps) => {
  return (
    <button className="group border-solid border-[1px] border-black dark:border-white md:border-none relative w-40 h-[2rem] bg-transparent overflow-hidden">
      <span className="absolute w-40 h-[1px] bg-black transition-all duration-500 left-[-10rem] top-0 group-hover:left-0"></span>
      <span className="absolute w-40 h-[1px] bg-black transition-all duration-500 right-[-10rem] bottom-0 group-hover:right-0"></span>
      <span className="absolute w-[1px] h-[2rem] bg-black transition-all duration-500 left-0 top-[-2rem] group-hover:top-0"></span>
      <span className="absolute w-[1px] h-[2rem] bg-black transition-all duration-500 right-0 bottom-[-2rem] group-hover:bottom-0"></span>
      {text}
    </button>
  );
};
