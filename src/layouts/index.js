import React from "react"
import DrawerAppBar from "../components/navbar"
import Footer from './footer'
import { Stack } from '@mui/material';
import Divider from '@mui/material/Divider';

const Layout = ({ children }) => {
  return (
    <Stack
      divider={<Divider orientation="horizontal" flexItem />}
      spacing={4}>
        <DrawerAppBar />
        {children}
        <Footer/>
    </Stack>
  )
}

export default Layout