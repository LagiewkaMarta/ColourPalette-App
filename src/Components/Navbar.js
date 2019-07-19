import React, { Component } from 'react';
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "../css/Navbar.css";

export default class Navbar extends Component {
    render() {
        const {value, handleSliderChange} = this.props;
        return (
            <header className="Navbar">
                <div className="logo">
                    <a href="#">reactcolorpicker</a>
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
            </header>
        )
    }
}
