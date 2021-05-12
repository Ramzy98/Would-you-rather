import React, { Component, Fragment } from "react";
import LoginPage from "./LoginPage"; /**/
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import QuestionPage from "./QuestionPage";
import LeaderBoard from "./LeaderBoard";
import NewQuestion from "./NewQuestion";
import { handleReceiveUsers } from "../actions/users";
import { handleReceiveQuestions } from "../actions/questions";
import { connect } from "react-redux";
import { handleSetAuthedUser } from "../actions/authedUser";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleReceiveUsers());
    this.props.dispatch(handleReceiveQuestions());
    this.props.dispatch(handleSetAuthedUser("ricksanchez"));
  }
  render() {
    return (
      <Router>
        <Fragment>
          <Route path="/" exact component={LoginPage} />
          <Route path="/home" component={Dashboard} />
          <Route path="/question/:id" component={QuestionPage} />
          <Route path="/leaderboard" component={LeaderBoard} />{" "}
          <Route path="/add" component={NewQuestion} />
        </Fragment>
      </Router>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}
export default connect(mapStateToProps)(App);
