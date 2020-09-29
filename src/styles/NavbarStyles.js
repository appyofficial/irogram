export default {
  navbar: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    height: "5%",
    padding: "0 5px 0 5px",
    background: "#01142F",
  },
  selectContainer: { marginLeft: "auto", color: "white" },
  slider: {
    color: "white",
    width: "350px",
    margin: "0 10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "10px",
    "& .rc-slider-track": { backgroundColor: "transparent" },
    "& .rc-slider-rail": { height: "10px" },
    "& .rc-slider-handle,.rc-slider-handle:active,.rc-slider-handle:focus,.rc-slider-handle:hover ": {
      backgroundColor: "cyan",
      outline: "none",
      border: "4px solid cyan",
      boxShadow: "none",
      marginTop: "-2px",
    },
  },
};
