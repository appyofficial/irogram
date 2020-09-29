import React from "react";
import logo from "../images/logo.png";
import logoWithWhiteText from "../images/logowithwhitetext.png";
import { withStyles } from "@material-ui/styles";
import { useHistory } from "react-router-dom";
const styles = {
  logo: {
    marginRight: "10px",
    "&:hover": {
      cursor: "pointer",
    },
  },
};
function Logo({ classes, width, height, style, withText }) {
  const history = useHistory();

  return (
    <div className={classes.logo} onClick={() => history.push("/")}>
      <img
        src={withText ? logoWithWhiteText : logo}
        alt="irogram"
        width={width}
        height={height}
        style={{ ...style }}
      />
    </div>
  );
}
export default withStyles(styles)(Logo);
