import React, { useState, useEffect } from "react";
import SingleColorPalette from "./components/SingleColorPalette";
import NewPaletteForm from "./components/NewPaletteForm";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import PaletteList from "./components/PaletteList";
import Palette from "./components/Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelper";

function App() {
  const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
  const [palettes, setPalettes] = useState(savedPalettes || seedColors);
  const findPalette = (id) => palettes.find((palette) => palette.id === id);
  const savePalette = (newPalette) => {
    setPalettes([...palettes, newPalette]);
  };
  const deletePalette = (id) => {
    setPalettes(palettes.filter((p) => p.id !== id));
  };
  useEffect(() =>
    //saving palettes : local storage
    window.localStorage.setItem("palettes", JSON.stringify(palettes))
  );

  return (
    <Switch>
      <Route
        exact
        path="/how-to"
        render={(routeProps) => <div>Video is coming soon</div>}
      />
      <Route
        exact
        path="/palette/new"
        render={(routeProps) => (
          <NewPaletteForm
            palettes={palettes}
            savePalette={savePalette}
            {...routeProps}
          />
        )}
      />
      <Route
        exact
        path="/"
        render={(routeProps) => (
          <PaletteList
            palette={palettes}
            deletePalette={deletePalette}
            {...routeProps}
          />
        )}
      />
      <Route
        exact
        path="/palette/:id"
        render={(routeProps) => (
          <Palette
            palette={generatePalette(findPalette(routeProps.match.params.id))}
          />
        )}
      />
      <Route
        exact
        path="/palette/:paletteId/:colorId"
        render={(routeProps) => (
          <SingleColorPalette
            colorId={routeProps.match.params.colorId}
            palette={generatePalette(
              findPalette(routeProps.match.params.paletteId)
            )}
          />
        )}
      />
    </Switch>
  );
}

export default App;
