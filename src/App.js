import logo from "./logo.svg"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col } from "react-bootstrap"
import "./App.css"

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col className="background-div text-center ml-auto">
            <h1>Jobsearch engine</h1>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
