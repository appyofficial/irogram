import React from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/PaletteListStyles";

const PaletteList = ({ history, palette, classes, deletePalette }) => {
  const goToPalette = (id) => history.push(`/palette/${id}`);
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>Palettes</h1>
          <Link to="/palette/new">Create new palette</Link>
        </nav>
        <div className={classes.palettes}>
          {palette.map((palette, id) => (
            <MiniPalette
              key={id}
              {...palette}
              handleClick={() => goToPalette(palette.id)}
              handleDelete={deletePalette}
              id={palette.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(PaletteList);
