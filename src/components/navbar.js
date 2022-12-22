import * as React from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  Fab,
  TextField,
  Autocomplete,
} from "@mui/material";

import { Link } from "gatsby";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ScrollTop from "./ScrollTop";
import Modal from "./Modal.js";

const drawerWidth = 240;
const navItems = [
  { displayName: "Home", slug: "/" },
  { displayName: "Blog", slug: "/blog" },
];

export default function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [open, setOpen] = React.useState(false);
  const handleClick = () => setOpen(!open);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Sebastian Gertz
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={item.slug} disablePadding>
            <Link to={`$item.slug`} key={index}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.displayName} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const icon = !props.darkModeActive ? <WbSunnyIcon /> : <ModeNightIcon />;
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} id="back-to-top-anchor">
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "none", md: "block" },
            }}
          >
            Sebastian Gertz
          </Typography>

          <Autocomplete
            freeSolo
            sx={{ width: 200, marginLeft: "auto" }}
            disableClearable
            options={[1, 1, 1].map((num) => num)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search input"
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
              />
            )}
          />
          <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            {navItems.map((item) => (
              <Link to={item.slug} key={item.slug}>
                <Button key={item.slug} sx={{ color: "#fff" }}>
                  {item.displayName}
                </Button>
              </Link>
            ))}
            <Button
              sx={{
                display: "inline-block",

                color: "#fff",
                border: "2px solid #F48FB1",
                ":hover": {
                  backgroundColor: "#F48FB1",
                },
              }}
              onClick={handleClick}
            >
              Get in touch
            </Button>
            <Modal open={open} handleClick={handleClick} />
          </Box>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="mode"
            onClick={() => props.themeSetter(!props.darkModeActive)}
          >
            {icon}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <ScrollTop {...props}>
          <Fab size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </Box>
    </Box>
  );
}
