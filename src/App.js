import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ActiveProjects from "./screens/ActiveProjects/ActiveProjects";
import UserAnalytics from "./screens/UserAnalytics/UserAnalytics";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <ActiveProjects />
      <Switch>
        <Route path="/projects" component={ActiveProjects} />
        <Route path="/stats" component={UserAnalytics} />
        <Route path="/deleted" component={ActiveProjects} />
        <Route path="/settings" component={ActiveProjects} />
        <Route path="/" exact component={ActiveProjects} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
