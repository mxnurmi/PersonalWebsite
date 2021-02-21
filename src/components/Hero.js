import React from "react"
import Container from "react-bootstrap/Container"
import Jumbotron from "react-bootstrap/Jumbotron"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

const Hero = ({ title, subTitle, text }) => (
  <Jumbotron className="bg-transparent jumbotron-fluid p-0">
    <Container fluid>
      <Row className="justify-content-center py-5">
        <Col md={8}>
          {title && <h1 className=" display-2 font-weight-bolder">{title}</h1>}
          {subTitle && <h3 className="display-4 font-weight-light">{subTitle}</h3>}
        </Col>
      </Row>
      <Row className="justify-content-center py-1">
        <Col md={8}>
          <Button variant="light" href="/portfolio">Portfolio</Button>
          <Button variant="light" href="/projects">Projects</Button>
        </Col>
      </Row>
      <Row className="justify-content-md-center py-4">
        <Col sm={8} md={8} lg={8}>
          {text && <h3 className="text-muted">{text}</h3>}
        </Col>
      </Row>
    </Container>
  </Jumbotron>
)

export default Hero