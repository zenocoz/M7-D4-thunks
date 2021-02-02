import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col } from "react-bootstrap"
import { Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import { Details } from "./pages/Details"
import "./App.css"

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col className="background-div text-center ml-auto">
            <Link to="/">
              <h1>Jobsearch engine</h1>
            </Link>
          </Col>
          <hr />
          <Container className="mt">
            <Route path="/" exact component={Home} />

            <Route path="/details" exact component={Details} />
          </Container>
        </Row>
      </Container>
    </div>
  )
}

export default App
