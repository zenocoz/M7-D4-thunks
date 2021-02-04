import React, { Component } from "react"
import { Card, Container, Button } from "react-bootstrap"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
  removeFromFavorites: (id) =>
    dispatch({ type: "REMOVE_FROM_FAVORITES", payload: id }),
})

class Favorites extends Component {
  state = {
    favoriteJobs: [],
  }

  filterFavorites = () => {
    const favoriteJobs = this.props.jobsFound.filter(
      (job, i) => job.id === this.props.favorites[i]
    )
    this.setState({ favoriteJobs })
  }

  componentDidMount() {
    this.filterFavorites()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.favorites.length !== this.props.favorites.length) {
      this.filterFavorites()
    }
  }

  render() {
    return (
      <Container>
        {this.state.favoriteJobs.length > 0 ? (
          this.state.favoriteJobs.map((job, index) => (
            <Card key={index} className="mt-3" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={job.company_logo} />
              <Card.Body>
                <Card.Title>{job.company}</Card.Title>
                <Card.Text>{job.title}</Card.Text>
                <Card.Text>{job.type}</Card.Text>
                <Card.Link
                  onClick={() => {
                    this.props.history.push("/details/" + job.id)
                  }}
                >
                  Details
                </Card.Link>
                <Button
                  className="ml-3"
                  variant="danger"
                  onClick={() => {
                    this.props.removeFromFavorites(job.id)
                  }}
                >
                  Remove
                </Button>
              </Card.Body>
            </Card>
          ))
        ) : (
          <h3>You haven't added any favorite jobs yet</h3>
        )}
      </Container>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Favorites))
