import React from 'react';
import { Switch, Route} from "react-router-dom";
import "./css/reset.css";
import Palette from "./Components/Palette";
import seedColors from "./seedColors";
import "./helpers/colorHelpers";
import {generatePalette} from "./helpers/colorHelpers";

function App() {
  return (
<Switch>
    <Route exact path="/" render={() => <h1>main</h1>}></Route>
    <Route exact path="/palette/:id" render={() => <h1>my palette</h1>}></Route>
</Switch>  
    );
  }
  
  export default App;
  // <Palette palette={generatePalette(seedColors[4])}/>
