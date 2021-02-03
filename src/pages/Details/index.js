import React, { Component } from "react"
import Job from "../../components/Job"
// import { Container, Row, Col } from "react-bootstrap"

export const Details = ({ jobs }) => {
  return (
    <div>
      <h1>Details</h1>{" "}
      <ul className="col-md-4">
        {jobs.map((job, index) => (
          <Job {...job} key={index} />
        ))}
      </ul>
    </div>
  )
}
