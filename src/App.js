/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Portfolio from "./components/Portfolio"
import Hero from "./components/Hero"
import NavigationBar from "./components/NavigationBar"
import Container from "react-bootstrap/Container"
import React from "react"
import Footer from "./components/Footer"
import memepic from "./images/meme.jpg"
import "./App.css"
import { MyResponsiveScatterPlot, data} from "./components/MyResponsiveScatterPlot"

//<img src={logo} width="30" height="30" className="d-inline-block align-top" alt="React Bootstrap logo"/>


const Homepage = () => {

  const titleText = "Miska's Website"
  const subTitleText = "Welcome! This is a site for showing off my portfolio and hosting random projects"
  const introduction = "The site is work in progress, let me know if you have any feedback"
  const email = "miskanurmi1@gmail.com"

  return(
    <div>
      <NavigationBar text={email}/>
      <Hero title={titleText} subTitle={subTitleText} text={introduction}/>
      <div style={{ height: 400 }}> <MyResponsiveScatterPlot data={data}/> </div>
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
