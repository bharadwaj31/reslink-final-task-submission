/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Avatar } from "../Avatar";
import "./style.css";

export const AvatarLabelGroup = ({ size, statusIcon, state, className, textClassName, supportingTextClassName }) => {
  return (
    <div className={`avatar-label-group size-2-${size} ${className}`}>
      <Avatar
        className={`${
          statusIcon === "online-indicator" && size === "sm" && state === "focus"
            ? "class-3"
            : size === "sm" && state === "focus" && statusIcon === "company"
            ? "class-4"
            : statusIcon === "false" && size === "sm" && state === "focus"
            ? "class-5"
            : ["default", "hover"].includes(state)
            ? "class-6"
            : "class-7"
        }`}
        placeholder={false}
        size={size === "lg" ? "lg" : size === "xl" ? "xl" : size === "sm" ? "sm" : "md"}
        state={state === "focus" ? "focused" : "default"}
        statusIcon={statusIcon === "company" ? "company" : statusIcon === "false" ? "false" : "online-indicator"}
        text={false}
      />
      <div className="text-and-supporting">
        <div className={`text-2 ${textClassName}`}>Olivia Rhye</div>
        <div className={`supporting-text ${supportingTextClassName}`}>olivia@untitledui.com</div>
      </div>
    </div>
  );
};

AvatarLabelGroup.propTypes = {
  size: PropTypes.oneOf(["md", "sm", "lg", "xl"]),
  statusIcon: PropTypes.oneOf(["false", "company", "online-indicator"]),
  state: PropTypes.oneOf(["default", "hover", "focus"]),
};
