import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import styles from "../styles/ColorBoxStyles";
import { withStyles } from "@material-ui/styles";

class ColorBox extends Component {
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
    const { name, background, paletteId, id, showingFullPalette , classes } = this.props;
    const { copied } = this.state;

    return (
      <CopyToClipboard text={background}>
        <div
          className={classes.ColorBox}
          style={{ background }}
          onClick={this.handleCopyAnimation}
        >
          <div
            className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}
            style={{ background }}
          />
          <div className={`${classes.copyMessage} ${copied &&
              classes.showMessage}`}>
            <h1>copied!</h1>
            <p className={classes.copyText}>{background}</p>
          </div>
          <div>
            <div className={classes.boxContent}>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {showingFullPalette && (
            <Link
              to={`/palette/${paletteId}/${id}`}
              onClick={e => e.stopPropagation()}
            >
              <span className={classes.seeMore}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
