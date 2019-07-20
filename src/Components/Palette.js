import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "../css/Palette.css";

export default class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format: "hex"
    };
  }
  handleSliderChange = level => {
    this.setState({
      level
    });
  };

  handleSelectChange = (format) => {
    this.setState({
      format
    })
  }
  render() {
    const { level, format } = this.state;
    const { colors } = this.props.palette;

    const colorBoxes = colors[level].map(color => (
      <ColorBox name={color.name} background={color[format]} />
    ));
    return (
      <div className="Palette">
        {/* Navbar goes here */}
        <Navbar value={level} handleSliderChange={this.handleSliderChange} handleSelectChange={this.handleSelectChange}/>

        <div className="Palette-colors">
          {/* color boxes go here */}
          {colorBoxes}
        </div>
        {/* Footer goes here */}
      </div>
    );
  }
}
