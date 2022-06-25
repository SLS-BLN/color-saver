import React from "react";
import "./App.css";
import ColorBox from "./components/ColorBox";

function App() {
  const colors = [
    { id: 1, color: "#777" },
    { id: 2, color: "#fff" },
    { id: 3, color: "#1ecd13 " },
    { id: 4, color: "#90c " },
    { id: 5, color: "#20dfce  " },
    { id: 6, color: "#1a1aaa  " },
  ];

  return (
    <>
      <div className="container">
        <h2 className="heading heading-primary">Choose your color</h2>
        <ColorBox color={colors[0].color} />
        <ColorBox color={colors[1].color} />
        <ColorBox color={colors[2].color} />
        <ColorBox color={colors[3].color} />
        <ColorBox color={colors[4].color} />
        <ColorBox color={colors[5].color} />
      </div>
    </>
  );
}

export default App;
