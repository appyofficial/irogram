import React from "react";
import { useHistory } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/PaletteListStyles";
import { v4 as uuidv4 } from "uuid";

import { Button } from "@material-ui/core";
import Logo from "./Logo";

const PaletteList = ({ history, palette, classes, deletePalette }) => {
  const usingHistory = useHistory();
  const goToPalette = (id) => history.push(`/palette/${id}`);
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <Logo width="120px" withText />
          <Button onClick={() => usingHistory.push("/palette/new")}>
            Create
          </Button>
        </nav>
        <div className={classes.palettes}>
          {palette.map((palette, id) => (
            <MiniPalette
              key={uuidv4()}
              {...palette}
              handleClick={() => goToPalette(palette.id)}
              handleDelete={deletePalette}
              id={palette.id}
            />
          ))}
        </div>
        <footer
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: "20px",
            backgroundColor: "white",
          }}
        >
          <p>How to use Irogram?</p>
          <p>
            Made by
            <a
              href="https://www.appysharma.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Appy Sharma
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default withStyles(styles)(PaletteList);
