import sizes from "../helpers/sizeHelpers";

export default {
    root: {
      backgroundColor: "blue",
      minHeight: "100vh",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      overflow: "scroll"
    },
    container: {
      width: "50%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "wrap",
      [sizes.down("xl")]: {
        width: "80%"
      },
      [sizes.down("xs")]: {
        width: "70%"
      },
    }, 
    nav: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
      color: "#fff",
      padding: "1rem 0",
      "& a": {
        color: "white"
      }
    }, 
  
    palettes: {
      boxSizing: "border-box",
      width: "100%",
      display: "grid",
      gridTemplateColumns: "repeat(3, 30%)",
      gridGap: "1.5rem",
      [sizes.down("md")]: {
       gridTemplateColumns: "repeat(2, 50%)",
      },
      [sizes.down("xs")]: {
       gridTemplateColumns: "repeat(1, 100%)",
       gridGap: "1rem",
      }
    }
  };