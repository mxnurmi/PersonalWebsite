import logo from './logo.svg'
//<img src={logo} className="App-logo" alt="logo" />
//import Container from '@material-ui/core/Container'
import { ThemeProvider, AppBar, Toolbar, Button, Box, Grid, Paper } from '@material-ui/core/'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

//import Typography from '@material-ui/core/Typography'
import React from 'react'
import theme from './theme'

//we need to load the portfolio images and the text

const Linkbar = () => {
  const buttonStyle = {
    background: 'secondary',
    borderRadius: 3,
    border: 0,
    color: 'Black',
    fontSize: 20,
    fontWeight: 600,
    height: 48,
    padding: '0 30px',
  }

  return(
    <Box m={2}>
      <AppBar position='static'>
        <Toolbar>
          <Box ml={0} p={1}>
            <img src={logo} alt='logo' width='35' height='35'/>
          </Box>
          <Box ml='auto' mr={0}>
            <LinkedInIcon />
          </Box>
          <Box ml={0} mr={0} p={2} >
            <Button style={buttonStyle} size='small' variant='contained' color='secondary'>Test</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

const Portfolio = () => {

  const paperStyle = {
    padding: theme.spacing(4),
    margin: 'auto',
    maxWidth: 500,
  }

  //a portfolio component should have content image fields and then something to decide the order

  return(
    <Grid container spacing={2}>
      <Grid item xs>
        <Paper xs={10} style={paperStyle}>xs</Paper>
      </Grid>
      <Grid item xs>
        <Paper style={paperStyle}>xs</Paper>
      </Grid>
    </Grid>
  )
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Linkbar />
      <Portfolio />
    </ThemeProvider>
  )
}

export default App
