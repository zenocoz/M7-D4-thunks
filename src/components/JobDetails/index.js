import React from "react"
import { Container, Card, Row, Col } from "react-bootstrap"

const JobDetails = (props) => {
  return (
    <Container className="mt-5">
      <div className="border-top border-dark">
        <h6 className="mt-4" style={{ color: "#abacab" }}>
          {props.job.type} / {props.job.location}
        </h6>
        <h2>{props.job.title}</h2>
      </div>
      <hr />
      <Row className="mt-4">
        <Col md={8}>
          <h4>Job Description</h4>
          <br />
          <div
            className="descriptionP"
            dangerouslySetInnerHTML={{ __html: props.job.description }}
          ></div>

          <h4 className="mt-4">How To Apply</h4>
          <p dangerouslySetInnerHTML={{ __html: props.job.how_to_apply }}></p>
        </Col>
        <Col md={4}>
          <Card style={{ background: "#eeeeee" }}>
            <Card.Img variant="top" src={props.job.company_logo} />
            <Card.Body>
              <Card.Title>Company Name: {props.job.company}</Card.Title>
              {props.job.company_url && (
                <a target="_blank" href={props.job.company_url}>
                  {props.job.company_url}
                </a>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default JobDetails
