import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import NavBar from "./NavBar";
import { handleReceiveQuestions } from "../actions/questions";
import Question from "./Question";
import QNav from "./QNav";
import { Card } from "react-bootstrap";

class Dashboard extends Component {
  componentDidMount() {
    document.title = "Home";
    this.props.dispatch(handleReceiveQuestions());
    this.forceUpdate();
  }
  render() {
    return (
      <div>
        <NavBar />
        {this.props.Loading ? (
          <div>
            <h3
              style={{
                textAlign: "center",
                position: "absolute",
                top: "50%",
                width: "100%",
                color: "#1E90FF",
              }}
            >
              Loading{" "}
              <FontAwesomeIcon icon={faCircleNotch} spin color="DodgerBlue" />
            </h3>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              paddingTop: "1rem",
              justifyContent: "center",
            }}
          >
            <Card style={{ width: "30rem" }}>
              <Card.Header>
                {" "}
                <QNav />
              </Card.Header>
              <Card.Body>
                {Object.keys(this.props.questions).map((id) => (
                  <ul key={id}>
                    <Question id={id} />
                  </ul>
                ))}
              </Card.Body>
            </Card>
          </div>
        )}
      </div>
    );
  }
}
function mapStateToProps({ questions, loadingBar }) {
  return { Loading: loadingBar.default === 0 ? false : true, questions };
}
export default connect(mapStateToProps)(Dashboard);
