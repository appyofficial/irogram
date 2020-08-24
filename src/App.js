import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Palette from "./components/Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelper";

function App() {
  const findPalette = (id) => seedColors.find((palette) => palette.id === id);

  return (
    <Switch>
      <Route exact path="/" render={() => <h1>hello home</h1>} />
      <Route
        exact
        path="/palette/:id"
        render={(routeProps) => (
          <Palette
            palette={generatePalette(findPalette(routeProps.match.params.id))}
          />
        )}
      />
    </Switch>
  );
}

export default App;
