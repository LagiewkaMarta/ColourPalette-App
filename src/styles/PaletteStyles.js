import sizes from "../helpers/sizeHelpers";

export default {
    Palette: {

      height: "100vh",
      display: "flex",
      flexDirection: "column"
    },
    colors: {
      height: "90%",
    },
    goBack: {
      width: "20%",
      height: "50%",
      display: "inline-block",
      position: "relative",
      cursor: "pointer",
      textTransform: "uppercase",
      marginBottom: "-3.5px",
      opacity: 1,
      backgroundColor: "black",
      "& a": {
        color: "white",
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
      },
      [sizes.down("lg")]: {
        width: "25%",
        height: "33.333%"
      },
      [sizes.down("md")]: {
        width: "50%",
        height: "20%"
      },

      [sizes.down("xs")]: {
        width: "100%",
        height: "10%"
      },

    }
  };