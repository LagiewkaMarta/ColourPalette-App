import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import { withStyles } from "@material-ui/styles";
import "../css/ColorBox.css";

const styles = {
  ColorBox: {
    width: "20%",
    height: props =>(props.showingFullPalette ? "25%" : "50%"),
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    textTransform: "uppercase",
    marginBottom: "-3.5px",
    "&:hover button": {
      opacity: 1
    }
  },
  copyText: {
    color: props =>
      chroma(props.background).luminance() >= 0.65 ? "black" : "white"
  },
  colorName: {
    color: props =>
      chroma(props.background).luminance() <= 0.08 ? "white" : "black"
  },
  seeMore: {
    color: props =>
      chroma(props.background).luminance() >= 0.65
        ? "rgb(100, 100, 100)"
        : "white",
    background: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    border: "none",
    right: 0,
    bottom: 0,
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px"
  },
  copyButton: {
    color: props =>
      chroma(props.background).luminance() >= 0.65
        ? "rgb(100, 100, 100)"
        : "white",
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    outline: "none",
    background: "rgba(255, 255, 255, 0.3)",
    fontSize: "1rem",
    lineHeight: "30px",
    textTransform: "uppercase",
    border: "none",
    transition: "0.5s",
    textDecoration: "none",
    opacity: 0
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: 0,
    bottom: 0,
    padding: "10px",
    color: "#000",
    letterSpacing: "1px",
    fontSize: "12px"
  },
  copyOverlay: {
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    position: "absolute",
    zIndex: 0,
    transition: "transform 0.6s ease-in-out",
    transform: "scale(0.1)",
    opacity: 0,
  },
  showOverlay: {
    transform: "scale(10)",
    zIndex: 1,
    opacity: 1
  },
  copyMessage: {
    position: "fixed",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    fontSize: "4rem",
    transform: "scale(0.1)",
    opacity: "0",
    color: "white",
    "& h1": {
      fontWeight: "400",
      textShadow: "1px 2px black",
      background: "rgba(255, 255, 255, 0.2)",
      width: "100%",
      textAlign: "center",
      marginBottom: "0",
      padding: "1rem",
      textTransform: "uppercase"
    },
    "& p": {
      fontSize: "2rem",
      fontWeight: "100"
    }
  },
  showMessage: {
    opacity: "1",
    transform: "scale(1)",
    zIndex: "25",
    transition: "all 0.4s ease-in-out",
    transitionDelay: "0.3s"
  }
};
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
