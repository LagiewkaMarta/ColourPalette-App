import React from 'react';
import "./css/reset.css";
import Palette from "./Components/Palette";
import seedColors from "./seedColors";

function App() {
  return (
  <div>
    <Palette {...seedColors[5]}/>
  </div>
  );
}

export default App;
