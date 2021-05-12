import React, { Component, Fragment } from "react";
import LoginPage from "./LoginPage"; /**/
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import QuestionPage from "./QuestionPage";
import LeaderBoard from "./LeaderBoard";
import NewQuestion from "./NewQuestion";
import { connect } from "react-redux";
/*import { handleReceiveUsers } from "../actions/users";
import { handleReceiveQuestions } from "../actions/questions";
import { handleSetAuthedUser } from "../actions/authedUser";*/

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <Router>
        <Fragment>
          <Route path="/" exact component={LoginPage} />
          <Route path="/home" component={Dashboard} />
          <Route path="/question/:question_id" component={QuestionPage} />
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
