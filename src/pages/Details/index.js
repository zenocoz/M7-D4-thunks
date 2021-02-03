import React from "react"
import Job from "../../components/Job"
import { withRouter } from "react-router-dom"
import { Button } from "react-bootstrap"

const Details = ({ jobs, chooseJob, history }) => {
  const goToFavorites = () => {
    history.push("/favorites")
  }
  return (
    <div>
      <h1>Job List</h1>{" "}
      <Button onClick={() => goToFavorites()}>Go to Favorites</Button>
      <ul className="col-md-4">
        {jobs.map((job, index) => (
          <Job {...job} key={index} chooseJob={chooseJob} />
        ))}
      </ul>
    </div>
  )
}

export default withRouter(Details)
