/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const LargeInput = ({
  state,
  type,
  className,
  overlapClassName,
  textClassName,
  ellipseClassName,
  line = "https://c.animaapp.com/hPRv8TiJ/img/line-1-6.svg",
}) => {
  return (
    <div className={`large-input state-0-${state} ${type} ${className}`}>
      {(state === "caption" ||
        state === "error" ||
        state === "success" ||
        (state === "default" && type === "search-icon")) && (
        <div className={`overlap ${overlapClassName}`}>
          {(state === "default" || (state === "caption" && type === "standard")) && (
            <div className={`text-9 ${textClassName}`}>
              {type === "standard" && <div className="div-2">Michael Harmen</div>}

              {state === "default" && <>Search</>}
            </div>
          )}

          {["error", "success"].includes(state) && (
            <>
              <div className="background" />
              <img
                className="close-icon"
                alt="Close icon"
                src="https://c.animaapp.com/hPRv8TiJ/img/close-icon-9@2x.png"
              />
            </>
          )}

          {(state === "error" || state === "success" || (state === "caption" && type === "search-icon")) && (
            <div className="search-wrapper">
              <div className="search">
                {state === "caption" && <>Search</>}

                {type === "standard" && <>Michael Harmen</>}

                {type === "search-icon" && ["error", "success"].includes(state) && <>michael.harmen</>}
              </div>
            </div>
          )}

          {type === "search-icon" && ["error", "success"].includes(state) && (
            <img
              className="username-icon"
              alt="Username icon"
              src={
                state === "success"
                  ? "https://c.animaapp.com/hPRv8TiJ/img/username-icon@2x.png"
                  : "https://c.animaapp.com/hPRv8TiJ/img/username-icon-1@2x.png"
              }
            />
          )}

          {(state === "error" || state === "success" || (state === "caption" && type === "search-icon")) && (
            <div className="overlap-group-wrapper">
              <div className="overlap-group-4">
                {state === "caption" && (
                  <>
                    <div className="ellipse" />
                    <img className="line" alt="Line" src="https://c.animaapp.com/hPRv8TiJ/img/line-1-6.svg" />
                  </>
                )}

                {type === "search-icon" && ["error", "success"].includes(state) && <>Username</>}

                {type === "standard" && <>Email Address</>}
              </div>
            </div>
          )}
        </div>
      )}

      {(state === "disabled" ||
        state === "filled" ||
        state === "typing" ||
        (state === "default" && type === "standard")) && (
        <div className="overlap-group">
          {["filled", "typing"].includes(state) && (
            <>
              <div className="background-2">
                {state === "filled" && (
                  <div className="overlap-group-2">
                    <div className="background-3" />
                    <div className="rectangle" />
                  </div>
                )}
              </div>
              <img className="img" alt="Close icon" src="https://c.animaapp.com/hPRv8TiJ/img/close-icon-9@2x.png" />
              <div className="simmmple-wrapper">
                <div className="simmmple">
                  {type === "search-icon" && state === "filled" && <>Simmmple</>}

                  {state === "typing" && type === "search-icon" && <>Simmmp|</>}

                  {state === "filled" && type === "standard" && <>Michael Harmen</>}

                  {state === "typing" && type === "standard" && <>Michael Harm|</>}
                </div>
              </div>
              <div className="overlap-wrapper">
                <div className="overlap-5">
                  {type === "search-icon" && (
                    <>
                      <div className="ellipse" />
                      <img className="line" alt="Line" src="https://c.animaapp.com/hPRv8TiJ/img/line-1-6.svg" />
                    </>
                  )}

                  {type === "standard" && <>Email Address</>}
                </div>
              </div>
            </>
          )}

          {type === "search-icon" && ["filled", "typing"].includes(state) && (
            <div className="placeholder-text">
              <div className="text-wrapper-2">Search</div>
            </div>
          )}

          {state === "disabled" && (
            <>
              <div className="background-4" />
              <div className="michael-harmen-wrapper">
                <div className="div-2">
                  {type === "standard" && <>Michael Harmen</>}

                  {type === "search-icon" && <>Search</>}
                </div>
              </div>
            </>
          )}

          {type === "search-icon" && state === "disabled" && (
            <div className="div-wrapper">
              <div className="overlap-group-3">
                <div className="ellipse" />
                <img className="line" alt="Line" src="https://c.animaapp.com/hPRv8TiJ/img/line-1-6.svg" />
              </div>
            </div>
          )}

          {state === "default" && <div className="div-2">Michael Harmen</div>}
        </div>
      )}

      {type === "search-icon" && state === "active" && (
        <img className="close-icon-2" alt="Close icon" src="https://c.animaapp.com/hPRv8TiJ/img/close-icon-9@2x.png" />
      )}

      {((state === "active" && type === "search-icon") ||
        state === "caption" ||
        (state === "default" && type === "search-icon") ||
        state === "error" ||
        state === "success") && (
        <div className="caption-text">
          <div className="this-is-just-a">
            {state === "caption" && <p className="text-wrapper-8">This is just a simple caption text!</p>}

            {type === "search-icon" && state === "error" && (
              <p className="text-wrapper-8">Ugh! This username is already taken!</p>
            )}

            {state === "error" && type === "standard" && <>Ugh! Something went wrong.</>}

            {type === "search-icon" && state === "success" && <>Success! Username available!</>}

            {state === "success" && type === "standard" && <>Message successfully sent!</>}

            {state === "default" && (
              <>
                <div className={`ellipse ${ellipseClassName}`} />
                <img className="line" alt="Line" src={line} />
              </>
            )}

            {state === "active" && <>Search</>}
          </div>
        </div>
      )}

      {type === "search-icon" && state === "active" && (
        <div className="search-icon-2">
          <div className="overlap-group-3">
            <div className="ellipse" />
            <img className="line" alt="Line" src="https://c.animaapp.com/hPRv8TiJ/img/line-1-6.svg" />
          </div>
        </div>
      )}

      {state === "active" && type === "standard" && (
        <>
          <img
            className={`close-icon-2 ${overlapClassName}`}
            alt="Close icon"
            src="https://c.animaapp.com/hPRv8TiJ/img/close-icon-9@2x.png"
          />
          <div className="text-4">
            <div className="div-2">Michael Harmen</div>
          </div>
        </>
      )}
    </div>
  );
};

LargeInput.propTypes = {
  state: PropTypes.oneOf(["caption", "active", "default", "success", "filled", "typing", "error", "disabled"]),
  type: PropTypes.oneOf(["search-icon", "standard"]),
  line: PropTypes.string,
};
