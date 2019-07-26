import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Slider from "rc-slider";
import styles from "../styles/NavbarStyles";
import "rc-slider/assets/index.css";



 class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex",
      open: false
    };
  }
  handleFormatChange = evt => {
    const { value } = evt.target;
    this.setState(
      {
        format: value,
        open: true
      },
      () => {
        this.props.handleSelectChange(this.state.format);
      }
    );
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };
  render() {
    const { value, handleSliderChange, showSlider, classes } = this.props;
    const { format, open } = this.state;
    return (
      <header className={classes.Navbar}>
        <div className={classes.logo}>
          <Link to="/">reactcolorpicker</Link>
        </div>
        {showSlider && (
          <div>
            <span>Level: {value}</span>
            <div className={classes.slider}>
              {" "}
              <Slider
                dots
                defaultValue={value}
                min={100}
                max={900}
                step={100}
                onChange={handleSliderChange}
              />
            </div>
          </div>
        )}
        <div className={classes.selectContainer}>
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255,1)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={open}
          onClose={this.handleClose}
          autoHideDuration={2000}
          message={
            <span id="message-id">
              Format Changed to {format.toUpperCase()}!
            </span>
          }
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          action={[
            <IconButton
              onClick={this.handleClose}
              key="close"
              aria-label="Close"
              color="inherit"
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </header>
    );
  }
}

export default withStyles(styles)(Navbar);