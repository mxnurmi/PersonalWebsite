import React from "react"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import linkedlogo from "../linkedin.svg"

const NavigationBar = ({ text }) => {

  return (
    <Container className="p-0" fluid={true}>
      <Navbar className="border-bottom" bg="transparent">
        <Navbar.Brand href="home">MN</Navbar.Brand>
        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
        <Navbar.Collapse id="navbar-toggle">
          <Nav className="ml-auto">
            <Container className="p-1">
              {text}
              <Nav.Link href="https://www.linkedin.com/in/miska-nurmi/"><img src={linkedlogo} width="20" height="18" /> </Nav.Link>
            </Container>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  )}

export default NavigationBar