import React, { Component } from "react"
import { Form, Button } from "react-bootstrap"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
  submitSearchThunk: (position) =>
    dispatch(async (dispatch, getState) => {
      const response = await fetch(
        `https://fede-observablehq.herokuapp.com/https://jobs.github.com/positions.json?description=${position.description}&location=${position.location}`
      )
      const data = await response.json()
      console.log(data)
      if (response.ok) {
        dispatch({
          type: "GET_JOBS",
          payload: data,
        })
      } else {
        console.log("ERROR")
      }
    }),
})

class SearchFields extends Component {
  state = {
    position: { description: " ", location: " " },
  }

  handleChange = (e) => {
    this.setState({
      position: { ...this.state.position, [e.target.name]: e.target.value },
    })
  }

  // submitSearch = async () => {
  //   console.log("OK")
  //   // e.preventDefault()
  //   let response = await fetch(
  //     `https://fede-observablehq.herokuapp.com/https://jobs.github.com/positions.json?description=${this.state.position.description}&location=${this.state.position.location}`
  //   )
  //   if (response.ok) {
  //     let data = await response.json()
  //     this.props.getJobs(data)
  //     this.setState({ position: { description: " ", location: " " } })
  //   }
  // }

  render() {
    return (
      <div className="search-fields mt-5">
        <Form
          className="d-flex flex-row justify-content-between"
          // onSubmit={this.submitSearch}
        >
          <Form.Group>
            <Form.Label>What</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the job description"
              name="description"
              value={this.state.position.description}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Where</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the location"
              name="location"
              value={this.state.position.location}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Button
            className="m"
            variant="primary"
            onClick={() => {
              this.props.submitSearchThunk(this.state.position)
              this.props.history.push("/details")
            }}
          >
            Find Jobs
          </Button>
        </Form>

        {/* {this.state.jobs.length > 0 && <Details jobs={this.state.jobs} />} */}
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchFields))
