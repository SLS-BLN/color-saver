import React from "react";
import "./App.css";
import ColorCard from "./components/ColorCard";
import { useState } from "react";

function App() {
  const colorData = [{ id: "1", colorcode: "#ccc" }];
  const [color, setColor] = useState("#333");
  return (
    <>
      <div className="cards">
        <ColorCard hexcode={colorData.colorcode} />
      </div>
    </>
  );
}

export default App;
