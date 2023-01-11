module.exports = {
  palette: {
    mode: "light",
    primary: {
      main: "#4b177a",
    },
    secondary: {
      main: "#f48fb1",
    },
    background: {
      default: "#fff",
      paper: "#FAF9F6",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            "radial-gradient(circle, rgba(250,249,246,1) 13%, rgba(241,236,245,1) 66%, rgba(241,236,245,1) 76%, rgba(241,236,245,1) 87%, rgba(241,236,245,1) 94%);",
        },
      },
    },
  },
};
