import React from "react"
import Job from "../../components/Job"

export const Details = ({ jobs, chooseJob }) => {
  return (
    <div>
      <h1>Details</h1>{" "}
      <ul className="col-md-4">
        {jobs.map((job, index) => (
          <Job {...job} key={index} chooseJob={chooseJob} />
        ))}
      </ul>
    </div>
  )
}
