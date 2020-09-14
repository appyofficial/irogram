import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/MiniPaletteStyles";
import DeleteIcon from "@material-ui/icons/Delete";

const MiniPalette = ({
  classes,
  paletteName,
  emoji,
  colors,
  handleClick,
  handleDelete,
  id,
}) => {
  const miniColorBoxes = colors.map((color) => (
    <div
      key={color.name}
      className={classes.minicolor}
      style={{ backgroundColor: color.color }}
    />
  ));

  const deletePalette = (e) => {
    e.stopPropagation();
    handleDelete(id);
  };

  return (
    <div className={classes.root} onClick={handleClick}>
      <div className={classes.delete} onClick={deletePalette}>
        <DeleteIcon
          className={classes.deleteIcon}
          style={{ transition: "all 0.3s ease-in-out" }}
        />
      </div>

      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span>{emoji}</span>
      </h5>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
