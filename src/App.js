import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Avatar from "./components/Avatar";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Details from "./components/Details";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="cv">
        <Row>
          <Col lg={4}>
            <Avatar />
          </Col>
          <Col lg={8}>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col lg={3}>
            <Sidebar />
          </Col>
          <Col lg={9}>
            <Details />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
