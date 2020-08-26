import React, { useState } from "react";
import ColorBox from "./ColorBox";
import PaletteFooter from "./PaletteFooter";
import "./Palette.css";
import Navbar from "./Navbar";

const Palette = ({ palette: { colors, paletteName, emoji, id } }) => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");

  const changeLevel = (level) => setLevel(level);

  const changeColorFormat = (val) => {
    setFormat(val);
  };

  const colorboxes = colors[level].map((color, i) => (
    <ColorBox
      name={color.name}
      background={color[format]}
      id={color.id}
      moreUrl={`/palette/${id}/${color.id}`}
      key={i}
      showingFullpalette
    />
  ));

  return (
    <div className="Palette">
      <Navbar
        level={level}
        changeLevel={changeLevel}
        handleChange={changeColorFormat}
        showLevelSlider
      />
      <div className="Palette-colors">{colorboxes}</div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  );
};

export default Palette;
