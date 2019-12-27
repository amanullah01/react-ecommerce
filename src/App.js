import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/hompage.component";

const HatsPage = () => {
  return (
    <div>
      <h1>This is Hats page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Route exact="true" path="/" component={HomePage} />
      <Route exact="true" path="/hats" component={HatsPage} />
    </div>
  );
}

export default App;
