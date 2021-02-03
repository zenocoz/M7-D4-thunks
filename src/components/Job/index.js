import React from "react"
import { Card, Button } from "react-bootstrap"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
  addToFavorites: (id) =>
    dispatch({
      type: "ADD_TO_FAVORITES",
      payload: id,
    }),
  removeFromFavorites: (id) =>
    dispatch({ type: "REMOVE_FROM_FAVORITES", payload: id }),
})

class Job extends React.Component {
  state = {
    isSelected: false,
  }

  toggleSelection = (id) => {
    this.setState({ isSelected: !this.state.isSelected })
    if (!this.state.isSelected) {
      this.props.addToFavorites(id)
    } else {
      this.props.removeFromFavorites(id)
    }
  }
  render() {
    return (
      <Card className="mt-3" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={this.props.company_logo} />
        <Card.Body>
          <Card.Title>{this.props.company}</Card.Title>
          <Card.Text>{this.props.title}</Card.Text>
          <Card.Text>{this.props.type}</Card.Text>
          <Card.Link
            onClick={() => {
              this.props.history.push("/details/" + this.props.id)
            }}
          >
            Details
          </Card.Link>
          <Button
            className="ml-5"
            variant={!this.state.isSelected ? "primary" : "danger"}
            onClick={() => {
              // this.props.addToFavorites(this.props.id)
              this.toggleSelection(this.props.id)
            }}
          >
            {!this.state.isSelected
              ? "Add to Favorites"
              : "Remove from Favorites"}
          </Button>
        </Card.Body>
      </Card>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Job))
