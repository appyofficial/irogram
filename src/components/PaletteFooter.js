import React from "react";

const PaletteFooter = ({ paletteName, emoji }) => {
  return (
    <footer className="palette-footer">
      <span>{paletteName}</span> <span> {emoji}</span>
    </footer>
  );
};

export default PaletteFooter;
