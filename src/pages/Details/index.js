import React, { Component } from "react"
import { Container, Row, Col } from "react-bootstrap"

export class Details extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="details mt-2">
            <h1>Job Details</h1>
          </Col>
        </Row>
      </Container>
    )
  }
}
