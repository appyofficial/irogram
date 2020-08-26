export default {
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
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  nav: {
    marginTop: "10px",
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
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
