import React from 'react';
import "./css/reset.css";
import Palette from "./Components/Palette";
import seedColors from "./seedColors";
import "./helpers/colorHelpers";
import {generatePalette} from "./helpers/colorHelpers";

function App() {
  console.log(generatePalette(seedColors[3]))
  return (
  <div>
    <Palette {...seedColors[5]}/>
  </div>
  );
}

export default App;
