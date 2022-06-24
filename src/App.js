import React from "react";
import "./App.css";
import ColorCard from "./ColorCard";

function App() {
  return (
    <>
      <div className="cards">
        <ColorCard hexcode={hexcode} />
      </div>
    </>
  );
}

export default App;
