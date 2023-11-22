import React from "react";

type LikeIconProps = {
  Liked?: boolean | null;
};

const LikeIcon = ({ Liked }: LikeIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 100 100"
      className="cursor-pointer"
    >
      <g
        className={`${Liked ?? "#f10808"} dark:fill-[#EDEDED]`}
        strokeMiterlimit="10"
        strokeWidth="0"
      >
        <path d="M64.44 12.016a19.434 19.434 0 0113.831 5.729c7.626 7.626 7.626 20.035 0 27.662l-19.44 19.44L45 78.677 31.169 64.846l-19.44-19.44c-7.626-7.626-7.626-20.035 0-27.662a19.432 19.432 0 0113.831-5.729 19.434 19.434 0 0113.831 5.729l1.367 1.367L45 23.354l4.242-4.242 1.367-1.367a19.432 19.432 0 0113.831-5.729m0-6a25.477 25.477 0 00-18.073 7.486L45 14.869l-1.367-1.367C38.642 8.511 32.101 6.016 25.56 6.016S12.477 8.511 7.486 13.502c-9.982 9.982-9.982 26.165 0 36.147l19.44 19.44h.001L45 87.163 63.073 69.09l19.44-19.44c9.982-9.982 9.982-26.165 0-36.147A25.472 25.472 0 0064.44 6.016z"></path>
        <path d="M58.834 49.571H31.166a3 3 0 110-6h27.668a3 3 0 110 6z"></path>
        <path d="M45 63.405a3 3 0 01-3-3V32.738a3 3 0 116 0v27.667a3 3 0 01-3 3z"></path>
      </g>
    </svg>
  );
};

export default LikeIcon;
