import sizes from "./sizes";

export default {
  main: {
    background: "#F2F8FD",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    overflow: "scroll",
  },
  container: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "no-wrap",
    height: "100%",
  },
  nav: {
    height: "5%",
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
    background: "#01142F",
    padding: "10px 20px",
    "& button": {
      background: "lightgreen",
      color: "white",
      fontWeight: "bold",
    },
  },
  palettes: {
    width: "80%",
    margin: "0 auto",
    padding: "20px",
    boxSizing: "border-box",
    display: "grid",
    gridTemplateColumns: "repeat(4, 20%)",
    gridGap: "10% 5%",
    [sizes.down("md")]: {
      width: "100%",
      gridTemplateColumns: "repeat(3, 30%)",
    },
    [sizes.down("sm")]: {
      width: "80%",
      gridGap: "2% 2%",
      gridTemplateColumns: "repeat(2, 50%)",
    },
    [sizes.down("xs")]: {
      width: "80%",
      gridGap: "2% 2%",
      gridTemplateColumns: "repeat(1, 100%)",
    },
  },
};
