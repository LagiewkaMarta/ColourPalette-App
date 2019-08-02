export default {
    root: {
      backgroundColor: "blue",
      height: "100vh",
      display: "flex",
      // alignItems: "flex-start",
      justifyContent: "center"
    },
    container: {
      width: "50%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      // flexWrap: "nowrap"
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
      gridGap: "5%"
    }
  };