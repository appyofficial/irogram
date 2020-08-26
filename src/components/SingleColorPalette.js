import React, { useState } from "react";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import styles from "../styles/SingleColorPaletteStyles";

const SingleColorPalette = ({ palette, colorId, handleChange, classes }) => {
  const [format, setFormat] = useState("hex");

  const changeColorFormat = (val) => {
    setFormat(val);
  };

  const gatherShades = (palette, colorToFilterBy) => {
    let shades = [];
    let allColors = palette.colors;
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorToFilterBy)
      );
    }
    return shades.slice(1);
  };

  const shades = gatherShades(palette, colorId);

  const colorBox = shades.map((color, i) => (
    <ColorBox
      key={i}
      name={color.name}
      background={color[format]}
      showingFullpalette={false}
    />
  ));

  return (
    <div className={`SingleColorPalette ${classes.palette}`}>
      <Navbar handleChange={changeColorFormat} />
      <div className={classes.paletteColors}>
        {colorBox}
        <div className={classes.goBack}>
          <Link to={`/palette/${palette.id}`}>Go Back</Link>
        </div>
      </div>

      <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
    </div>
  );
};

export default withStyles(styles)(SingleColorPalette);
