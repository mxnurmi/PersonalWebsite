/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Portfolio from "./components/Portfolio"
import Hero from "./components/Hero"
import NavigationBar from "./components/NavigationBar"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import React, { useState, useEffect }  from "react"
import Footer from "./components/Footer"
import memepic from "./images/meme.jpg"
import { MyResponsiveScatterPlot, CreateData } from "./components/MyResponsiveScatterPlot"

const Homepage = () => {
  const [dataset, setData] = useState([])

  const titleText = "Miska's Website"
  const subTitleText = "Welcome! This is a site for showing off my portfolio and hosting random projects"
  const introduction = "The site is work in progress, let me know if you have any feedback"
  const email = "miskanurmi1@gmail.com"

  useEffect(() => {
    setData(CreateData())
  }, [])

  const refreshData = () => setData(CreateData())

  return(
    <div>
      <NavigationBar text={email}/>
      <Hero title={titleText} subTitle={subTitleText} text={introduction}/>
      <div style={{ height: 400 }}> <MyResponsiveScatterPlot data={dataset}/> </div>
      <Container fluid>
        <Button variant="dark" onClick={refreshData}>Refresh</Button>
      </Container>
      <Footer />
    </div>
  )
}


const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/projects">
            <Container>
              <NavigationBar text={"miskanurmi1@gmail.com"}/>
              <h2>{"This is where I'd put my projects"}</h2>
              <img src={memepic} />
              <h2>{"If I had any"}</h2>
            </Container>
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>

      </Router>
    </div>
  )
}

export default App
