import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const muiTheme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: { main: "#417ee3", dark: "#2f5fb8", light: "#6b9aed" },
      success: { main: "#74C05A", dark: "#5a9f4a", contrastText: "#ffffff" },
      text: {
        primary: "#101828",
        secondary: "#475467",
      },
      divider: "#e4e7ec",
      background: {
        default: "#ffffff",
        paper: "#ffffff",
      },
      grey: {
        50: "#f9fafb",
        100: "#f2f4f7",
        200: "#e4e7ec",
      },
    },
    shape: {
      borderRadius: 8,
    },
    typography: {
      fontFamily: 'var(--font-poppins), "Poppins", system-ui, sans-serif',
      fontSize: 14,
      h1: {
        fontSize: "clamp(2rem, 4vw, 2.75rem)",
        fontWeight: 500,
        letterSpacing: "-0.03em",
        lineHeight: 1.15,
      },
      h2: {
        fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
        fontWeight: 500,
        letterSpacing: "-0.02em",
        lineHeight: 1.25,
      },
      h3: { fontSize: "1.375rem", fontWeight: 500, letterSpacing: "-0.01em" },
      h4: { fontSize: "1.125rem", fontWeight: 500 },
      h5: { fontSize: "1rem", fontWeight: 500 },
      h6: { fontSize: "0.9375rem", fontWeight: 500 },
      body1: { fontSize: "1rem", fontWeight: 400, lineHeight: 1.65 },
      body2: { fontSize: "0.875rem", fontWeight: 400, lineHeight: 1.6 },
      subtitle1: { fontSize: "1.0625rem", fontWeight: 500, lineHeight: 1.4 },
      subtitle2: { fontSize: "0.9375rem", fontWeight: 500 },
      overline: {
        fontSize: "0.75rem",
        fontWeight: 500,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        lineHeight: 1.4,
      },
      button: { fontSize: "0.9375rem", fontWeight: 500 },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            WebkitFontSmoothing: "auto",
            MozOsxFontSmoothing: "auto",
          },
          strong: { fontWeight: 600 },
          b: { fontWeight: 600 },
        },
      },
      MuiPaper: {
        defaultProps: { elevation: 0 },
        styleOverrides: {
          root: { backgroundImage: "none" },
          outlined: {
            borderRadius: 12,
            borderColor: "#e4e7ec",
          },
        },
      },
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          root: ({ theme }) => ({
            textTransform: "none",
            borderRadius: 8,
            fontWeight: 500,
            paddingLeft: 16,
            paddingRight: 16,
            [theme.breakpoints.up("sm")]: {
              paddingLeft: 20,
              paddingRight: 20,
            },
          }),
          sizeMedium: ({ theme }) => ({
            [theme.breakpoints.down("sm")]: {
              minHeight: 40,
              height: 40,
              maxHeight: 40,
              padding: "8px 16px",
              fontSize: "0.9375rem",
              lineHeight: 1.25,
            },
          }),
          sizeLarge: ({ theme }) => ({
            [theme.breakpoints.down("sm")]: {
              minHeight: 40,
              height: 40,
              maxHeight: 40,
              padding: "8px 16px",
              fontSize: "0.9375rem",
              lineHeight: 1.25,
            },
          }),
          containedPrimary: {
            "&:hover": { backgroundColor: "#2f5fb8" },
          },
          containedSuccess: {
            color: "#ffffff",
            "&:hover": { backgroundColor: "#5a9f4a" },
          },
          outlined: {
            borderColor: "#d0d5dd",
            "&:hover": {
              borderColor: "#417ee3",
              backgroundColor: "#eff4ff",
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: { fontWeight: 500 },
          outlined: {
            borderColor: "#d0d5dd",
            backgroundColor: "#f9fafb",
          },
        },
      },
      MuiTextField: {
        defaultProps: { size: "small", fullWidth: true },
      },
    },
  }),
);
