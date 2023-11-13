import Image from "next/image";

type ImagePopUpProps = {
  src: string;
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ImagePopUp = ({ src, isActive, setIsActive }: ImagePopUpProps) => {
  return (
    <div className="absolute top-0 left-0">
      <div
        className={`absolute w-screen h-screen bg-white dark:bg-black transition-opacity duration-300 ${
          isActive ? "opacity-30 z-20" : "opacity-0 -z-10"
        }`}
        onClick={() => setIsActive(!isActive)}
      />
      <div
        className={`relative transition-all duration-500 ${
          isActive ? "top-[15rem]" : "top-[-100vh]"
        } object-cover w-[50vw] z-30`}
      >
        <Image src={src} alt="Image preview" fill />
      </div>
    </div>
  );
};
