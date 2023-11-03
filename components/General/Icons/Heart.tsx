import React from "react";

type HeartProps = {
  Liked?: boolean | null;
};

const Heart = ({ Liked }: HeartProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 90 90"
    >
      <g
        fill={`${Liked ? "#f10808" : "#000"}`}
        strokeMiterlimit="10"
        strokeWidth="0"
      >
        <path d="M64.44 12.016a19.434 19.434 0 0113.831 5.729c7.626 7.626 7.626 20.035 0 27.662l-19.44 19.44L45 78.677 31.169 64.846l-19.44-19.44c-7.626-7.626-7.626-20.035 0-27.662a19.432 19.432 0 0113.831-5.729 19.434 19.434 0 0113.831 5.729l1.367 1.367L45 23.354l4.242-4.242 1.367-1.367a19.432 19.432 0 0113.831-5.729m0-6a25.477 25.477 0 00-18.073 7.486L45 14.869l-1.367-1.367C38.642 8.511 32.101 6.016 25.56 6.016S12.477 8.511 7.486 13.502c-9.982 9.982-9.982 26.165 0 36.147l19.44 19.44h.001L45 87.163 63.073 69.09l19.44-19.44c9.982-9.982 9.982-26.165 0-36.147A25.472 25.472 0 0064.44 6.016z"></path>
      </g>
    </svg>
  );
};

export default Heart;
