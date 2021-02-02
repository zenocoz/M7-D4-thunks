import React, { Component } from "react"
import { Form, Button } from "react-bootstrap"

export default class SearchFields extends Component {
  state = {
    jobs: [],
    position: { description: " ", location: " " },
  }

  handleChange = (e) => {
    this.setState({
      position: { ...this.state.position, [e.target.name]: e.target.value },
    })
  }

  submitSearch = async (e) => {
    e.preventDefault()
    console.log("OK")
    let response = await fetch(
      `https://fede-observablehq.herokuapp.com/https://jobs.github.com/positions.json?description=frontend&location=berlin`
    )
    let data = await response.json()
    console.log(data)
  }

  //   componentDidMount = async () => {
  //     let response = await fetch(
  //       `https://fede-observablehq.herokuapp.com/https://jobs.github.com/positions.json?description=frontend&location=berlin`
  //     )
  //     let data = await response.json()
  //     console.log(data)
  //   }

  render() {
    return (
      <div className="search-fields mt-5">
        <Form
          className="d-flex flex-row justify-content-between"
          onSubmit={this.submitSearch}
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

          <Button className="m" variant="primary" type="submit">
            Find Jobs
          </Button>
        </Form>
      </div>
    )
  }
}
