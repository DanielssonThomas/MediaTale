import Image from "next/image";

type ImagePopUpProps = {
  src: string;
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ImagePopUp = ({ src, isActive, setIsActive }: ImagePopUpProps) => {
  return (
    <div
      className="absolute top-0 left-0 overflow-hidden"
      onClick={() => setIsActive(!isActive)}
    >
      <div
        className={`fixed top-0 w-screen h-[120vh] bg-white dark:bg-black transition-opacity duration-300 ${
          isActive ? "opacity-30 z-20" : "opacity-0 -z-10"
        }`}
      />
      <div
        className={`fixed transition-all duration-500 ${
          isActive
            ? "bottom-0 left-0 top-10 right-0 scale-1"
            : "bottom-[-100vh] scale-[0.5]"
        } left-[16.5vw] w-[66vw] h-[66vh] z-[9999]`}
      >
        <Image src={src} alt="Image preview" fill className="object-contain" />
      </div>
    </div>
  );
};
