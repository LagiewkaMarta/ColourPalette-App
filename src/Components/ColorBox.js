import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
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
    const { name, background } = this.props;
    const { copied } = this.state;
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
            <p>{background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-button">Copy</button>
          </div>
          <Link to="/" onClick={e => e.stopPropagation()}>
          <span className="see-more">More</span>
          </Link>
        </div>
      </CopyToClipboard>
    );
  }
}
