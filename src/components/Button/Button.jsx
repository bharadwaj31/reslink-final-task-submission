/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Circle324 } from "../../icons/Circle324";
import { Circle475 } from "../../icons/Circle475";
import { ButtonBase } from "../ButtonBase";
import "./style.css";

export const Button = ({
  size,
  hierarchy,
  icon,
  destructive,
  state,
  className,
  buttonBaseIcon = <Circle324 className="icon-instance-node" />,
  override = <Circle475 className="icon-instance-node" color="white" />,
  buttonBaseText = "Button CTA",
  buttonBaseTextClassName,
  buttonBaseSizeMdIconLeadingClassName,
}) => {
  return (
    <button
      className={`button destructive-${destructive} ${hierarchy} state-0-${state} size-7-${size} icon-0-${icon} ${className}`}
    >
      <ButtonBase
        circle187Color={
          (!destructive &&
            hierarchy === "link-color" &&
            icon === "trailing" &&
            size === "two-xl" &&
            state === "default") ||
          (!destructive &&
            hierarchy === "link-color" &&
            icon === "trailing" &&
            size === "two-xl" &&
            state === "focused") ||
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "trailing" &&
            size === "two-xl" &&
            state === "default") ||
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "trailing" &&
            size === "two-xl" &&
            state === "focused") ||
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "trailing" &&
            size === "two-xl" &&
            state === "hover") ||
          (!destructive &&
            hierarchy === "tertiary-color" &&
            icon === "trailing" &&
            size === "two-xl" &&
            state === "default") ||
          (!destructive &&
            hierarchy === "tertiary-color" &&
            icon === "trailing" &&
            size === "two-xl" &&
            state === "focused") ||
          (!destructive &&
            hierarchy === "tertiary-color" &&
            icon === "trailing" &&
            size === "two-xl" &&
            state === "hover")
            ? "#6941C6"
            : (destructive &&
                hierarchy === "link-color" &&
                icon === "trailing" &&
                size === "two-xl" &&
                state === "default") ||
              (destructive &&
                hierarchy === "link-color" &&
                icon === "trailing" &&
                size === "two-xl" &&
                state === "focused") ||
              (destructive &&
                hierarchy === "link-gray" &&
                icon === "trailing" &&
                size === "two-xl" &&
                state === "default") ||
              (destructive &&
                hierarchy === "link-gray" &&
                icon === "trailing" &&
                size === "two-xl" &&
                state === "focused") ||
              (destructive &&
                hierarchy === "secondary-color" &&
                icon === "trailing" &&
                size === "two-xl" &&
                state === "default") ||
              (destructive &&
                hierarchy === "secondary-color" &&
                icon === "trailing" &&
                size === "two-xl" &&
                state === "focused") ||
              (destructive &&
                hierarchy === "secondary-color" &&
                icon === "trailing" &&
                size === "two-xl" &&
                state === "hover") ||
              (destructive &&
                hierarchy === "secondary-gray" &&
                icon === "trailing" &&
                size === "two-xl" &&
                state === "default") ||
              (destructive &&
                hierarchy === "secondary-gray" &&
                icon === "trailing" &&
                size === "two-xl" &&
                state === "focused") ||
              (destructive &&
                hierarchy === "tertiary-color" &&
                icon === "trailing" &&
                size === "two-xl" &&
                state === "default") ||
              (destructive &&
                hierarchy === "tertiary-color" &&
                icon === "trailing" &&
                size === "two-xl" &&
                state === "focused") ||
              (destructive &&
                hierarchy === "tertiary-color" &&
                icon === "trailing" &&
                size === "two-xl" &&
                state === "hover") ||
              (destructive &&
                hierarchy === "tertiary-gray" &&
                icon === "trailing" &&
                size === "two-xl" &&
                state === "default") ||
              (destructive &&
                hierarchy === "tertiary-gray" &&
                icon === "trailing" &&
                size === "two-xl" &&
                state === "focused")
            ? "#B42318"
            : (!destructive &&
                hierarchy === "link-gray" &&
                icon === "trailing" &&
                size === "two-xl" &&
                state === "default") ||
              (!destructive &&
                hierarchy === "link-gray" &&
                icon === "trailing" &&
                size === "two-xl" &&
                state === "focused") ||
              (!destructive &&
                hierarchy === "tertiary-gray" &&
                icon === "trailing" &&
                size === "two-xl" &&
                state === "default") ||
              (!destructive &&
                hierarchy === "tertiary-gray" &&
                icon === "trailing" &&
                size === "two-xl" &&
                state === "focused")
            ? "#667085"
            : (!destructive &&
                hierarchy === "secondary-gray" &&
                icon === "trailing" &&
                size === "two-xl" &&
                state === "default") ||
              (!destructive &&
                hierarchy === "secondary-gray" &&
                icon === "trailing" &&
                size === "two-xl" &&
                state === "focused")
            ? "#344054"
            : (hierarchy === "primary" && icon === "trailing" && size === "two-xl" && state === "disabled") ||
              (hierarchy === "primary" && icon === "trailing" && size === "two-xl" && state === "focused") ||
              (hierarchy === "primary" && icon === "trailing" && size === "two-xl" && state === "hover")
            ? "white"
            : icon === "trailing" &&
              hierarchy === "secondary-color" &&
              size === "two-xl" &&
              state === "disabled" &&
              !destructive
            ? "#D6BBFB"
            : (destructive &&
                hierarchy === "link-color" &&
                icon === "trailing" &&
                size === "two-xl" &&
                state === "disabled") ||
              (destructive &&
                hierarchy === "link-gray" &&
                icon === "trailing" &&
                size === "two-xl" &&
                state === "disabled") ||
              (destructive &&
                hierarchy === "secondary-color" &&
                icon === "trailing" &&
                size === "two-xl" &&
                state === "disabled") ||
              (destructive &&
                hierarchy === "secondary-gray" &&
                icon === "trailing" &&
                size === "two-xl" &&
                state === "disabled") ||
              (destructive &&
                hierarchy === "tertiary-color" &&
                icon === "trailing" &&
                size === "two-xl" &&
                state === "disabled") ||
              (destructive &&
                hierarchy === "tertiary-gray" &&
                icon === "trailing" &&
                size === "two-xl" &&
                state === "disabled")
            ? "#FDA29B"
            : (!destructive &&
                hierarchy === "link-color" &&
                icon === "trailing" &&
                size === "two-xl" &&
                state === "disabled") ||
              (!destructive &&
                hierarchy === "link-gray" &&
                icon === "trailing" &&
                size === "two-xl" &&
                state === "disabled") ||
              (!destructive &&
                hierarchy === "secondary-gray" &&
                icon === "trailing" &&
                size === "two-xl" &&
                state === "disabled") ||
              (!destructive &&
                hierarchy === "tertiary-color" &&
                icon === "trailing" &&
                size === "two-xl" &&
                state === "disabled") ||
              (!destructive &&
                hierarchy === "tertiary-gray" &&
                icon === "trailing" &&
                size === "two-xl" &&
                state === "disabled")
            ? "#D0D5DD"
            : icon === "trailing" &&
              size === "two-xl" &&
              hierarchy === "link-color" &&
              !destructive &&
              state === "hover"
            ? "#53389E"
            : (destructive &&
                hierarchy === "link-color" &&
                icon === "trailing" &&
                size === "two-xl" &&
                state === "hover") ||
              (destructive &&
                hierarchy === "link-gray" &&
                icon === "trailing" &&
                size === "two-xl" &&
                state === "hover") ||
              (destructive &&
                hierarchy === "secondary-gray" &&
                icon === "trailing" &&
                size === "two-xl" &&
                state === "hover") ||
              (destructive &&
                hierarchy === "tertiary-gray" &&
                icon === "trailing" &&
                size === "two-xl" &&
                state === "hover")
            ? "#912018"
            : (!destructive &&
                hierarchy === "link-gray" &&
                icon === "trailing" &&
                size === "two-xl" &&
                state === "hover") ||
              (!destructive &&
                hierarchy === "tertiary-gray" &&
                icon === "trailing" &&
                size === "two-xl" &&
                state === "hover")
            ? "#475467"
            : icon === "trailing" &&
              size === "two-xl" &&
              hierarchy === "secondary-gray" &&
              !destructive &&
              state === "hover"
            ? "#1D2939"
            : undefined
        }
        circle475Color={
          (!destructive && hierarchy === "link-color" && icon === "trailing" && size === "lg" && state === "default") ||
          (!destructive && hierarchy === "link-color" && icon === "trailing" && size === "lg" && state === "focused") ||
          (!destructive && hierarchy === "link-color" && icon === "trailing" && size === "md" && state === "default") ||
          (!destructive && hierarchy === "link-color" && icon === "trailing" && size === "md" && state === "focused") ||
          (!destructive && hierarchy === "link-color" && icon === "trailing" && size === "sm" && state === "default") ||
          (!destructive && hierarchy === "link-color" && icon === "trailing" && size === "sm" && state === "focused") ||
          (!destructive && hierarchy === "link-color" && icon === "trailing" && size === "xl" && state === "default") ||
          (!destructive && hierarchy === "link-color" && icon === "trailing" && size === "xl" && state === "focused") ||
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "trailing" &&
            size === "lg" &&
            state === "default") ||
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "trailing" &&
            size === "lg" &&
            state === "focused") ||
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "trailing" &&
            size === "lg" &&
            state === "hover") ||
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "trailing" &&
            size === "md" &&
            state === "default") ||
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "trailing" &&
            size === "md" &&
            state === "focused") ||
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "trailing" &&
            size === "md" &&
            state === "hover") ||
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "trailing" &&
            size === "sm" &&
            state === "default") ||
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "trailing" &&
            size === "sm" &&
            state === "focused") ||
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "trailing" &&
            size === "sm" &&
            state === "hover") ||
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "trailing" &&
            size === "xl" &&
            state === "default") ||
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "trailing" &&
            size === "xl" &&
            state === "focused") ||
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "trailing" &&
            size === "xl" &&
            state === "hover") ||
          (!destructive &&
            hierarchy === "tertiary-color" &&
            icon === "trailing" &&
            size === "lg" &&
            state === "default") ||
          (!destructive &&
            hierarchy === "tertiary-color" &&
            icon === "trailing" &&
            size === "lg" &&
            state === "focused") ||
          (!destructive &&
            hierarchy === "tertiary-color" &&
            icon === "trailing" &&
            size === "lg" &&
            state === "hover") ||
          (!destructive &&
            hierarchy === "tertiary-color" &&
            icon === "trailing" &&
            size === "md" &&
            state === "default") ||
          (!destructive &&
            hierarchy === "tertiary-color" &&
            icon === "trailing" &&
            size === "md" &&
            state === "focused") ||
          (!destructive &&
            hierarchy === "tertiary-color" &&
            icon === "trailing" &&
            size === "md" &&
            state === "hover") ||
          (!destructive &&
            hierarchy === "tertiary-color" &&
            icon === "trailing" &&
            size === "sm" &&
            state === "default") ||
          (!destructive &&
            hierarchy === "tertiary-color" &&
            icon === "trailing" &&
            size === "sm" &&
            state === "focused") ||
          (!destructive &&
            hierarchy === "tertiary-color" &&
            icon === "trailing" &&
            size === "sm" &&
            state === "hover") ||
          (!destructive &&
            hierarchy === "tertiary-color" &&
            icon === "trailing" &&
            size === "xl" &&
            state === "default") ||
          (!destructive &&
            hierarchy === "tertiary-color" &&
            icon === "trailing" &&
            size === "xl" &&
            state === "focused") ||
          (!destructive && hierarchy === "tertiary-color" && icon === "trailing" && size === "xl" && state === "hover")
            ? "#6941C6"
            : (destructive &&
                hierarchy === "link-color" &&
                icon === "trailing" &&
                size === "lg" &&
                state === "default") ||
              (destructive &&
                hierarchy === "link-color" &&
                icon === "trailing" &&
                size === "lg" &&
                state === "focused") ||
              (destructive &&
                hierarchy === "link-color" &&
                icon === "trailing" &&
                size === "md" &&
                state === "default") ||
              (destructive &&
                hierarchy === "link-color" &&
                icon === "trailing" &&
                size === "md" &&
                state === "focused") ||
              (destructive &&
                hierarchy === "link-color" &&
                icon === "trailing" &&
                size === "sm" &&
                state === "default") ||
              (destructive &&
                hierarchy === "link-color" &&
                icon === "trailing" &&
                size === "sm" &&
                state === "focused") ||
              (destructive &&
                hierarchy === "link-color" &&
                icon === "trailing" &&
                size === "xl" &&
                state === "default") ||
              (destructive &&
                hierarchy === "link-color" &&
                icon === "trailing" &&
                size === "xl" &&
                state === "focused") ||
              (destructive &&
                hierarchy === "link-gray" &&
                icon === "trailing" &&
                size === "lg" &&
                state === "default") ||
              (destructive &&
                hierarchy === "link-gray" &&
                icon === "trailing" &&
                size === "lg" &&
                state === "focused") ||
              (destructive &&
                hierarchy === "link-gray" &&
                icon === "trailing" &&
                size === "md" &&
                state === "default") ||
              (destructive &&
                hierarchy === "link-gray" &&
                icon === "trailing" &&
                size === "md" &&
                state === "focused") ||
              (destructive &&
                hierarchy === "link-gray" &&
                icon === "trailing" &&
                size === "sm" &&
                state === "default") ||
              (destructive &&
                hierarchy === "link-gray" &&
                icon === "trailing" &&
                size === "sm" &&
                state === "focused") ||
              (destructive &&
                hierarchy === "link-gray" &&
                icon === "trailing" &&
                size === "xl" &&
                state === "default") ||
              (destructive &&
                hierarchy === "link-gray" &&
                icon === "trailing" &&
                size === "xl" &&
                state === "focused") ||
              (destructive &&
                hierarchy === "secondary-color" &&
                icon === "trailing" &&
                size === "lg" &&
                state === "default") ||
              (destructive &&
                hierarchy === "secondary-color" &&
                icon === "trailing" &&
                size === "lg" &&
                state === "focused") ||
              (destructive &&
                hierarchy === "secondary-color" &&
                icon === "trailing" &&
                size === "lg" &&
                state === "hover") ||
              (destructive &&
                hierarchy === "secondary-color" &&
                icon === "trailing" &&
                size === "md" &&
                state === "default") ||
              (destructive &&
                hierarchy === "secondary-color" &&
                icon === "trailing" &&
                size === "md" &&
                state === "focused") ||
              (destructive &&
                hierarchy === "secondary-color" &&
                icon === "trailing" &&
                size === "md" &&
                state === "hover") ||
              (destructive &&
                hierarchy === "secondary-color" &&
                icon === "trailing" &&
                size === "sm" &&
                state === "default") ||
              (destructive &&
                hierarchy === "secondary-color" &&
                icon === "trailing" &&
                size === "sm" &&
                state === "focused") ||
              (destructive &&
                hierarchy === "secondary-color" &&
                icon === "trailing" &&
                size === "sm" &&
                state === "hover") ||
              (destructive &&
                hierarchy === "secondary-color" &&
                icon === "trailing" &&
                size === "xl" &&
                state === "default") ||
              (destructive &&
                hierarchy === "secondary-color" &&
                icon === "trailing" &&
                size === "xl" &&
                state === "focused") ||
              (destructive &&
                hierarchy === "secondary-color" &&
                icon === "trailing" &&
                size === "xl" &&
                state === "hover") ||
              (destructive &&
                hierarchy === "secondary-gray" &&
                icon === "trailing" &&
                size === "lg" &&
                state === "default") ||
              (destructive &&
                hierarchy === "secondary-gray" &&
                icon === "trailing" &&
                size === "lg" &&
                state === "focused") ||
              (destructive &&
                hierarchy === "secondary-gray" &&
                icon === "trailing" &&
                size === "md" &&
                state === "default") ||
              (destructive &&
                hierarchy === "secondary-gray" &&
                icon === "trailing" &&
                size === "md" &&
                state === "focused") ||
              (destructive &&
                hierarchy === "secondary-gray" &&
                icon === "trailing" &&
                size === "sm" &&
                state === "default") ||
              (destructive &&
                hierarchy === "secondary-gray" &&
                icon === "trailing" &&
                size === "sm" &&
                state === "focused") ||
              (destructive &&
                hierarchy === "secondary-gray" &&
                icon === "trailing" &&
                size === "xl" &&
                state === "default") ||
              (destructive &&
                hierarchy === "secondary-gray" &&
                icon === "trailing" &&
                size === "xl" &&
                state === "focused") ||
              (destructive &&
                hierarchy === "tertiary-color" &&
                icon === "trailing" &&
                size === "lg" &&
                state === "default") ||
              (destructive &&
                hierarchy === "tertiary-color" &&
                icon === "trailing" &&
                size === "lg" &&
                state === "focused") ||
              (destructive &&
                hierarchy === "tertiary-color" &&
                icon === "trailing" &&
                size === "lg" &&
                state === "hover") ||
              (destructive &&
                hierarchy === "tertiary-color" &&
                icon === "trailing" &&
                size === "md" &&
                state === "default") ||
              (destructive &&
                hierarchy === "tertiary-color" &&
                icon === "trailing" &&
                size === "md" &&
                state === "focused") ||
              (destructive &&
                hierarchy === "tertiary-color" &&
                icon === "trailing" &&
                size === "md" &&
                state === "hover") ||
              (destructive &&
                hierarchy === "tertiary-color" &&
                icon === "trailing" &&
                size === "sm" &&
                state === "default") ||
              (destructive &&
                hierarchy === "tertiary-color" &&
                icon === "trailing" &&
                size === "sm" &&
                state === "focused") ||
              (destructive &&
                hierarchy === "tertiary-color" &&
                icon === "trailing" &&
                size === "sm" &&
                state === "hover") ||
              (destructive &&
                hierarchy === "tertiary-color" &&
                icon === "trailing" &&
                size === "xl" &&
                state === "default") ||
              (destructive &&
                hierarchy === "tertiary-color" &&
                icon === "trailing" &&
                size === "xl" &&
                state === "focused") ||
              (destructive &&
                hierarchy === "tertiary-color" &&
                icon === "trailing" &&
                size === "xl" &&
                state === "hover") ||
              (destructive &&
                hierarchy === "tertiary-gray" &&
                icon === "trailing" &&
                size === "lg" &&
                state === "default") ||
              (destructive &&
                hierarchy === "tertiary-gray" &&
                icon === "trailing" &&
                size === "lg" &&
                state === "focused") ||
              (destructive &&
                hierarchy === "tertiary-gray" &&
                icon === "trailing" &&
                size === "md" &&
                state === "default") ||
              (destructive &&
                hierarchy === "tertiary-gray" &&
                icon === "trailing" &&
                size === "md" &&
                state === "focused") ||
              (destructive &&
                hierarchy === "tertiary-gray" &&
                icon === "trailing" &&
                size === "sm" &&
                state === "default") ||
              (destructive &&
                hierarchy === "tertiary-gray" &&
                icon === "trailing" &&
                size === "sm" &&
                state === "focused") ||
              (destructive &&
                hierarchy === "tertiary-gray" &&
                icon === "trailing" &&
                size === "xl" &&
                state === "default") ||
              (destructive &&
                hierarchy === "tertiary-gray" &&
                icon === "trailing" &&
                size === "xl" &&
                state === "focused")
            ? "#B42318"
            : (!destructive &&
                hierarchy === "link-gray" &&
                icon === "trailing" &&
                size === "lg" &&
                state === "default") ||
              (!destructive &&
                hierarchy === "link-gray" &&
                icon === "trailing" &&
                size === "lg" &&
                state === "focused") ||
              (!destructive &&
                hierarchy === "link-gray" &&
                icon === "trailing" &&
                size === "md" &&
                state === "default") ||
              (!destructive &&
                hierarchy === "link-gray" &&
                icon === "trailing" &&
                size === "md" &&
                state === "focused") ||
              (!destructive &&
                hierarchy === "link-gray" &&
                icon === "trailing" &&
                size === "sm" &&
                state === "default") ||
              (!destructive &&
                hierarchy === "link-gray" &&
                icon === "trailing" &&
                size === "sm" &&
                state === "focused") ||
              (!destructive &&
                hierarchy === "link-gray" &&
                icon === "trailing" &&
                size === "xl" &&
                state === "default") ||
              (!destructive &&
                hierarchy === "link-gray" &&
                icon === "trailing" &&
                size === "xl" &&
                state === "focused") ||
              (!destructive &&
                hierarchy === "tertiary-gray" &&
                icon === "trailing" &&
                size === "lg" &&
                state === "default") ||
              (!destructive &&
                hierarchy === "tertiary-gray" &&
                icon === "trailing" &&
                size === "lg" &&
                state === "focused") ||
              (!destructive &&
                hierarchy === "tertiary-gray" &&
                icon === "trailing" &&
                size === "md" &&
                state === "default") ||
              (!destructive &&
                hierarchy === "tertiary-gray" &&
                icon === "trailing" &&
                size === "md" &&
                state === "focused") ||
              (!destructive &&
                hierarchy === "tertiary-gray" &&
                icon === "trailing" &&
                size === "sm" &&
                state === "default") ||
              (!destructive &&
                hierarchy === "tertiary-gray" &&
                icon === "trailing" &&
                size === "sm" &&
                state === "focused") ||
              (!destructive &&
                hierarchy === "tertiary-gray" &&
                icon === "trailing" &&
                size === "xl" &&
                state === "default") ||
              (!destructive &&
                hierarchy === "tertiary-gray" &&
                icon === "trailing" &&
                size === "xl" &&
                state === "focused")
            ? "#667085"
            : (!destructive &&
                hierarchy === "secondary-gray" &&
                icon === "trailing" &&
                size === "lg" &&
                state === "default") ||
              (!destructive &&
                hierarchy === "secondary-gray" &&
                icon === "trailing" &&
                size === "lg" &&
                state === "focused") ||
              (!destructive &&
                hierarchy === "secondary-gray" &&
                icon === "trailing" &&
                size === "md" &&
                state === "default") ||
              (!destructive &&
                hierarchy === "secondary-gray" &&
                icon === "trailing" &&
                size === "md" &&
                state === "focused") ||
              (!destructive &&
                hierarchy === "secondary-gray" &&
                icon === "trailing" &&
                size === "sm" &&
                state === "default") ||
              (!destructive &&
                hierarchy === "secondary-gray" &&
                icon === "trailing" &&
                size === "sm" &&
                state === "focused") ||
              (!destructive &&
                hierarchy === "secondary-gray" &&
                icon === "trailing" &&
                size === "xl" &&
                state === "default") ||
              (!destructive &&
                hierarchy === "secondary-gray" &&
                icon === "trailing" &&
                size === "xl" &&
                state === "focused")
            ? "#344054"
            : (hierarchy === "primary" && icon === "trailing" && size === "lg") ||
              (hierarchy === "primary" && icon === "trailing" && size === "md" && state === "disabled") ||
              (hierarchy === "primary" && icon === "trailing" && size === "md" && state === "focused") ||
              (hierarchy === "primary" && icon === "trailing" && size === "md" && state === "hover") ||
              (hierarchy === "primary" && icon === "trailing" && size === "sm") ||
              (hierarchy === "primary" && icon === "trailing" && size === "xl")
            ? "white"
            : (!destructive &&
                hierarchy === "secondary-color" &&
                icon === "trailing" &&
                size === "lg" &&
                state === "disabled") ||
              (!destructive &&
                hierarchy === "secondary-color" &&
                icon === "trailing" &&
                size === "md" &&
                state === "disabled") ||
              (!destructive &&
                hierarchy === "secondary-color" &&
                icon === "trailing" &&
                size === "sm" &&
                state === "disabled") ||
              (!destructive &&
                hierarchy === "secondary-color" &&
                icon === "trailing" &&
                size === "xl" &&
                state === "disabled")
            ? "#D6BBFB"
            : (destructive &&
                hierarchy === "link-color" &&
                icon === "trailing" &&
                size === "lg" &&
                state === "disabled") ||
              (destructive &&
                hierarchy === "link-color" &&
                icon === "trailing" &&
                size === "md" &&
                state === "disabled") ||
              (destructive &&
                hierarchy === "link-color" &&
                icon === "trailing" &&
                size === "sm" &&
                state === "disabled") ||
              (destructive &&
                hierarchy === "link-color" &&
                icon === "trailing" &&
                size === "xl" &&
                state === "disabled") ||
              (destructive &&
                hierarchy === "link-gray" &&
                icon === "trailing" &&
                size === "lg" &&
                state === "disabled") ||
              (destructive &&
                hierarchy === "link-gray" &&
                icon === "trailing" &&
                size === "md" &&
                state === "disabled") ||
              (destructive &&
                hierarchy === "link-gray" &&
                icon === "trailing" &&
                size === "sm" &&
                state === "disabled") ||
              (destructive &&
                hierarchy === "link-gray" &&
                icon === "trailing" &&
                size === "xl" &&
                state === "disabled") ||
              (destructive &&
                hierarchy === "secondary-color" &&
                icon === "trailing" &&
                size === "lg" &&
                state === "disabled") ||
              (destructive &&
                hierarchy === "secondary-color" &&
                icon === "trailing" &&
                size === "md" &&
                state === "disabled") ||
              (destructive &&
                hierarchy === "secondary-color" &&
                icon === "trailing" &&
                size === "sm" &&
                state === "disabled") ||
              (destructive &&
                hierarchy === "secondary-color" &&
                icon === "trailing" &&
                size === "xl" &&
                state === "disabled") ||
              (destructive &&
                hierarchy === "secondary-gray" &&
                icon === "trailing" &&
                size === "lg" &&
                state === "disabled") ||
              (destructive &&
                hierarchy === "secondary-gray" &&
                icon === "trailing" &&
                size === "md" &&
                state === "disabled") ||
              (destructive &&
                hierarchy === "secondary-gray" &&
                icon === "trailing" &&
                size === "sm" &&
                state === "disabled") ||
              (destructive &&
                hierarchy === "secondary-gray" &&
                icon === "trailing" &&
                size === "xl" &&
                state === "disabled") ||
              (destructive &&
                hierarchy === "tertiary-color" &&
                icon === "trailing" &&
                size === "lg" &&
                state === "disabled") ||
              (destructive &&
                hierarchy === "tertiary-color" &&
                icon === "trailing" &&
                size === "md" &&
                state === "disabled") ||
              (destructive &&
                hierarchy === "tertiary-color" &&
                icon === "trailing" &&
                size === "sm" &&
                state === "disabled") ||
              (destructive &&
                hierarchy === "tertiary-color" &&
                icon === "trailing" &&
                size === "xl" &&
                state === "disabled") ||
              (destructive &&
                hierarchy === "tertiary-gray" &&
                icon === "trailing" &&
                size === "lg" &&
                state === "disabled") ||
              (destructive &&
                hierarchy === "tertiary-gray" &&
                icon === "trailing" &&
                size === "md" &&
                state === "disabled") ||
              (destructive &&
                hierarchy === "tertiary-gray" &&
                icon === "trailing" &&
                size === "sm" &&
                state === "disabled") ||
              (destructive &&
                hierarchy === "tertiary-gray" &&
                icon === "trailing" &&
                size === "xl" &&
                state === "disabled")
            ? "#FDA29B"
            : (!destructive &&
                hierarchy === "link-color" &&
                icon === "trailing" &&
                size === "lg" &&
                state === "disabled") ||
              (!destructive &&
                hierarchy === "link-color" &&
                icon === "trailing" &&
                size === "md" &&
                state === "disabled") ||
              (!destructive &&
                hierarchy === "link-color" &&
                icon === "trailing" &&
                size === "sm" &&
                state === "disabled") ||
              (!destructive &&
                hierarchy === "link-color" &&
                icon === "trailing" &&
                size === "xl" &&
                state === "disabled") ||
              (!destructive &&
                hierarchy === "link-gray" &&
                icon === "trailing" &&
                size === "lg" &&
                state === "disabled") ||
              (!destructive &&
                hierarchy === "link-gray" &&
                icon === "trailing" &&
                size === "md" &&
                state === "disabled") ||
              (!destructive &&
                hierarchy === "link-gray" &&
                icon === "trailing" &&
                size === "sm" &&
                state === "disabled") ||
              (!destructive &&
                hierarchy === "link-gray" &&
                icon === "trailing" &&
                size === "xl" &&
                state === "disabled") ||
              (!destructive &&
                hierarchy === "secondary-gray" &&
                icon === "trailing" &&
                size === "lg" &&
                state === "disabled") ||
              (!destructive &&
                hierarchy === "secondary-gray" &&
                icon === "trailing" &&
                size === "md" &&
                state === "disabled") ||
              (!destructive &&
                hierarchy === "secondary-gray" &&
                icon === "trailing" &&
                size === "sm" &&
                state === "disabled") ||
              (!destructive &&
                hierarchy === "secondary-gray" &&
                icon === "trailing" &&
                size === "xl" &&
                state === "disabled") ||
              (!destructive &&
                hierarchy === "tertiary-color" &&
                icon === "trailing" &&
                size === "lg" &&
                state === "disabled") ||
              (!destructive &&
                hierarchy === "tertiary-color" &&
                icon === "trailing" &&
                size === "md" &&
                state === "disabled") ||
              (!destructive &&
                hierarchy === "tertiary-color" &&
                icon === "trailing" &&
                size === "sm" &&
                state === "disabled") ||
              (!destructive &&
                hierarchy === "tertiary-color" &&
                icon === "trailing" &&
                size === "xl" &&
                state === "disabled") ||
              (!destructive &&
                hierarchy === "tertiary-gray" &&
                icon === "trailing" &&
                size === "lg" &&
                state === "disabled") ||
              (!destructive &&
                hierarchy === "tertiary-gray" &&
                icon === "trailing" &&
                size === "md" &&
                state === "disabled") ||
              (!destructive &&
                hierarchy === "tertiary-gray" &&
                icon === "trailing" &&
                size === "sm" &&
                state === "disabled") ||
              (!destructive &&
                hierarchy === "tertiary-gray" &&
                icon === "trailing" &&
                size === "xl" &&
                state === "disabled")
            ? "#D0D5DD"
            : (!destructive &&
                hierarchy === "link-color" &&
                icon === "trailing" &&
                size === "lg" &&
                state === "hover") ||
              (!destructive &&
                hierarchy === "link-color" &&
                icon === "trailing" &&
                size === "md" &&
                state === "hover") ||
              (!destructive &&
                hierarchy === "link-color" &&
                icon === "trailing" &&
                size === "sm" &&
                state === "hover") ||
              (!destructive && hierarchy === "link-color" && icon === "trailing" && size === "xl" && state === "hover")
            ? "#53389E"
            : (destructive &&
                hierarchy === "link-color" &&
                icon === "trailing" &&
                size === "lg" &&
                state === "hover") ||
              (destructive &&
                hierarchy === "link-color" &&
                icon === "trailing" &&
                size === "md" &&
                state === "hover") ||
              (destructive &&
                hierarchy === "link-color" &&
                icon === "trailing" &&
                size === "sm" &&
                state === "hover") ||
              (destructive &&
                hierarchy === "link-color" &&
                icon === "trailing" &&
                size === "xl" &&
                state === "hover") ||
              (destructive && hierarchy === "link-gray" && icon === "trailing" && size === "lg" && state === "hover") ||
              (destructive && hierarchy === "link-gray" && icon === "trailing" && size === "md" && state === "hover") ||
              (destructive && hierarchy === "link-gray" && icon === "trailing" && size === "sm" && state === "hover") ||
              (destructive && hierarchy === "link-gray" && icon === "trailing" && size === "xl" && state === "hover") ||
              (destructive &&
                hierarchy === "secondary-gray" &&
                icon === "trailing" &&
                size === "lg" &&
                state === "hover") ||
              (destructive &&
                hierarchy === "secondary-gray" &&
                icon === "trailing" &&
                size === "md" &&
                state === "hover") ||
              (destructive &&
                hierarchy === "secondary-gray" &&
                icon === "trailing" &&
                size === "sm" &&
                state === "hover") ||
              (destructive &&
                hierarchy === "secondary-gray" &&
                icon === "trailing" &&
                size === "xl" &&
                state === "hover") ||
              (destructive &&
                hierarchy === "tertiary-gray" &&
                icon === "trailing" &&
                size === "lg" &&
                state === "hover") ||
              (destructive &&
                hierarchy === "tertiary-gray" &&
                icon === "trailing" &&
                size === "md" &&
                state === "hover") ||
              (destructive &&
                hierarchy === "tertiary-gray" &&
                icon === "trailing" &&
                size === "sm" &&
                state === "hover") ||
              (destructive &&
                hierarchy === "tertiary-gray" &&
                icon === "trailing" &&
                size === "xl" &&
                state === "hover")
            ? "#912018"
            : (!destructive &&
                hierarchy === "link-gray" &&
                icon === "trailing" &&
                size === "lg" &&
                state === "hover") ||
              (!destructive &&
                hierarchy === "link-gray" &&
                icon === "trailing" &&
                size === "md" &&
                state === "hover") ||
              (!destructive &&
                hierarchy === "link-gray" &&
                icon === "trailing" &&
                size === "sm" &&
                state === "hover") ||
              (!destructive &&
                hierarchy === "link-gray" &&
                icon === "trailing" &&
                size === "xl" &&
                state === "hover") ||
              (!destructive &&
                hierarchy === "tertiary-gray" &&
                icon === "trailing" &&
                size === "lg" &&
                state === "hover") ||
              (!destructive &&
                hierarchy === "tertiary-gray" &&
                icon === "trailing" &&
                size === "md" &&
                state === "hover") ||
              (!destructive &&
                hierarchy === "tertiary-gray" &&
                icon === "trailing" &&
                size === "sm" &&
                state === "hover") ||
              (!destructive &&
                hierarchy === "tertiary-gray" &&
                icon === "trailing" &&
                size === "xl" &&
                state === "hover")
            ? "#475467"
            : (!destructive &&
                hierarchy === "secondary-gray" &&
                icon === "trailing" &&
                size === "lg" &&
                state === "hover") ||
              (!destructive &&
                hierarchy === "secondary-gray" &&
                icon === "trailing" &&
                size === "md" &&
                state === "hover") ||
              (!destructive &&
                hierarchy === "secondary-gray" &&
                icon === "trailing" &&
                size === "sm" &&
                state === "hover") ||
              (!destructive &&
                hierarchy === "secondary-gray" &&
                icon === "trailing" &&
                size === "xl" &&
                state === "hover")
            ? "#1D2939"
            : undefined
        }
        className={buttonBaseSizeMdIconLeadingClassName}
        dotClassName={`${
          ((hierarchy === "link-color" && icon === "dot" && state === "default") ||
            (hierarchy === "link-color" && icon === "dot" && state === "focused") ||
            (hierarchy === "link-color" && icon === "dot" && state === "hover") ||
            (hierarchy === "link-gray" && icon === "dot" && state === "default") ||
            (hierarchy === "link-gray" && icon === "dot" && state === "focused") ||
            (hierarchy === "link-gray" && icon === "dot" && state === "hover") ||
            (hierarchy === "secondary-color" && icon === "dot" && state === "default") ||
            (hierarchy === "secondary-color" && icon === "dot" && state === "focused") ||
            (hierarchy === "secondary-color" && icon === "dot" && state === "hover") ||
            (hierarchy === "secondary-gray" && icon === "dot" && state === "default") ||
            (hierarchy === "secondary-gray" && icon === "dot" && state === "focused") ||
            (hierarchy === "secondary-gray" && icon === "dot" && state === "hover") ||
            (hierarchy === "tertiary-color" && icon === "dot" && state === "default") ||
            (hierarchy === "tertiary-color" && icon === "dot" && state === "focused") ||
            (hierarchy === "tertiary-color" && icon === "dot" && state === "hover") ||
            (hierarchy === "tertiary-gray" && icon === "dot" && state === "default") ||
            (hierarchy === "tertiary-gray" && icon === "dot" && state === "focused") ||
            (hierarchy === "tertiary-gray" && icon === "dot" && state === "hover")) &&
          "class-19"
        } ${icon === "dot" && state === "disabled" && hierarchy === "secondary-color" && !destructive && "class-20"} ${
          ((destructive && hierarchy === "link-color" && icon === "dot" && state === "disabled") ||
            (destructive && hierarchy === "link-gray" && icon === "dot" && state === "disabled") ||
            (destructive && hierarchy === "secondary-color" && icon === "dot" && state === "disabled") ||
            (destructive && hierarchy === "secondary-gray" && icon === "dot" && state === "disabled") ||
            (destructive && hierarchy === "tertiary-color" && icon === "dot" && state === "disabled") ||
            (destructive && hierarchy === "tertiary-gray" && icon === "dot" && state === "disabled")) &&
          "class-21"
        } ${
          ((!destructive && hierarchy === "link-color" && icon === "dot" && state === "disabled") ||
            (!destructive && hierarchy === "link-gray" && icon === "dot" && state === "disabled") ||
            (!destructive && hierarchy === "secondary-gray" && icon === "dot" && state === "disabled") ||
            (!destructive && hierarchy === "tertiary-color" && icon === "dot" && state === "disabled") ||
            (!destructive && hierarchy === "tertiary-gray" && icon === "dot" && state === "disabled")) &&
          "class-22"
        }`}
        dotClassNameOverride={`${
          ((!destructive && hierarchy === "link-color" && icon === "trailing" && state === "default") ||
            (!destructive && hierarchy === "link-color" && icon === "trailing" && state === "focused") ||
            (!destructive && hierarchy === "secondary-color" && icon === "trailing" && state === "default") ||
            (!destructive && hierarchy === "secondary-color" && icon === "trailing" && state === "focused") ||
            (!destructive && hierarchy === "secondary-color" && icon === "trailing" && state === "hover") ||
            (!destructive && hierarchy === "tertiary-color" && icon === "trailing" && state === "default") ||
            (!destructive && hierarchy === "tertiary-color" && icon === "trailing" && state === "focused") ||
            (!destructive && hierarchy === "tertiary-color" && icon === "trailing" && state === "hover")) &&
          "class-8"
        } ${
          ((destructive && hierarchy === "link-color" && icon === "trailing" && state === "default") ||
            (destructive && hierarchy === "link-color" && icon === "trailing" && state === "focused") ||
            (destructive && hierarchy === "link-gray" && icon === "trailing" && state === "default") ||
            (destructive && hierarchy === "link-gray" && icon === "trailing" && state === "focused") ||
            (destructive && hierarchy === "secondary-color" && icon === "trailing" && state === "default") ||
            (destructive && hierarchy === "secondary-color" && icon === "trailing" && state === "focused") ||
            (destructive && hierarchy === "secondary-color" && icon === "trailing" && state === "hover") ||
            (destructive && hierarchy === "secondary-gray" && icon === "trailing" && state === "default") ||
            (destructive && hierarchy === "secondary-gray" && icon === "trailing" && state === "focused") ||
            (destructive && hierarchy === "tertiary-color" && icon === "trailing" && state === "default") ||
            (destructive && hierarchy === "tertiary-color" && icon === "trailing" && state === "focused") ||
            (destructive && hierarchy === "tertiary-color" && icon === "trailing" && state === "hover") ||
            (destructive && hierarchy === "tertiary-gray" && icon === "trailing" && state === "default") ||
            (destructive && hierarchy === "tertiary-gray" && icon === "trailing" && state === "focused")) &&
          "class-9"
        } ${
          ((!destructive && hierarchy === "link-gray" && icon === "trailing" && state === "default") ||
            (!destructive && hierarchy === "link-gray" && icon === "trailing" && state === "focused") ||
            (!destructive && hierarchy === "tertiary-gray" && icon === "trailing" && state === "default") ||
            (!destructive && hierarchy === "tertiary-gray" && icon === "trailing" && state === "focused")) &&
          "class-10"
        } ${
          ((!destructive && hierarchy === "secondary-gray" && icon === "trailing" && state === "default") ||
            (!destructive && hierarchy === "secondary-gray" && icon === "trailing" && state === "focused")) &&
          "class-11"
        } ${
          icon === "trailing" && state === "disabled" && hierarchy === "secondary-color" && !destructive && "class-12"
        } ${
          ((destructive && hierarchy === "link-color" && icon === "trailing" && state === "disabled") ||
            (destructive && hierarchy === "link-gray" && icon === "trailing" && state === "disabled") ||
            (destructive && hierarchy === "secondary-color" && icon === "trailing" && state === "disabled") ||
            (destructive && hierarchy === "secondary-gray" && icon === "trailing" && state === "disabled") ||
            (destructive && hierarchy === "tertiary-color" && icon === "trailing" && state === "disabled") ||
            (destructive && hierarchy === "tertiary-gray" && icon === "trailing" && state === "disabled")) &&
          "class-13"
        } ${
          ((!destructive && hierarchy === "link-color" && icon === "trailing" && state === "disabled") ||
            (!destructive && hierarchy === "link-gray" && icon === "trailing" && state === "disabled") ||
            (!destructive && hierarchy === "secondary-gray" && icon === "trailing" && state === "disabled") ||
            (!destructive && hierarchy === "tertiary-color" && icon === "trailing" && state === "disabled") ||
            (!destructive && hierarchy === "tertiary-gray" && icon === "trailing" && state === "disabled")) &&
          "class-14"
        } ${icon === "trailing" && hierarchy === "link-color" && state === "hover" && !destructive && "class-15"} ${
          ((destructive && hierarchy === "link-color" && icon === "trailing" && state === "hover") ||
            (destructive && hierarchy === "link-gray" && icon === "trailing" && state === "hover") ||
            (destructive && hierarchy === "secondary-gray" && icon === "trailing" && state === "hover") ||
            (destructive && hierarchy === "tertiary-gray" && icon === "trailing" && state === "hover")) &&
          "class-16"
        } ${
          ((!destructive && hierarchy === "link-gray" && icon === "trailing" && state === "hover") ||
            (!destructive && hierarchy === "tertiary-gray" && icon === "trailing" && state === "hover")) &&
          "class-17"
        } ${icon === "trailing" && hierarchy === "secondary-gray" && state === "hover" && !destructive && "class-18"}`}
        icon={
          icon === "dot"
            ? "dot"
            : icon === "leading"
            ? "leading"
            : icon === "trailing"
            ? "trailing"
            : icon === "only"
            ? "only"
            : "false"
        }
        icon1={override}
        override={buttonBaseIcon}
        size={size === "lg" ? "lg" : size === "xl" ? "xl" : size === "two-xl" ? "two-xl" : size === "sm" ? "sm" : "md"}
        text={buttonBaseText}
        textClassName={buttonBaseTextClassName}
        textClassNameOverride={`${
          ((!destructive && hierarchy === "link-color" && icon === "false" && state === "default") ||
            (!destructive && hierarchy === "link-color" && icon === "false" && state === "focused") ||
            (!destructive && hierarchy === "secondary-color" && icon === "false" && state === "default") ||
            (!destructive && hierarchy === "secondary-color" && icon === "false" && state === "focused") ||
            (!destructive && hierarchy === "secondary-color" && icon === "false" && state === "hover") ||
            (!destructive &&
              hierarchy === "tertiary-color" &&
              icon === "false" &&
              size === "lg" &&
              state === "default") ||
            (!destructive &&
              hierarchy === "tertiary-color" &&
              icon === "false" &&
              size === "md" &&
              state === "default") ||
            (!destructive &&
              hierarchy === "tertiary-color" &&
              icon === "false" &&
              size === "sm" &&
              state === "default") ||
            (!destructive &&
              hierarchy === "tertiary-color" &&
              icon === "false" &&
              size === "xl" &&
              state === "default") ||
            (!destructive && hierarchy === "tertiary-color" && icon === "false" && state === "focused") ||
            (!destructive && hierarchy === "tertiary-color" && icon === "false" && state === "hover")) &&
          "class-8"
        } ${
          ((destructive && hierarchy === "link-color" && icon === "false" && state === "default") ||
            (destructive && hierarchy === "link-color" && icon === "false" && state === "focused") ||
            (destructive && hierarchy === "link-gray" && icon === "false" && state === "default") ||
            (destructive && hierarchy === "link-gray" && icon === "false" && state === "focused") ||
            (destructive && hierarchy === "secondary-color" && icon === "false" && state === "default") ||
            (destructive && hierarchy === "secondary-color" && icon === "false" && state === "focused") ||
            (destructive && hierarchy === "secondary-color" && icon === "false" && state === "hover") ||
            (destructive && hierarchy === "secondary-gray" && icon === "false" && state === "default") ||
            (destructive && hierarchy === "secondary-gray" && icon === "false" && state === "focused") ||
            (destructive && hierarchy === "tertiary-color" && icon === "false" && state === "default") ||
            (destructive && hierarchy === "tertiary-color" && icon === "false" && state === "focused") ||
            (destructive && hierarchy === "tertiary-color" && icon === "false" && state === "hover") ||
            (destructive && hierarchy === "tertiary-gray" && icon === "false" && state === "default") ||
            (destructive && hierarchy === "tertiary-gray" && icon === "false" && state === "focused")) &&
          "class-9"
        } ${
          ((!destructive && hierarchy === "link-gray" && icon === "false" && state === "default") ||
            (!destructive && hierarchy === "link-gray" && icon === "false" && state === "focused") ||
            (!destructive && hierarchy === "tertiary-gray" && icon === "false" && state === "default") ||
            (!destructive && hierarchy === "tertiary-gray" && icon === "false" && state === "focused")) &&
          "class-10"
        } ${
          ((!destructive && hierarchy === "secondary-gray" && icon === "false" && state === "default") ||
            (!destructive && hierarchy === "secondary-gray" && icon === "false" && state === "focused")) &&
          "class-11"
        } ${
          state === "disabled" && hierarchy === "secondary-color" && icon === "false" && !destructive && "class-12"
        } ${
          ((destructive && hierarchy === "link-color" && icon === "false" && state === "disabled") ||
            (destructive && hierarchy === "link-gray" && icon === "false" && state === "disabled") ||
            (destructive && hierarchy === "secondary-color" && icon === "false" && state === "disabled") ||
            (destructive && hierarchy === "secondary-gray" && icon === "false" && state === "disabled") ||
            (destructive && hierarchy === "tertiary-color" && icon === "false" && state === "disabled") ||
            (destructive && hierarchy === "tertiary-gray" && icon === "false" && state === "disabled")) &&
          "class-13"
        } ${
          ((!destructive && hierarchy === "link-color" && icon === "false" && state === "disabled") ||
            (!destructive && hierarchy === "link-gray" && icon === "false" && state === "disabled") ||
            (!destructive && hierarchy === "secondary-gray" && icon === "false" && state === "disabled") ||
            (!destructive && hierarchy === "tertiary-color" && icon === "false" && state === "disabled") ||
            (!destructive && hierarchy === "tertiary-gray" && icon === "false" && state === "disabled")) &&
          "class-14"
        } ${state === "hover" && hierarchy === "link-color" && icon === "false" && !destructive && "class-15"} ${
          ((destructive && hierarchy === "link-color" && icon === "false" && state === "hover") ||
            (destructive && hierarchy === "link-gray" && icon === "false" && state === "hover") ||
            (destructive && hierarchy === "secondary-gray" && icon === "false" && state === "hover") ||
            (destructive && hierarchy === "tertiary-gray" && icon === "false" && state === "hover")) &&
          "class-16"
        } ${
          ((!destructive && hierarchy === "link-gray" && icon === "false" && state === "hover") ||
            (!destructive && hierarchy === "tertiary-gray" && icon === "false" && state === "hover")) &&
          "class-17"
        } ${state === "hover" && hierarchy === "secondary-gray" && icon === "false" && !destructive && "class-18"} ${
          state === "default" &&
          icon === "false" &&
          size === "two-xl" &&
          !destructive &&
          hierarchy === "tertiary-color" &&
          "class-23"
        }`}
      />
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(["xl", "lg", "two-xl", "sm", "md"]),
  hierarchy: PropTypes.oneOf([
    "tertiary-color",
    "link-color",
    "tertiary-gray",
    "secondary-color",
    "link-gray",
    "primary",
    "secondary-gray",
  ]),
  icon: PropTypes.oneOf(["only", "leading", "false", "dot", "trailing"]),
  destructive: PropTypes.bool,
  state: PropTypes.oneOf(["disabled", "focused", "hover", "default"]),
  buttonBaseText: PropTypes.string,
};
