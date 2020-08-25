import React, { useState } from "react";
import { Link } from "react-router-dom";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

const SingleColorPalette = ({ palette, colorId, handleChange }) => {
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
      showLink={false}
    />
  ));

  return (
    <div className="SingleColorPalette Palette">
      <Navbar handleChange={changeColorFormat} />
      <div className="Palette-colors">
        {colorBox}
        <div className="ColorBox goback">
          <Link to={`/palette/${palette.id}`} className="back-btn">
            Go Back
          </Link>
        </div>
      </div>

      <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
    </div>
  );
};

export default SingleColorPalette;
