import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "../css/Palette.css";
import PaletteFooter from "./PaletteFooter";

const styles = {
  Palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  colors: {
    height: "90%"
  }

}
class Palette extends Component {
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
    const {classes} = this.props

    const colorBoxes = colors[level].map(color => (
      <ColorBox key={color.id} name={color.name} background={color[format]} id={color.id} paletteId={id} showingFullPalette/>
    ));
    return (
      <div className={classes.Palette}>
        <Navbar
          value={level}
          handleSliderChange={this.handleSliderChange}
          handleSelectChange={this.handleSelectChange}
          showSlider
        />

        <div className={classes.colors}>{colorBoxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(Palette)