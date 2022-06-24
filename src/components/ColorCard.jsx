import React from "react";

function ColorCard({ hexcode }) {
  return (
    <>
      <form className="card">
        <input
          type="text"
          // onChange={(event) => handleHexcode(hexcode, event.target.value)}
          // placeholder="Add color code here"
        />
      </form>
    </>
  );
}

export default ColorCard;
