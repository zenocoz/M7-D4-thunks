import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col } from "react-bootstrap"
import { Route, Link, Switch } from "react-router-dom"
import Home from "./pages/Home"
import { Details } from "./pages/Details"
import JobDetails from "./components/JobDetails"
import "./App.css"

import React, { Component } from "react"

export default class App extends Component {
  state = {
    selectedJob: {},
    jobs: [],
  }

  chooseJob = async (id) => {
    const job = await this.state.jobs.find((job) => job.id === id)
    console.log(job)

    this.setState({
      ...this.state,
      selectedJob: { ...this.state.selectedJob, job },
    })
    console.log(this.state.selectedJob)
  }

  getJobs = (data) => {
    this.setState({ ...this.state, jobs: data })
    console.log(this.state.jobs)
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col className="background-div text-center ml-auto">
              <Link to="/">
                <h1>Jobsearch engine</h1>
              </Link>
            </Col>
            <hr />
            <Container className="mt">
              <Route
                path="/"
                exact
                render={(props) => <Home getJobs={this.getJobs} />}
              />

              <Route
                path="/details"
                exact
                render={(props) => (
                  <Details jobs={this.state.jobs} chooseJob={this.chooseJob} />
                )}
              />

              <Route
                path="/details/:id"
                exact
                render={(props) => <JobDetails job={this.selectedJob} />}
              />

              <Route
                path="/favorites"
                exact
                render={(props) => <Home getJobs={this.getJobs} />}
              />
            </Container>
          </Row>
        </Container>
      </div>
    )
  }
}
