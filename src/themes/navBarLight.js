import { createTheme } from "@mui/material";

const navBarLight = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderRadius: 3,
            borderColor: "#FDECF2",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: 3,
            borderColor: "#F48FB1",
          },
        },
      },
    },
  },
});

export default navBarLight;
