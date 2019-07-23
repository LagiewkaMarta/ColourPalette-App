import React from "react";
import { Switch, Route } from "react-router-dom";
import "./css/reset.css";
import Palette from "./Components/Palette";
import PaletteList from "./Components/PaletteList";
import seedColors from "./seedColors";
import "./helpers/colorHelpers";
import { generatePalette } from "./helpers/colorHelpers";

function App() {
  function findPalette(id) {
    const palette = seedColors.find(palette => palette.id === id);
    return palette;
  }
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => <PaletteList palettes={seedColors} />}
      />
      <Route
        exact
        path="/palette/:id"
        render={routeParams => (
          <Palette
            palette={generatePalette(findPalette(routeParams.match.params.id))}
          />
        )}
      />
    </Switch>
  );
}

export default App;
// <Palette palette={generatePalette(seedColors[4])}/>
