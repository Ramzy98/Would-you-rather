import React, { Component, Fragment } from "react";
import LoginPage from "./LoginPage"; /**/
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import QuestionPage from "./QuestionPage";
import LeaderBoard from "./LeaderBoard";
import NewQuestion from "./NewQuestion";
export default class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route path="/" exact component={LoginPage} />
          <Route path="/home" component={Dashboard} />
          <Route path="/question/:id" component={QuestionPage} />
          <Route path="/leaderboard" component={LeaderBoard} />{" "}
          <Route path="/newquestion" component={NewQuestion} />
        </Fragment>
      </Router>
    );
  }
}
