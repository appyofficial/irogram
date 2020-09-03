import React, { useState } from "react";
import { withStyles } from "@material-ui/styles";
import ColorBox from "./ColorBox";
import PaletteFooter from "./PaletteFooter";
import Navbar from "./Navbar";
import styles from "../styles/PaletteStyles";

const Palette = ({ palette: { colors, paletteName, emoji, id }, classes }) => {
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
    <div className={classes.palette}>
      <Navbar
        level={level}
        changeLevel={changeLevel}
        handleChange={changeColorFormat}
        showLevelSlider
      />
      <div className={classes.paletteColors}>{colorboxes}</div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  );
};

export default withStyles(styles)(Palette);
