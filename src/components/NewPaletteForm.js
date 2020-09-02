import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import DraggableColorList from "./DraggableColorList";
import arrayMove from "array-move";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import styles from "../styles/NewPaletteFormStyle";

class NewPaletteForm extends React.Component {
  static defaultProps = { maxColors: 20 };
  constructor(props) {
    super(props);
    this.state = {
      newPaletteEmoji: "",
      open: false,
      dialogOpen: false,
      newPaletteName: "",
      colorName: "",
      currentColor: "purple",
      colors: [{ color: "blue", name: "blue" }],
    };
  }

  componentDidMount() {
    // custom rule will have name 'isPasswordMatch'
    ValidatorForm.addValidationRule("isColorNameUnique", (value) =>
      this.state.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );

    ValidatorForm.addValidationRule("isColorUnique", (value) =>
      this.state.colors.every(({ color }) => color !== this.state.currentColor)
    );

    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
      this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  updateCurrentColor = (newColor) => {
    this.setState({ currentColor: newColor.hex });
  };

  addNewColor = () => {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.colorName,
    };
    this.setState({ colors: [...this.state.colors, newColor] });
    this.setState({ colorName: "" });
  };

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = () => {
    let newPaletteName = this.state.newPaletteName;
    let newPaletteEmoji = this.state.newPaletteEmoji;
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, "-"),
      colors: this.state.colors,
      emoji: newPaletteEmoji,
    };
    this.props.savePalette(newPalette);
    this.props.history.push("/");
  };

  removeColor = (colorName) =>
    this.setState({
      colors: this.state.colors.filter((color) => color.name !== colorName),
    });

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }));
  };

  clearPalette = () => this.setState({ colors: [] });

  newRandomColor = () => {
    const allColors = this.props.palettes.map((p) => p.colors).flat();
    const rand = Math.floor(Math.random() * allColors.length);
    const randomColor = allColors[rand];
    this.setState({ colors: [...this.state.colors, randomColor] });

    console.log(allColors);
  };

  //dialog box
  handleClickOpen = () => {
    this.setState({ dialogOpen: true });
  };

  handleClose = () => {
    this.setState({ dialogOpen: false });
  };

  onEmojiSelect = (emoji) => {
    this.setState({ newPaletteEmoji: emoji.native });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          color="default"
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Create Palette
            </Typography>
            {/*Dialog box*/}
            <Button
              variant="outlined"
              color="primary"
              onClick={this.handleClickOpen}
            >
              Save Palette
            </Button>
            <Dialog
              open={this.state.dialogOpen}
              onClose={this.handleClose}
              aria-labelledby="form-dialog-title"
            >
              <ValidatorForm onSubmit={this.handleSubmit}>
                <Picker onSelect={this.onEmojiSelect} />
                <DialogTitle id="form-dialog-title">Save Palette</DialogTitle>
                <DialogContent>
                  <DialogContentText>Enter a palate name.</DialogContentText>

                  <TextValidator
                    label="Palette name"
                    name="newPaletteName"
                    value={this.state.newPaletteName}
                    onChange={this.handleChange}
                    validators={["required", "isPaletteNameUnique"]}
                    errorMessages={[
                      "Please enter palette name",
                      "Palette name already exists",
                    ]}
                  />
                </DialogContent>
                <DialogActions>
                  <Button type="submit" variant="contained" color="primary">
                    Save Palette
                  </Button>
                  <Button onClick={this.handleClose} color="primary">
                    Cancel
                  </Button>
                </DialogActions>
              </ValidatorForm>
            </Dialog>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <Typography variant="h4">Select your color</Typography>
          <div>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.clearPalette}
            >
              Clear Palette
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={this.newRandomColor}
              disabled={this.state.colors.length >= this.props.maxColors}
            >
              Random Color
            </Button>
          </div>
          <ChromePicker
            color={this.state.currentColor}
            onChangeComplete={this.updateCurrentColor}
          />
          <ValidatorForm onSubmit={this.addNewColor} ref="form">
            <TextValidator
              name="colorName"
              value={this.state.colorName}
              onChange={this.handleChange}
              validators={["required", "isColorNameUnique", "isColorUnique"]}
              errorMessages={[
                "Please give your color a name",
                "Color name already exisist",
                "This color already exisist",
              ]}
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={{ backgroundColor: this.state.currentColor }}
              disabled={this.state.colors.length >= this.props.maxColors}
            >
              Add Color
            </Button>
          </ValidatorForm>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableColorList
            colors={this.state.colors}
            removeColor={this.removeColor}
            axis="xy"
            onSortEnd={this.onSortEnd}
            distance={2}
          />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
