import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Chroma from "chroma-js";

const styles = {
  colorBox: {
    width: "20%",
    height: (props) => (props.showingFullpalette ? "25%" : "50%"),
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    "&:hover button": {
      opacity: 1,
    },
  },
  copyText: {
    color: (props) =>
      Chroma(props.background).luminance() >= 0.5 ? "black" : "white",
  },
  colorName: {
    color: (props) =>
      Chroma(props.background).luminance() >= 0.08 ? "black" : "white",
  },
  seeMore: {
    color: (props) =>
      Chroma(props.background).luminance() >= 0.7 ? "black" : "white",
    position: "absolute",
    width: "100px",
    right: "0px",
    bottom: "0px",
    padding: "5px",
    fontSize: "12px",
    textAlign: "center",
    textTransform: "uppercase",
  },
  copyBtn: {
    color: (props) =>
      Chroma(props.background).luminance() >= 0.7 ? "black" : "white",
    width: "100px",
    height: "30px",
    position: "absolute",
    opacity: 0,
    top: "50%",
    left: "50%",
    backgroundColor: "rgba(0, 0, 0, 0.164)",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    fontSize: "12px",
    textTransform: "uppercase",
    outline: "none",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
  },
};

const ColorBox = ({
  background,
  name,
  moreUrl,
  showingFullpalette,
  classes,
}) => {
  const [copied, setCopied] = useState(false);

  const changeCopyState = () => {
    setCopied(!copied);
    setTimeout(() => {
      setCopied((copied) => !copied);
    }, 1500);
  };

  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <div style={{ background: background }} className={classes.colorBox}>
        <div
          className={`copy-overlay ${copied && "show"}`}
          style={{ background }}
        ></div>
        <div className={`copy-msg ${copied && "show"}`}>
          <h1>Copied</h1>
          <p className={classes.copyText}>{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span className={classes.colorName}>{name}</span>
          </div>
          <button className={classes.copyBtn}>Copy</button>
        </div>
        {showingFullpalette && (
          <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
            <span className={classes.seeMore}>More</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
};

export default withStyles(styles)(ColorBox);
