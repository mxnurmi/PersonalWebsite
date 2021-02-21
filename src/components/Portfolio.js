import React from "react"
import NavigationBar from "./NavigationBar"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import picture1 from "../images/image1.png"

const Project = ({ element1, element2 }) => (
  <Container fluid>
    <Row className="justify-content-center py-5">
      <Col md={4} xl={4} sm={1}>
        {element2}
      </Col>
      <Col md={4} xl={4} sm={1}>
        {element1}
      </Col>
    </Row>
  </Container>
)

const Showcase = () => {

  const element2 = <Image src={picture1} alt="Speksi" fluid/>
  const element1 = <h1>{"Penkereen speksi"}</h1>

  //need a gab between the elements

  return(
    <>
      <Project element1={element1} element2={element2}/>
      <Project element1={element2} element2={element1}/>
    </>
  )
}

const Portfolio = () => {
  return(
    <div>
      <NavigationBar />
      <Showcase />
    </div>
  )
}

export default Portfolio