import React from "react";

function ColorBox(props) {
  const bgColor = props.color;

  return (
    <>
      <div
        className="color-box"
        style={{
          backgroundColor: bgColor,
        }}
      >
        <button
          type="button"
          className="color-box__code"
          onClick={() =>
            navigator.clipboard.writeText(bgColor) && alert("Copied")
          }
        >
          {props.color}
        </button>
      </div>
    </>
  );
}

export default ColorBox;
