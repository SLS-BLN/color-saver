import React from "react";

function ColorCard({ hexcode }) {
  console.log(event.target.value);

  return (
    <>
      <form className="card">
        <input
          type="text"
          onChange={(event) => handleHexcode(hexcode, event.target.value)}
          placeholder="Add color code here"
        />
      </form>
    </>
  );
}

export default ColorCard;
