import React from 'react';
import Palette from "./Components/Palette";
import seedColors from "./seedColors";

function App() {
  return (
  <div>
    <Palette palette={seedColors[4]}/>
  </div>
  );
}

export default App;
