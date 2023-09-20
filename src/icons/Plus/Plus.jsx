import React from "react";

export const Plus = ({ className }) => {
  return (
    <svg
      className={`plus ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M9.99999 4.16666V15.8333M4.16666 9.99999H15.8333"
        stroke="#FEFEFE"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.67"
      />
    </svg>
  );
};
