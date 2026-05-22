import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const muiTheme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: { main: "#417ee3" },
      success: { main: "#74C05A", contrastText: "#ffffff" },
    },
    shape: {
      borderRadius: 4,
    },
    typography: {
      fontFamily: 'var(--font-poppins), "Poppins", "Roboto", sans-serif',
      fontSize: 11,
      h1: { fontSize: "2.125rem" },
      h2: { fontSize: "1.8125rem" },
      h3: { fontSize: "1.5625rem" },
      h4: { fontSize: "1.3125rem" },
      h5: { fontSize: "1.1875rem" },
      h6: { fontSize: "1.0625rem" },
      body1: { fontSize: "0.80125rem" },
      body2: { fontSize: "0.70875rem" },
      button: { fontSize: "0.74125rem" },
      caption: { fontSize: "0.6625rem" },
      overline: { fontSize: "0.6625rem" },
    },
    components: {
      MuiPaper: {
        defaultProps: { elevation: 0 },
        styleOverrides: {
          outlined: { borderRadius: 4 },
          elevation: { borderRadius: 4 },
        },
      },
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          root: { textTransform: "none" },
          containedSuccess: { color: "#ffffff" },
        },
      },
      MuiTextField: {
        defaultProps: { size: "small", fullWidth: true },
      },
    },
  }),
);
