/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { User } from "../../icons/User";
import { User18 } from "../../icons/User18";
import { User27 } from "../../icons/User27";
import { User36 } from "../../icons/User36";
import { User9 } from "../../icons/User9";
import "./style.css";

export const Avatar = ({ size, placeholder, text, statusIcon, state, className }) => {
  return (
    <div className={`avatar text-${text} placeholder-${placeholder} ${state} ${size} ${statusIcon} ${className}`}>
      {((size === "lg" && statusIcon === "company" && !text) ||
        (size === "lg" && text) ||
        (size === "md" && statusIcon === "company" && !text) ||
        (size === "md" && text) ||
        (size === "sm" && statusIcon === "company" && !text) ||
        (size === "sm" && text) ||
        (size === "two-xl" && statusIcon === "company") ||
        (size === "two-xl" && statusIcon === "false" && text) ||
        (size === "xl" && statusIcon === "company") ||
        (size === "xl" && statusIcon === "false" && text) ||
        (size === "xl" && statusIcon === "online-indicator" && text) ||
        (size === "xs" && statusIcon === "company" && !text) ||
        (size === "xs" && text) ||
        (statusIcon === "online-indicator" && !text)) && (
        <div className="text-9">
          {statusIcon === "false" && <>OR</>}

          {text && ["company", "online-indicator"].includes(statusIcon) && <div className="text">OR</div>}

          {placeholder && ["two-xl", "xl"].includes(size) && <User36 className="user-36" />}

          {((placeholder && size === "two-xl") ||
            (placeholder && size === "xl") ||
            (statusIcon === "company" && text) ||
            (statusIcon === "online-indicator" && text)) && <div className="avatar-company-icon" />}

          {size === "lg" && placeholder && (
            <>
              <User27 className="user-27" />
              <div className="div" />
            </>
          )}

          {size === "md" && placeholder && (
            <>
              <User18 className="user-18" />
              <div className="avatar-company-icon-2" />
            </>
          )}

          {placeholder && size === "sm" && (
            <>
              <User9 className="user-9" />
              <div className="avatar-company-icon-3" />
            </>
          )}

          {size === "xs" && placeholder && (
            <>
              <User className="user-instance" />
              <div className="avatar-company-icon-4" />
            </>
          )}
        </div>
      )}

      {text && statusIcon === "online-indicator" && size === "two-xl" && (
        <>
          <div className="text-wrapper">OR</div>
          <div className="avatar-online" />
        </>
      )}

      {placeholder && statusIcon === "false" && ["two-xl", "xl"].includes(size) && (
        <User36 className={`${size === "two-xl" ? "class" : "class-2"}`} />
      )}

      {size === "lg" && statusIcon === "false" && placeholder && <User27 className="user-27-instance" />}

      {statusIcon === "false" && size === "md" && placeholder && <User18 className="user-18-instance" />}

      {statusIcon === "false" && placeholder && size === "sm" && <User9 className="user-9-instance" />}

      {size === "xs" && statusIcon === "false" && placeholder && <User className="instance-node" />}
    </div>
  );
};

Avatar.propTypes = {
  size: PropTypes.oneOf(["xl", "xs", "lg", "two-xl", "sm", "md"]),
  placeholder: PropTypes.bool,
  text: PropTypes.bool,
  statusIcon: PropTypes.oneOf(["company", "false", "online-indicator"]),
  state: PropTypes.oneOf(["focused", "hover", "default"]),
};
