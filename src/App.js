import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Palette from "./components/Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelper";

function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <h1>hello home</h1>} />
      <Route exact path="/palette/:id" render={() => <h1>hello palette</h1>} />
    </Switch>
  );
}

export default App;
