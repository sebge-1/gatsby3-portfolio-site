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
  Fade,
  useScrollTrigger,
} from "@mui/material";

import { Link } from "gatsby";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ScrollTop from "../ScrollTop";
import Modal from "./Modal.js";
import SearchBar from "./SearchBar";
import SocialLinks from "../SocialLinks";
import { ThemeProvider } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import navBarLight from "../../themes/navBarLight";

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

  const [modalOpen, setModalOpen] = React.useState(false);
  const handleClick = () => setModalOpen(!modalOpen);

  function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      threshold: 300,
    });

    return (
      <Fade appear={false} in={!trigger} timeout={5}>
        {children}
      </Fade>
    );
  }

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h5" sx={{ padding: "1rem" }}>
        Sebastian Gertz
      </Typography>
      <Box
        sx={{
          textAlign: "center",
          margin: "auto",
        }}
      >
        <StaticImage
          src="../../images/avatar.jpeg"
          style={{
            borderRadius: "50%",
            width: "50px",
            height: "50px",
          }}
          alt="Seb Gertz"
        />
        <Box sx={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
          <SocialLinks spacing={2} size="large" />
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "block", sm: "none" },
          textAlign: "center",
          paddingBottom: "1rem",
        }}
      >
        <Button
          sx={{
            display: "inline-block",
            border: "2px solid #F48FB1",
            ":hover": {
              backgroundColor: "#F48FB1",
            },
          }}
          onClick={handleClick}
        >
          Get in touch
        </Button>
      </Box>
      <Divider />

      <List>
        {navItems.map((item, index) => (
          <ListItem key={item.slug} disablePadding>
            <Link to={item.slug} key={index}>
              <ListItemButton className="underline">
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
    <>
      <HideOnScroll {...props}>
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
              <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
                <StaticImage
                  src="../../images/avatar.jpeg"
                  style={{
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    marginRight: "1rem",
                  }}
                  alt="Seb Gertz"
                />
              </Box>
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
              <ThemeProvider theme={navBarLight}>
                <SearchBar postData={props.postData} />
              </ThemeProvider>
              <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
                {navItems.map((item) => (
                  <Link to={item.slug} key={item.slug}>
                    <Button
                      key={item.slug}
                      sx={{ color: "#fff", ml: "1rem", mr: "1rem" }}
                      className="underline"
                    >
                      {item.displayName}
                    </Button>
                  </Link>
                ))}
              </Box>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
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
              </Box>

              <Modal modalOpen={modalOpen} handleClick={handleClick} />
              <IconButton
                edge="end"
                color="inherit"
                aria-label="mode"
                onClick={() => props.themeSetter(!props.darkModeActive)}
                sx={{ ml: "1rem", mr: "1rem" }}
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
          </Box>
        </Box>
      </HideOnScroll>
      <ScrollTop {...props}>
        <Fab size="medium" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}
