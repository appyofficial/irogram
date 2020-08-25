import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    backgroundColor: "white",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    "& :hover": {
      cursor: "pointer",
    },
  },
  colors: {},
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "black",
  },
};

const MiniPalette = ({ classes, paletteName, emoji }) => {
  return (
    <div className={classes.root}>
      <div className={classes.colors}></div>
      <h5 className={classes.title}>
        {paletteName} <span>{emoji}</span>
      </h5>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
