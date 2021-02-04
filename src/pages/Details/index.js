import React from "react"
import Job from "../../components/Job"
import { withRouter } from "react-router-dom"
import { Button } from "react-bootstrap"
import { connect } from "react-redux"

const mapStateToProps = (state) => state

const Details = ({ history, jobsFound }) => {
  const goToFavorites = () => {
    history.push("/favorites")
  }
  return (
    <div>
      <h1>Job List</h1>{" "}
      <Button onClick={() => goToFavorites()}>Go to Favorites</Button>
      <ul className="col-md-4">
        {jobsFound.map((job, index) => (
          <Job {...job} key={index} />
        ))}
      </ul>
    </div>
  )
}

export default connect(mapStateToProps)(withRouter(Details))
