import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./css/reset.css";
import Palette from "./Components/Palette";
import PaletteList from "./Components/PaletteList";
import SingleColorPalette from "./Components/SingleColorPalette";
import NewPaletteForm from "./Components/NewPaletteForm";
import seedColors from "./seedColors";
import "./helpers/colorHelpers";
import { generatePalette } from "./helpers/colorHelpers";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      palettes : seedColors
    };
  }

  findPalette = id => {
    const palette = this.state.palettes.find(palette => palette.id === id);
    return palette;
  };

  savePalette = newPalette => {
    this.setState({
      palettes: [...this.state.palettes, newPalette]
    })
  };
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/palette/new"
          render={(routeParams) => <NewPaletteForm savePalette={this.savePalette} {...routeParams} />}
        />
        <Route
          exact
          path="/"
          render={routeParams => (
            <PaletteList palettes={this.state.palettes} {...routeParams} />
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={routeParams => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeParams.match.params.id)
              )}
            />
          )}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={routeParams => (
            <SingleColorPalette
              colorId={routeParams.match.params.colorId}
              palette={generatePalette(
                this.findPalette(routeParams.match.params.paletteId)
              )}
            />
          )}
        />
      </Switch>
    );
  }
}
export default App;
// <Palette palette={generatePalette(seedColors[4])}/>
