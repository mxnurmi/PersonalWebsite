/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Portfolio from "./components/Portfolio"
import Hero from "./components/Hero"
import NavigationBar from "./components/NavigationBar"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import React from "react"
import Footer from "./components/Footer"
import memepic from "./images/meme.jpg"
import "./App.css"
import { ResponsiveScatterPlot } from '@nivo/scatterplot'

//<img src={logo} width="30" height="30" className="d-inline-block align-top" alt="React Bootstrap logo"/>

const data = [
  {
    "id": "group A",
    "data": [
      {
        "x": 77,
        "y": 96
      },
      {
        "x": 46,
        "y": 29
      },
      {
        "x": 59,
        "y": 27
      },
      {
        "x": 4,
        "y": 31
      },
      {
        "x": 59,
        "y": 61
      },
      {
        "x": 59,
        "y": 19
      },
      {
        "x": 13,
        "y": 38
      },
      {
        "x": 33,
        "y": 69
      },
      {
        "x": 59,
        "y": 66
      },
      {
        "x": 37,
        "y": 14
      },
      {
        "x": 87,
        "y": 56
      },
      {
        "x": 40,
        "y": 117
      },
      {
        "x": 92,
        "y": 58
      },
      {
        "x": 68,
        "y": 30
      },
      {
        "x": 57,
        "y": 87
      },
      {
        "x": 49,
        "y": 106
      },
      {
        "x": 79,
        "y": 80
      },
      {
        "x": 20,
        "y": 54
      },
      {
        "x": 61,
        "y": 41
      },
      {
        "x": 53,
        "y": 104
      },
      {
        "x": 99,
        "y": 38
      },
      {
        "x": 52,
        "y": 53
      },
      {
        "x": 80,
        "y": 44
      },
      {
        "x": 16,
        "y": 120
      },
      {
        "x": 89,
        "y": 57
      },
      {
        "x": 65,
        "y": 45
      },
      {
        "x": 25,
        "y": 106
      },
      {
        "x": 86,
        "y": 83
      },
      {
        "x": 93,
        "y": 14
      },
      {
        "x": 86,
        "y": 51
      },
      {
        "x": 85,
        "y": 4
      },
      {
        "x": 64,
        "y": 35
      },
      {
        "x": 83,
        "y": 47
      },
      {
        "x": 50,
        "y": 79
      },
      {
        "x": 83,
        "y": 15
      },
      {
        "x": 73,
        "y": 103
      },
      {
        "x": 15,
        "y": 33
      },
      {
        "x": 32,
        "y": 53
      },
      {
        "x": 65,
        "y": 65
      },
      {
        "x": 8,
        "y": 86
      },
      {
        "x": 18,
        "y": 54
      },
      {
        "x": 15,
        "y": 88
      },
      {
        "x": 38,
        "y": 27
      },
      {
        "x": 59,
        "y": 95
      },
      {
        "x": 73,
        "y": 7
      },
      {
        "x": 80,
        "y": 99
      },
      {
        "x": 28,
        "y": 22
      },
      {
        "x": 81,
        "y": 0
      },
      {
        "x": 55,
        "y": 106
      },
      {
        "x": 34,
        "y": 40
      }
    ]
  },
  {
    "id": "group B",
    "data": [
      {
        "x": 43,
        "y": 47
      },
      {
        "x": 94,
        "y": 11
      },
      {
        "x": 32,
        "y": 93
      },
      {
        "x": 5,
        "y": 75
      },
      {
        "x": 6,
        "y": 1
      },
      {
        "x": 7,
        "y": 40
      },
      {
        "x": 12,
        "y": 59
      },
      {
        "x": 13,
        "y": 74
      },
      {
        "x": 32,
        "y": 107
      },
      {
        "x": 25,
        "y": 0
      },
      {
        "x": 4,
        "y": 95
      },
      {
        "x": 24,
        "y": 23
      },
      {
        "x": 93,
        "y": 50
      },
      {
        "x": 1,
        "y": 32
      },
      {
        "x": 87,
        "y": 87
      },
      {
        "x": 41,
        "y": 40
      },
      {
        "x": 80,
        "y": 46
      },
      {
        "x": 9,
        "y": 117
      },
      {
        "x": 62,
        "y": 52
      },
      {
        "x": 58,
        "y": 20
      },
      {
        "x": 33,
        "y": 88
      },
      {
        "x": 98,
        "y": 115
      },
      {
        "x": 67,
        "y": 91
      },
      {
        "x": 84,
        "y": 59
      },
      {
        "x": 43,
        "y": 95
      },
      {
        "x": 73,
        "y": 113
      },
      {
        "x": 100,
        "y": 1
      },
      {
        "x": 24,
        "y": 75
      },
      {
        "x": 31,
        "y": 59
      },
      {
        "x": 78,
        "y": 51
      },
      {
        "x": 13,
        "y": 2
      },
      {
        "x": 25,
        "y": 36
      },
      {
        "x": 13,
        "y": 12
      },
      {
        "x": 31,
        "y": 8
      },
      {
        "x": 91,
        "y": 48
      },
      {
        "x": 62,
        "y": 66
      },
      {
        "x": 97,
        "y": 91
      },
      {
        "x": 14,
        "y": 83
      },
      {
        "x": 4,
        "y": 83
      },
      {
        "x": 47,
        "y": 71
      },
      {
        "x": 54,
        "y": 76
      },
      {
        "x": 91,
        "y": 93
      },
      {
        "x": 76,
        "y": 38
      },
      {
        "x": 71,
        "y": 6
      },
      {
        "x": 72,
        "y": 120
      },
      {
        "x": 54,
        "y": 57
      },
      {
        "x": 32,
        "y": 28
      },
      {
        "x": 54,
        "y": 4
      },
      {
        "x": 56,
        "y": 93
      },
      {
        "x": 75,
        "y": 29
      }
    ]
  },
  {
    "id": "group C",
    "data": [
      {
        "x": 83,
        "y": 7
      },
      {
        "x": 71,
        "y": 86
      },
      {
        "x": 43,
        "y": 28
      },
      {
        "x": 84,
        "y": 114
      },
      {
        "x": 83,
        "y": 102
      },
      {
        "x": 62,
        "y": 69
      },
      {
        "x": 61,
        "y": 120
      },
      {
        "x": 61,
        "y": 67
      },
      {
        "x": 33,
        "y": 9
      },
      {
        "x": 54,
        "y": 84
      },
      {
        "x": 72,
        "y": 116
      },
      {
        "x": 0,
        "y": 31
      },
      {
        "x": 72,
        "y": 36
      },
      {
        "x": 17,
        "y": 105
      },
      {
        "x": 40,
        "y": 120
      },
      {
        "x": 78,
        "y": 21
      },
      {
        "x": 82,
        "y": 116
      },
      {
        "x": 84,
        "y": 36
      },
      {
        "x": 82,
        "y": 101
      },
      {
        "x": 9,
        "y": 12
      },
      {
        "x": 73,
        "y": 72
      },
      {
        "x": 19,
        "y": 2
      },
      {
        "x": 19,
        "y": 77
      },
      {
        "x": 73,
        "y": 67
      },
      {
        "x": 87,
        "y": 8
      },
      {
        "x": 98,
        "y": 98
      },
      {
        "x": 0,
        "y": 97
      },
      {
        "x": 9,
        "y": 103
      },
      {
        "x": 29,
        "y": 18
      },
      {
        "x": 85,
        "y": 115
      },
      {
        "x": 90,
        "y": 3
      },
      {
        "x": 3,
        "y": 82
      },
      {
        "x": 17,
        "y": 68
      },
      {
        "x": 69,
        "y": 71
      },
      {
        "x": 86,
        "y": 102
      },
      {
        "x": 97,
        "y": 23
      },
      {
        "x": 59,
        "y": 24
      },
      {
        "x": 6,
        "y": 113
      },
      {
        "x": 34,
        "y": 12
      },
      {
        "x": 85,
        "y": 11
      },
      {
        "x": 61,
        "y": 85
      },
      {
        "x": 7,
        "y": 43
      },
      {
        "x": 70,
        "y": 108
      },
      {
        "x": 10,
        "y": 7
      },
      {
        "x": 71,
        "y": 41
      },
      {
        "x": 0,
        "y": 85
      },
      {
        "x": 99,
        "y": 94
      },
      {
        "x": 27,
        "y": 80
      },
      {
        "x": 20,
        "y": 52
      },
      {
        "x": 64,
        "y": 20
      }
    ]
  },
  {
    "id": "group D",
    "data": [
      {
        "x": 30,
        "y": 61
      },
      {
        "x": 53,
        "y": 72
      },
      {
        "x": 36,
        "y": 117
      },
      {
        "x": 93,
        "y": 120
      },
      {
        "x": 66,
        "y": 91
      },
      {
        "x": 7,
        "y": 4
      },
      {
        "x": 5,
        "y": 76
      },
      {
        "x": 66,
        "y": 73
      },
      {
        "x": 20,
        "y": 79
      },
      {
        "x": 18,
        "y": 84
      },
      {
        "x": 55,
        "y": 64
      },
      {
        "x": 50,
        "y": 12
      },
      {
        "x": 32,
        "y": 60
      },
      {
        "x": 41,
        "y": 36
      },
      {
        "x": 55,
        "y": 52
      },
      {
        "x": 99,
        "y": 96
      },
      {
        "x": 96,
        "y": 61
      },
      {
        "x": 46,
        "y": 41
      },
      {
        "x": 22,
        "y": 63
      },
      {
        "x": 4,
        "y": 91
      },
      {
        "x": 2,
        "y": 78
      },
      {
        "x": 13,
        "y": 51
      },
      {
        "x": 65,
        "y": 67
      },
      {
        "x": 12,
        "y": 98
      },
      {
        "x": 97,
        "y": 27
      },
      {
        "x": 66,
        "y": 109
      },
      {
        "x": 61,
        "y": 91
      },
      {
        "x": 81,
        "y": 79
      },
      {
        "x": 54,
        "y": 0
      },
      {
        "x": 65,
        "y": 1
      },
      {
        "x": 20,
        "y": 1
      },
      {
        "x": 10,
        "y": 100
      },
      {
        "x": 1,
        "y": 95
      },
      {
        "x": 38,
        "y": 110
      },
      {
        "x": 72,
        "y": 100
      },
      {
        "x": 98,
        "y": 39
      },
      {
        "x": 96,
        "y": 15
      },
      {
        "x": 79,
        "y": 80
      },
      {
        "x": 66,
        "y": 80
      },
      {
        "x": 49,
        "y": 76
      },
      {
        "x": 44,
        "y": 78
      },
      {
        "x": 27,
        "y": 49
      },
      {
        "x": 24,
        "y": 19
      },
      {
        "x": 10,
        "y": 27
      },
      {
        "x": 88,
        "y": 52
      },
      {
        "x": 24,
        "y": 87
      },
      {
        "x": 0,
        "y": 72
      },
      {
        "x": 1,
        "y": 67
      },
      {
        "x": 34,
        "y": 99
      },
      {
        "x": 22,
        "y": 108
      }
    ]
  },
  {
    "id": "group E",
    "data": [
      {
        "x": 88,
        "y": 116
      },
      {
        "x": 55,
        "y": 118
      },
      {
        "x": 73,
        "y": 30
      },
      {
        "x": 44,
        "y": 3
      },
      {
        "x": 53,
        "y": 66
      },
      {
        "x": 66,
        "y": 105
      },
      {
        "x": 33,
        "y": 38
      },
      {
        "x": 74,
        "y": 70
      },
      {
        "x": 67,
        "y": 98
      },
      {
        "x": 34,
        "y": 95
      },
      {
        "x": 95,
        "y": 74
      },
      {
        "x": 7,
        "y": 107
      },
      {
        "x": 71,
        "y": 68
      },
      {
        "x": 78,
        "y": 96
      },
      {
        "x": 62,
        "y": 113
      },
      {
        "x": 24,
        "y": 14
      },
      {
        "x": 71,
        "y": 116
      },
      {
        "x": 14,
        "y": 12
      },
      {
        "x": 85,
        "y": 64
      },
      {
        "x": 83,
        "y": 28
      },
      {
        "x": 3,
        "y": 117
      },
      {
        "x": 79,
        "y": 17
      },
      {
        "x": 84,
        "y": 88
      },
      {
        "x": 35,
        "y": 104
      },
      {
        "x": 51,
        "y": 50
      },
      {
        "x": 30,
        "y": 37
      },
      {
        "x": 74,
        "y": 7
      },
      {
        "x": 22,
        "y": 47
      },
      {
        "x": 27,
        "y": 103
      },
      {
        "x": 100,
        "y": 25
      },
      {
        "x": 51,
        "y": 106
      },
      {
        "x": 68,
        "y": 71
      },
      {
        "x": 22,
        "y": 105
      },
      {
        "x": 28,
        "y": 84
      },
      {
        "x": 64,
        "y": 24
      },
      {
        "x": 48,
        "y": 72
      },
      {
        "x": 68,
        "y": 53
      },
      {
        "x": 1,
        "y": 83
      },
      {
        "x": 20,
        "y": 69
      },
      {
        "x": 28,
        "y": 59
      },
      {
        "x": 75,
        "y": 69
      },
      {
        "x": 45,
        "y": 83
      },
      {
        "x": 27,
        "y": 56
      },
      {
        "x": 86,
        "y": 43
      },
      {
        "x": 78,
        "y": 15
      },
      {
        "x": 91,
        "y": 80
      },
      {
        "x": 29,
        "y": 83
      },
      {
        "x": 83,
        "y": 108
      },
      {
        "x": 43,
        "y": 77
      },
      {
        "x": 76,
        "y": 91
      }
    ]
  }
]

const MyResponsiveScatterPlot = ({ data }) => (
  <ResponsiveScatterPlot
    data={data}
    margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
    xScale={{ type: 'linear', min: 0, max: 'auto' }}
    xFormat={function(e){return e+" kg"}}
    yScale={{ type: 'linear', min: 0, max: 'auto' }}
    yFormat={function(e){return e+" cm"}}
    blendMode="multiply"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: 'bottom',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'weight',
      legendPosition: 'middle',
      legendOffset: 46
    }}
    axisLeft={{
      orient: 'left',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'size',
      legendPosition: 'middle',
      legendOffset: -60
    }}
    legends={[
      {
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 130,
        translateY: 0,
        itemWidth: 100,
        itemHeight: 12,
        itemsSpacing: 5,
        itemDirection: 'left-to-right',
        symbolSize: 12,
        symbolShape: 'circle',
        effects: [
          {
            on: 'hover',
            style: {
              itemOpacity: 1
            }
          }
        ]
      }
    ]}
  />
)

const Homepage = () => {

  const titleText = "Miska's Website"
  const subTitleText = "Welcome! This is a site for showing off my portfolio and hosting random projects"
  const introduction = "I'm a cognitive science graduate with UX- and data focused skillset."
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
