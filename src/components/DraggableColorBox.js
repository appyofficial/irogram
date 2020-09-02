import React from "react";
import { withStyles } from "@material-ui/styles";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
import { SortableElement } from "react-sortable-hoc";

const styles = {
  root: {
    width: "20%",
    height: "25%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "5px",
    color: "black",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

const DraggableColorBox = ({ color, classes, name, handleClick }) => {
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <DeleteTwoToneIcon onClick={handleClick} />
      </div>
    </div>
  );
};

export default SortableElement(withStyles(styles)(DraggableColorBox));
