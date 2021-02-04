import React from "react"
import { Container, Card, Row, Col } from "react-bootstrap"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"

const mapStateToProps = (state) => state

class JobDetails extends React.Component {
  render() {
    const jobId = this.props.match.params.id
    const job = this.props.jobsFound.find((job) => job.id === jobId)
    return (
      <Container className="mt-5">
        {" "}
        JOB DETAILS
        <div className="border-top border-dark">
          <h6 className="mt-4" style={{ color: "#abacab" }}>
            {job.type} / {job.location}
          </h6>
          <h2>{job.title}</h2>
        </div>
        <hr />
        <Row className="mt-4">
          <Col md={8}>
            <h4>Job Description</h4>
            <br />
            <div
              className="descriptionP"
              dangerouslySetInnerHTML={{ __html: job.description }}
            ></div>

            <h4 className="mt-4">How To Apply</h4>
            <p dangerouslySetInnerHTML={{ __html: job.how_to_apply }}></p>
          </Col>
          <Col md={4}>
            <Card style={{ background: "#eeeeee" }}>
              <Card.Img variant="top" src={job.company_logo} />
              <Card.Body>
                <Card.Title>Company Name: {job.company}</Card.Title>
                {job.company_url && (
                  <a target="_blank" rel="noreferrer" href={job.company_url}>
                    {job.company_url}
                  </a>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default connect(mapStateToProps)(withRouter(JobDetails))
