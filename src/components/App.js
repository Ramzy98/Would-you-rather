import React, { Component, Fragment } from "react";
import LoginPage from "./LoginPage"; /*
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";*/
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route path="/" exact component={LoginPage} />
          <Route path="/Dashboard" component={Dashboard} />
        </Fragment>
      </Router>
    );
  }
}
