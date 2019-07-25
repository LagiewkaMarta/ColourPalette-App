import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "../css/Palette.css";
import PaletteFooter from "./PaletteFooter";

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
    const { colors, paletteName, emoji, id } = this.props.palette;

    const colorBoxes = colors[level].map(color => (
      <ColorBox key={color.id} name={color.name} background={color[format]} id={color.id} paletteId={id} showingFullPalette/>
    ));
    return (
      <div className="Palette">
        <Navbar
          value={level}
          handleSliderChange={this.handleSliderChange}
          handleSelectChange={this.handleSelectChange}
          showSlider
        />

        <div className="Palette-colors">{colorBoxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}
