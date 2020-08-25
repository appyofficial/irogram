import React from "react";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";

const styles = {
  main: {
    background: "#f1f1f3",
    height: "100vh",
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
    marginTop: "15px",
    boxSizing: "border-box",
    display: "grid",
    width: "100%",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%",
  },
};

const PaletteList = ({ history, palette, classes }) => {
  const goToPalette = (id) => history.push(`/palette/${id}`);
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>Palettes</h1>
        </nav>
        <div className={classes.palettes}>
          {palette.map((palette, id) => (
            <MiniPalette
              key={id}
              {...palette}
              handleClick={() => goToPalette(palette.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(PaletteList);
