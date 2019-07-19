import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "../css/Palette.css";



export default class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 500
    };
  }
  handleSliderChange = value => {
    this.setState({
      value
    });
  };
  render() {
    const { value } = this.state;
    const { colors } = this.props.palette;

    const colorBoxes = colors[value].map(color => (
      <ColorBox name={color.name} background={color.hex} />
    ));
    return (
      <div className="Palette">
        {/* Navbar goes here */}
<Navbar value={value} handleSliderChange={this.handleSliderChange}/>

        <div className="Palette-colors">
          {/* color boxes go here */}
          {colorBoxes}
        </div>
        {/* Footer goes here */}
      </div>
    );
  }
}
