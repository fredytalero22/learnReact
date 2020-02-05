import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: "#0000cc"
    },
    common: {
      white: "white"
    },
    secondary: {
      main: "#cc0000"
    }
  },
  spacing: 10
});

export default theme;
