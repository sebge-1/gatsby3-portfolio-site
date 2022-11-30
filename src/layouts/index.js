import React from "react"
import DrawerAppBar from "../components/navbar"
import Footer from './footer'
import { Stack } from '@mui/material';
import Divider from '@mui/material/Divider';
import Transition from '../components/Transition';


const Layout = ( { children, location }) => {
  return (
      <Stack
        divider={<Divider orientation="horizontal" flexItem />}
        spacing={4}>
        <DrawerAppBar />
        <Transition location={location}>
          {children}
        </Transition>
        <Footer/>
      </Stack>
  )
}

export default Layout