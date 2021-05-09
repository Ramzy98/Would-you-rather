import React, { Component, Fragment } from "react";
import LoginPage from "./LoginPage"; /**/
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route path="/" exact component={LoginPage} />
          <Route path="/Home" component={Dashboard} />
        </Fragment>
      </Router>
    );
  }
}
