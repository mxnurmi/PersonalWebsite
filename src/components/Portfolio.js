/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import NavigationBar from "./NavigationBar"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import projectService from "../services/projects"

//images only work from imports...?! Workaround:
import picture2 from "../images/speksi.png"
import picture1 from "../images/uusilastensairaala_main.jpg"
import picture4 from "../images/redi_usergroups.png"
import picture3 from "../images/interactive.png"
const pictures = [picture1, picture2, picture3, picture4]

const Project = ({ number, text }) => {
  return (
    <Container fluid>
      <Row className="justify-content-center py-5">
        <Col md={4} xl={4} sm={1}>
          {number && <Image src={pictures[number]} fluid/>}
        </Col>
        <Col md={4} xl={4} sm={1}>
          {text}
        </Col>
      </Row>
    </Container>
  )}

const Showcase = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    projectService
      .getAll()
      .then(fetchedProjects => setProjects(fetchedProjects))
  }, [])

  const projectTexts = projects.map(project =>
    <div key={project["id"]}>
      <h5>{project["title"]}</h5>
      <h6>Task</h6>
      <p>{project["task"]}</p>
      <h6>Methods</h6>
      <p>{project["methods"]}</p>
      <h6>Results</h6>
      <p>{project["results"]}</p>
    </div>
  )

  return(
    projectTexts.map(el =>
      <Project key={el.key} number={[el.key - 1]} text={el}/>
    )
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