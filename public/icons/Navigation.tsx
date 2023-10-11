import React from "react";

function NavBurger() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className="fill-black dark:fill-white w-full h-full"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="2"
        d="M4 18h16M4 12h16M4 6h16"
      ></path>
    </svg>
  );
}

export default NavBurger;
