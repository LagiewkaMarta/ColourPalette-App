import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
export default class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex"
    };
    this._shades = this.gatherShades(
      this.props.colorId,
      this.props.palette.colors
    );
  }
  gatherShades = (colorId, colors) => {
    let shades = [];
    for (let key in colors) {
      shades = shades.concat(colors[key].filter(el => el.id === colorId));
    }
    return shades.splice(1);
  };
  handleSelectChange = format => {
    this.setState({
      format
    });
  };
  render() {
    const { format } = this.state;
    const {paletteName, emoji} = this.props.palette
    const colorBoxes = this._shades.map(color => {
      return (
        <ColorBox
          key={color.name}
          name={color.name}
          background={color[format]}
          showLink={false}
        />
      );
    });
    return (
      <>
        <Navbar handleSelectChange={this.handleSelectChange} showSlider={false} />
        <div className="Palette">
          <div className="Palette-colors">{colorBoxes}</div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji}/>
      </>
    );
  }
}
