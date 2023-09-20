import PropTypes from "prop-types";
import React from "react";

export const BarChart2 = ({ color = "#D0D5DD", className }) => {
  return (
    <svg
      className={`bar-chart-2 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M18 20V10M12 20V4M6 20V14"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

BarChart2.propTypes = {
  color: PropTypes.string,
};
