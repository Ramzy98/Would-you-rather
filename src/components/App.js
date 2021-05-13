import React, { Component, Fragment } from "react";
import LoginPage from "./LoginPage"; /**/
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import QuestionPage from "./QuestionPage";
import LeaderBoard from "./LeaderBoard";
import NewQuestion from "./NewQuestion";
import { connect } from "react-redux";
import { handleReceiveUsers } from "../actions/users";
import { handleReceiveQuestions } from "../actions/questions";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleReceiveQuestions());
    this.props.dispatch(handleReceiveUsers());
  }

  render() {
    return (
      <Fragment>
        {!this.props.authedUser ? (
          <LoginPage />
        ) : (
          <Router>
            <div>
              <Route path="/" exact component={Dashboard} />
              <Route path="/questions/:question_id" component={QuestionPage} />
              <Route path="/leaderboard" component={LeaderBoard} />{" "}
              <Route path="/add" component={NewQuestion} />
            </div>{" "}
          </Router>
        )}
      </Fragment>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}
export default connect(mapStateToProps)(App);
