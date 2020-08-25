import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ColorBox = ({ background, name, moreUrl }) => {
  const [copied, setCopied] = useState(false);

  const changeCopyState = () => {
    setCopied(!copied);
    setTimeout(() => {
      setCopied((copied) => !copied);
    }, 1500);
  };

  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <div style={{ background: background }} className="ColorBox">
        <div
          className={`copy-overlay ${copied && "show"}`}
          style={{ background }}
        ></div>
        <div className={`copy-msg ${copied && "show"}`}>
          <h1>Copied</h1>
          <p>{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-btn">Copy</button>
        </div>
        <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
          <span className="see-more">More</span>
        </Link>
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;
