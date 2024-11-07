// File: HelloWorld.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import Link from '@mui/material';
import { Outlet } from 'react-router-dom';
import './style/nav.css'
const Nav = () => {
  return (
    <>
      <Box sx={Style.navBar} >
        <Typography
          variant='h4'
          color='#7469e6'
        >Busy Buy
        </Typography>
        <Box sx={Style.leftBox}>
          <Typography variant='h6'
            color='#7469e6' ><a href='/' style={{textDecoration:'none'}} >Home</a></Typography>
            {/* My order and Cart have to handel when user log in  */}
            <Typography variant='h6'
            color='#7469e6' ><a href='/yourorder' style={{textDecoration:'none'}} >Your Order</a></Typography>
            <Typography variant='h6'
            color='#7469e6' ><a href='/cart' style={{textDecoration:'none'}} >Cart</a></Typography>
          <Typography variant='h6'
            color='#7469e6' ><a href='/logout' style={{textDecoration:'none'}} >Log Out</a></Typography>
        </Box>
      </Box>
      <Outlet/>
    </>
  );
}

export default Nav;
const Style = {
  navBar: {
    width: "inherit",
    height: 100,
    backgroundColor: "white",
    boxShadow: "0 4px 20px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '10rem',//padding have to handle whne user will log in 
    paddingRight: '5rem'
  },
  leftBox: {
    width: '25vw', height: '5rem', paddingLeft: '5rem', display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  }
}