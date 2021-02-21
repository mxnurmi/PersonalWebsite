import React from "react"
import { AppBar, Toolbar, Button, Box, Grid, Container } from "@material-ui/core/"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import logo from "../logo.svg"
import speksikuva from "../images/image1.png"

const Linkbar = () => {
  const buttonStyle = {
    background: "primary",
    borderRadius: 3,
    border: 0,
    color: "White",
    fontSize: 20,
    fontWeight: 600,
    height: 48,
    padding: "0 30px",
  }

  return(
    <Box m={2}>
      <AppBar position='static'>
        <Toolbar>
          <Box ml={0} p={1}>
            <img src={logo} alt='logo' width='35' height='30'/>
          </Box>
          <Box ml='auto' mr={0}>
            <LinkedInIcon />
          </Box>
          <Box ml={0} mr={0} >
            <Button style={buttonStyle} size='small'>Portfolio</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

const PortfolioItem = (props) => {

  return(
    <Container maxWidth="xl">
      <Grid container wrap='wrap' direction="row" justify="center" alignItems="center" spacing={2}>
        <Grid item xs={4}>
          {props.item1}
        </Grid>
        <Grid item xs={4}>
          {props.item2}
        </Grid>
      </Grid>
    </Container>
  )
}

const contentimage1 = <img src={speksikuva} alt='speksikuva' width='420' height='900'/>
const text1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere convallis purus, quis ultrices nisi vehicula ac. Duis a porta lectus. Aenean ac auctor libero, vel facilisis nulla. Ut venenatis malesuada quam, nec egestas sapien venenatis in. Donec enim ligula, convallis vitae suscipit vitae, feugiat nec velit. Proin non dictum massa. Pellentesque convallis lacus non risus commodo porta. Sed placerat faucibus arcu eget consequat. Pellentesque sed blandit dui."

const Portfolio = () => (
  <div>
    <Linkbar />
    <PortfolioItem item1={text1} item2={contentimage1}/>
    <PortfolioItem item1={"hello"} item2={text1}/>
  </div>
)

export default Portfolio