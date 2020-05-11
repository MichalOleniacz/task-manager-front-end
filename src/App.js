import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ActiveProjects from "./screens/ActiveProjects/ActiveProjects";
import UserAnalytics from "./screens/UserAnalytics/UserAnalytics";
import DeletedProjects from "./screens/DeletedProjects/DeletedProjects";
import Settings from "./screens/Settings/Settings";
import NotFound from "./screens/NotFound/NotFound";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/projects" component={ActiveProjects} />
        <Route path="/stats" component={UserAnalytics} />
        <Route path="/deleted" component={DeletedProjects} />
        <Route path="/settings" component={Settings} />
        <Route path="/notFound" component={NotFound} />
        <Redirect from="/" exact to="/projects" />
        <Redirect to="/notFound" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
