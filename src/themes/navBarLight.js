import { createTheme } from "@mui/material";

const navBarLight = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderRadius: 3,
            borderColor: "#fff",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: 3,
            borderColor: "#e3d4d9",
          },
        },
      },
    },
  },
});

export default navBarLight;
