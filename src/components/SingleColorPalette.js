import React from "react";
import ColorBox from "./ColorBox";

const SingleColorPalette = ({ palette, colorId }) => {
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
      background={color.hex}
      showLink={false}
    />
  ));

  return (
    <div className="Palette">
      <h1>Single color palette</h1>
      <div className="Palette-colors">{colorBox}</div>
    </div>
  );
};

export default SingleColorPalette;
