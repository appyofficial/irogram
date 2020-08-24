import React, { useState } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import Navbar from "./Navbar";

const Palette = ({ palette: { colors, paletteName, emoji } }) => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");

  const changeLevel = (level) => setLevel(level);

  const changeColorFormat = (val) => {
    setFormat(val);
  };

  const colorboxes = colors[level].map((color, i) => (
    <ColorBox name={color.name} background={color[format]} key={i} />
  ));

  return (
    <div className="Palette">
      <Navbar
        level={level}
        changeLevel={changeLevel}
        handleChange={changeColorFormat}
      />
      <div className="Palette-colors">{colorboxes}</div>
      <footer className="palette-footer">
        <span>{paletteName}</span> <span> {emoji}</span>
      </footer>
    </div>
  );
};

export default Palette;
