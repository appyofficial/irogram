import React from "react";
import "./App.css";
import Palette from "./components/Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelper";

function App() {
  return (
    <div className="App">
      <Palette palette={generatePalette(seedColors[4])} />
    </div>
  );
}

export default App;
