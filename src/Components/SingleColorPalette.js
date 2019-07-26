import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/PaletteStyles";
import { Link } from "react-router-dom";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";



class SingleColorPalette extends Component {
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
    const { paletteName, emoji, id } = this.props.palette;
    const { classes } = this.props;
    const colorBoxes = this._shades.map(color => {
      return (
        <ColorBox
          key={color.name}
          name={color.name}
          background={color[format]}
          showingFullPalette={false}
        />
      );
    });
    return (
      <div className={classes.Palette}>
        <Navbar
          handleSelectChange={this.handleSelectChange}
          showSlider={false}
        />
        <div className={classes.colors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link to={`/palette/${id}`}>GO BACK</Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);
