/* eslint-disable no-unused-vars */

import { ThemeProvider, Container, Typography } from '@material-ui/core/'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
//import Portfolio from './components/Portfolio'
import React from 'react'
import theme from './theme'
import './App.css'

//rememeber to add <Portfolio />

const Homepage = () => {

  return(
    <div className="Background">
      <div className="grid">
        <div className="title">Miska</div>
        <div className="links">Links</div>
        <div className="title">Nurmi</div>
        <div className="links">Portfolio</div>

      </div>
    </div>
  )
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Homepage />
    </ThemeProvider>
  )
}

export default App
