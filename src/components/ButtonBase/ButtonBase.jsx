/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Circle187 } from "../../icons/Circle187";
import { Circle475 } from "../../icons/Circle475";
import "./style.css";

export const ButtonBase = ({
  size,
  icon,
  className,
  override = <Circle475 className="circle" color="white" />,
  icon1 = <Circle475 className="circle" color="white" />,
  textClassName,
  text = "Button CTA",
  textClassNameOverride,
  dotClassName,
  dotClassNameOverride,
  circle475Color = "white",
  circle187Color = "white",
}) => {
  return (
    <div className={`button-base size-5-${size} icon-${icon} ${className}`}>
      {icon === "leading" && <>{icon1}</>}

      {icon === "only" && <>{override}</>}

      {icon === "dot" && (
        <div className={`dot ${dotClassNameOverride}`}>
          <div className={`dot-2 ${dotClassName}`} />
        </div>
      )}

      {["dot", "false", "leading", "trailing"].includes(icon) && (
        <div
          className={`text-3 ${
            ["dot", "leading"].includes(icon)
              ? textClassName
              : icon === "trailing"
              ? dotClassNameOverride
              : icon === "false"
              ? textClassNameOverride
              : undefined
          }`}
        >
          {text}
        </div>
      )}

      {((icon === "trailing" && size === "lg") ||
        (icon === "trailing" && size === "md") ||
        (icon === "trailing" && size === "sm") ||
        (icon === "trailing" && size === "xl")) && <Circle475 className="circle" color={circle475Color} />}

      {icon === "trailing" && size === "two-xl" && <Circle187 className="circle-187" color={circle187Color} />}
    </div>
  );
};

ButtonBase.propTypes = {
  size: PropTypes.oneOf(["xl", "lg", "two-xl", "sm", "md"]),
  icon: PropTypes.oneOf(["only", "leading", "false", "dot", "trailing"]),
  text: PropTypes.string,
  circle475Color: PropTypes.string,
  circle187Color: PropTypes.string,
};
