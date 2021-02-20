import { createMuiTheme }  from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: { 500: '#17096c' },
    secondary: { main: '#8cbf32' },
  },
  margin: 10,
  //spacing: [0, 4, 8, 16, 32, 64],
})

export default theme