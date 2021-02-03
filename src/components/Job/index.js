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
})

const Job = (props) => {
  return (
    <Card className="mt-3" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.company_logo} />
      <Card.Body>
        <Card.Title>{props.company}</Card.Title>
        <Card.Text>{props.title}</Card.Text>
        <Card.Text>{props.type}</Card.Text>
        <Card.Link
          onClick={() => {
            props.history.push("/details/" + props.id)
          }}
        >
          Details
        </Card.Link>
        <Button
          className="ml-3"
          variant="secondary"
          onClick={() => props.addToFavorites(props.id)}
        >
          Add to Favorites
        </Button>
      </Card.Body>
    </Card>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Job))
