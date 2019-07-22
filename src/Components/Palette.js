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

  handleSelectChange = format => {
    this.setState({
      format
    });
  };
  render() {
    const { level, format } = this.state;
    const { colors, paletteName, emoji } = this.props.palette;

    const colorBoxes = colors[level].map(color => (
      <ColorBox key={color.id }name={color.name} background={color[format]} />
    ));
    return (
      <div className="Palette">
        <Navbar
          value={level}
          handleSliderChange={this.handleSliderChange}
          handleSelectChange={this.handleSelectChange}
        />

        <div className="Palette-colors">{colorBoxes}</div>
        <footer className="Palette-footer">{paletteName}
        <span className="emoji">{emoji}</span>
        </footer>
      </div>
    );
  }
}
