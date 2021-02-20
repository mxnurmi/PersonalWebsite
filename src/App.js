import logo from './logo.svg'
//<img src={logo} className="App-logo" alt="logo" />
//import Container from '@material-ui/core/Container'
import { ThemeProvider, AppBar, Toolbar } from '@material-ui/core/'
//import Typography from '@material-ui/core/Typography'
import React from 'react'
import theme from './theme'

const Sitelink = () => {

}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar><img src={logo} alt="logo" width="100" height="100" /></Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}

{/* <Container color="primary">
<div>
  <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
  welcome
</div>
</Container> */}

export default App
