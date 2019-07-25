import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import "../css/ColorBox.css";

export default class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
  }
  handleCopyAnimation = () => {
    this.setState(
      {
        copied: true
      },
      () =>
        setTimeout(() => {
          this.setState({
            copied: false
          });
        }, 1000)
    );
  };

  render() {
    const { name, background, paletteId, id, showLink } = this.props;
    const { copied } = this.state;
    const isDarkColor = chroma(background).luminance() <= 0.08;
    const isLightColor = chroma(background).luminance() >= 0.65;

    return (
      <CopyToClipboard text={background}>
        <div
          className="ColorBox"
          style={{ background }}
          onClick={this.handleCopyAnimation}
        >
          <div
            className={`copy-overlay ${copied && "show"}`}
            style={{ background }}
          />
          <div className={`copy-msg ${copied && "show"}`}>
            <h1>copied!</h1>
            <p className={isLightColor ? "dark-text" : "light-text"}>{background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={isDarkColor ? "light-text" : "dark-text"}>{name}</span>
            </div>
            <button className={`copy-button ${isLightColor ? "dark-text" : "light-text"}`}>Copy</button>
          </div>
          {showLink && (
            <Link
              to={`/palette/${paletteId}/${id}`}
              onClick={e => e.stopPropagation()}
            >
              <span className={`see-more ${isLightColor && "dark-text"}`} >More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}
