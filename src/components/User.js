import React, { Component } from "react";
import { Card, Image, Badge, Container, Row, Col } from "react-bootstrap";
import { GiPodiumWinner, GiPodiumSecond, GiPodiumThird } from "react-icons/gi";
import { FaAward } from "react-icons/fa";

export default class user extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Card style={{ margin: "auto", width: "50%" }}>
              <div style={{ float: "left" }}>
                <Card.Header>
                  {this.props.index === 0 ? (
                    <GiPodiumWinner size={"5%"} />
                  ) : this.props.index === 1 ? (
                    <GiPodiumSecond size={"5%"} />
                  ) : this.props.index === 2 ? (
                    <GiPodiumThird size={"5%"} />
                  ) : (
                    <FaAward size={"16%"} />
                  )}{" "}
                  {this.props.user.name}
                </Card.Header>
                <Image
                  style={{
                    width: "15%",
                    pointerEvents: "none",
                    float: "left",
                    postion: "inherit",
                  }}
                  size="xs"
                  src={this.props.user.avatarURL}
                  roundedCircle
                />
                <hr
                  style={{
                    borderLeft: "1px solid hsla(100, 10%, 50%,10)",
                    height: "6rem",
                    width: "1px",
                    float: "left",
                  }}
                />{" "}
                <Col style={{ textAlign: "center" }}>
                  <div
                    style={{
                      paddingTop: "1%",
                      paddingBottom: "1%",
                    }}
                  >
                    <Card
                      style={{
                        float: "right",
                        width: "14%",
                      }}
                    >
                      <div>
                        <h6 style={{ paddingTop: "4%" }}>Score</h6>
                        <hr />
                        <Badge
                          style={{ float: "top", fontSize: "100%" }}
                          pill
                          variant="info"
                        >
                          {Object.keys(this.props.user.answers).length +
                            Object.keys(this.props.user.questions).length}
                        </Badge>
                      </div>
                    </Card>
                  </div>
                  <h6>
                    {" "}
                    <br />
                    Answered Questions
                    <span
                      style={{ display: "inline-block", width: "20%" }}
                    ></span>
                    {Object.keys(this.props.user.answers).length}
                    <br /> <br />
                    Asked questions{" "}
                    <span
                      style={{ display: "inline-block", width: "25%" }}
                    ></span>
                    {Object.keys(this.props.user.questions).length}
                  </h6>{" "}
                </Col>{" "}
              </div>
            </Card>{" "}
          </Row>
        </Container>
      </div>
    );
  }
}
