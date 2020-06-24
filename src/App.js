import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Game from "./containers/Game/Game";
import Home from "./containers/Home/Home";
import Credits from "./containers/Credits/Credits";

function App() {
  return (
    <Switch>
      <Route exact path="/game" component={Game} />
      <Route exact path="/Credits" component={Credits} />
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default App;
