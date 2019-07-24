import React, { Component } from "react";
import ColorBox from "./ColorBox";
export default class SingleColorPalette extends Component {
  constructor(props) {
    super(props)
    this._shades = this.gatherShades(this.props.colorId, this.props.palette.colors)
  }
  gatherShades = (colorId, colors) => {
    //   console.log(colors, colorId)
    let shades = [];
    for (let key in colors) {
    //   let value = colors[key];
    //   let idk = value.filter(el => el.id === colorId);
    //   palette.push(idk[0]);
    shades = shades.concat(colors[key].filter(el => el.id === colorId))
    }
    return shades.splice(1)
  };
  render() {
    // console.log(this.props.match.params.colorId);
    // console.log(this.props.palette.colors)
    // console.log(this._shades)
    const colorBoxes = this._shades.map(color => {
        console.log(color)
       return  <ColorBox key={color.name} name={color.name} background={color.hex} showLink={false}/>
    })
    return (
      <div className="Palette">
        <h1>Single Color Palette</h1>
<div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}
