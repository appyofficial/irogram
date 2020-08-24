import React from "react";
import { Link } from "react-router-dom";

const PaletteList = ({ palette }) => {
  return (
    <div>
      <h1>Palette list</h1>
      {palette.map((palette, id) => (
        <Link id={id} to={`/palette/${palette.id}`}>
          {palette.paletteName}
        </Link>
      ))}
    </div>
  );
};

export default PaletteList;
