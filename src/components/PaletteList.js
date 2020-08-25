import React from "react";
import MiniPalette from "./MiniPalette";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";

const styles = {
  main: {
    background: "lightgrey",
    height: "100%",
    display: "flex",
    alingItems: "flex-start",
    justifyContent: "center",
  },
  container: {
    width: "50%",
    display: "flex",
    alingItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alingItems: "center",
  },
  palettes: {
    boxSizing: "border-box",
    display: "grid",
    width: "100%",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%",
  },
};

const PaletteList = ({ palette, classes }) => {
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>Palettes</h1>
        </nav>
        <div className={classes.palettes}>
          {palette.map((palette, id) => (
            <Link id={id} to={`/palette/${palette.id}`}>
              <MiniPalette {...palette} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(PaletteList);
