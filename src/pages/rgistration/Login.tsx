import React from 'react'
import TextField from '../../components/TextField'
import CusttomButton from '../../components/CustomButton';
import { Box, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

function Login() {
  return (
    <Box sx={{height:'100vh',width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Box sx={{height:'50vh',width:'30rem', display:'flex',flexDirection:'column',justifyContent:'space-evenly'}}>
            <Typography variant='h3' fontFamily={"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"} fontWeight={"bold"} color='#224957'>Sign In</Typography>
             <Stack spacing={2} >
             <TextField/>
            <TextField/>
             <CusttomButton sx={{ width: 300 }}  />
             <Typography  variant='h6' 
             fontFamily={"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"}
              fontWeight={"bold"} color='#224957'>Or SignUp instead</Typography>
             </Stack>
        </Box>
    </Box>
  )
}

export default Login
