import React, { useState } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import Navbar from "./Navbar";

const Palette = ({ palette: { colors } }) => {
  const [level, setLevel] = useState(500);
  const changeLevel = (level) => setLevel(level);

  const colorboxes = colors[level].map((n, i) => (
    <ColorBox name={n.name} background={n.hex} key={i} />
  ));

  const changeColorFormat = (e) => {
    alert(`format changed to ${e.target.value}`);
  };

  return (
    <div className="Palette">
      <Navbar
        level={level}
        changeLevel={changeLevel}
        handleChange={changeColorFormat}
      />
      <div className="Palette-colors">{colorboxes}</div>
      {/*Footer goes here */}
    </div>
  );
};

export default Palette;
