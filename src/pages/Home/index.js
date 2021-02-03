import React from "react"
import SearchFields from "../../components/SearchFields"
import { BrowserRouter as Router } from "react-router-dom"

const Home = ({ getJobs }) => {
  return (
    <Router>
      <SearchFields getJobs={getJobs} />
    </Router>
  )
}

export default Home
