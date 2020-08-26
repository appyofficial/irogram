export default {
  navbar: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    height: "6vh",
    padding: "0 5px 0 5px",
  },
  selectContainer: { marginLeft: "auto" },
  slider: {
    width: "350px",
    margin: "0 10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "10px",
    "& .rc-slider-track": { backgroundColor: "transparent" },
    "& .rc-slider-rail": { height: "10px" },
    "& .rc-slider-handle,.rc-slider-handle:active,.rc-slider-handle:focus,.rc-slider-handle:hover ": {
      backgroundColor: "green",
      outline: "none",
      border: "2px solid green",
      boxShadow: "none",
    },
  },
};
