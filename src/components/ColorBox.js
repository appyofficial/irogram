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
  boxContent: {
    position: "absolute",
    width: "100px",
    left: "0px",
    bottom: "0px",
    padding: "5px",
    color: "black",
    fontSize: "12px",
  },
  copyOverlay: {
    opacity: "0",
    zIndex: "0",
    width: "100%",
    height: "100%",
    transition: "transform 0.6s ease-in-out",
    transform: "scale(0.1)",
  },
  showOverlay: {
    opacity: "1",
    transform: "scale(10)",
    zIndex: "10",
    position: "absolute",
  },
  copyMsg: {
    position: "fixed",
    left: "0",
    right: "0",
    bottom: "0",
    top: "0",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    opacity: "0",
    transform: "scale(0.1)",
    color: "white",
    "& h1": {
      fontSize: "40px",
      fontWeight: "400",
      textShadow: "1px 2px black",
      background: "rgba(255,255,255,0.2)",
      width: "100%",
      textAlign: "center",
      marginBottom: "0",
      padding: "2rem",
      textTransform: "uppercase",
    },
    "& p": {
      fontSize: "2rem",
      fontWeight: "100",
    },
  },
  showMsg: {
    transform: "scale(1)",
    opacity: "1",
    zIndex: "25",
    transition: "all 0.4s ease-in-out",
    transitionDelay: "0.3s",
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
          className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}
          style={{ background }}
        ></div>
        <div className={`${classes.copyMsg} ${copied && classes.showMsg}`}>
          <h1>COPIED!</h1>
          <p className={classes.copyText}>{background}</p>
        </div>
        <div className="copy-container">
          <div className={classes.boxContent}>
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
