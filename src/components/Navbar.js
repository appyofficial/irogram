import React, { useState } from "react";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import styles from "../styles/NavbarStyles";

const Navbar = ({
  changeLevel,
  level,
  handleChange,
  showLevelSlider,
  classes,
}) => {
  let [colorFormat, setColorFormat] = useState("hex");
  let [openSnackbar, setOpenSnackbar] = useState(false);

  const handleFormatChange = (e) => {
    setColorFormat(e.target.value);
    handleChange(e.target.value);
    setOpenSnackbar(true);
  };

  const closeSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <nav className={classes.navbar}>
      <Link to="/">IROGRAM</Link>
      {showLevelSlider && (
        <div className={classes.slider}>
          <span>Level: {level}</span>
          <Slider
            defaultValue={level}
            step={100}
            min={100}
            max={900}
            onAfterChange={changeLevel}
          />
        </div>
      )}
      <div className={classes.selectContainer}>
        <Select value={colorFormat} onChange={handleFormatChange}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(155,155,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255,255,255, 1.0)</MenuItem>
        </Select>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={closeSnackbar}
        message={
          <span id="message-id">{`Format changed to ${colorFormat.toUpperCase()}`}</span>
        }
        ContentProps={{ "aria-describedby": "message-id" }}
        action={[
          <IconButton
            onClick={closeSnackbar}
            color="inherit"
            key="close"
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </nav>
  );
};

export default withStyles(styles)(Navbar);
