import React, { Component } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "../css/Navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex"
    };
  }
  handleChange = evt => {
    const { value } = evt.target;
    this.setState({
      format: value
    }, () => {
        this.props.handleSelectChange(this.state.format)
    });
  };
  render() {
    const { value, handleSliderChange } = this.props;
    const {format} = this.state;
    return (
      <header className="Navbar">
        <div className="logo">
          <a href="/">reactcolorpicker</a>
        </div>
        <div className="slider-container">
          <span>Level: {value}</span>
          <div className="slider">
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
        <div className="select-container">
          <Select value={format} onChange={this.handleChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255,1)</MenuItem>
          </Select>
        </div>
      </header>
    );
  }
}
