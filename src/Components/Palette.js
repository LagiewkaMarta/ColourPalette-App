import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "../css/Palette.css";

export default class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map(color => (<ColorBox name={color.name} background={color.color}/>))
    return (
      <div className="Palette">
        {/* Navbar goes here */}
        <div className="Palette-colors">
            {/* color boxes go here */}
            {colorBoxes}
        </div>
        {/* Footer goes here */}
      </div>
    );
  }
}
