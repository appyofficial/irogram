import React, { useState } from "react";
import "./Navbar.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const Navbar = ({ changeLevel, level, handleChange }) => {
  let [colorFormat, setColorFormat] = useState("hex");

  const handleOnChange = (e) => {
    setColorFormat(e.target.value);
    handleChange(e.target.value);
  };

  return (
    <nav className="navbar">
      <div>IROGRAM</div>
      <div className="slider">
        <span>Level: {level}</span>
        <Slider
          defaultValue={level}
          step={100}
          min={100}
          max={900}
          onAfterChange={changeLevel}
        />
      </div>
      <div className="select-container">
        <Select value={colorFormat} onChange={handleOnChange}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(155,155,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255,255,255, 1.0)</MenuItem>
        </Select>
      </div>
    </nav>
  );
};

export default Navbar;
