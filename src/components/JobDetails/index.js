import React from "react"
import { Container, Card, Row, Col } from "react-bootstrap"
import { withRouter } from "react-router-dom"

class JobDetails extends React.Component {
  state = {
    job: {},
  }

  findJob = (jobId) => {
    const job = this.props.jobs.find((job) => job.id === jobId)
    this.setState({ job })
  }

  componentDidMount() {
    const jobId = this.props.match.params.id
    this.findJob(jobId)
    console.log(this.props.jobs)
  }

  render() {
    return (
      <Container className="mt-5">
        {" "}
        JOB DETAILS
        <div className="border-top border-dark">
          <h6 className="mt-4" style={{ color: "#abacab" }}>
            {this.state.job.type} / {this.state.job.location}
          </h6>
          <h2>{this.state.job.title}</h2>
        </div>
        <hr />
        <Row className="mt-4">
          <Col md={8}>
            <h4>Job Description</h4>
            <br />
            <div
              className="descriptionP"
              dangerouslySetInnerHTML={{ __html: this.state.job.description }}
            ></div>

            <h4 className="mt-4">How To Apply</h4>
            <p
              dangerouslySetInnerHTML={{ __html: this.state.job.how_to_apply }}
            ></p>
          </Col>
          <Col md={4}>
            <Card style={{ background: "#eeeeee" }}>
              <Card.Img variant="top" src={this.state.job.company_logo} />
              <Card.Body>
                <Card.Title>Company Name: {this.state.job.company}</Card.Title>
                {this.state.job.company_url && (
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={this.state.job.company_url}
                  >
                    {this.state.job.company_url}
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

export default withRouter(JobDetails)
