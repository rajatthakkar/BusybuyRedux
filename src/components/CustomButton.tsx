import React from 'react';
import { styled } from '@mui/material/styles';
import Button ,{ButtonProps}from '@mui/material/Button';

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#6200ea',  // Custom background color
  color: '#fff',               // Custom text color
  padding: '10px 20px',        // Custom padding
  borderRadius: '8px',         // Custom border radius
  textTransform: 'none',       // Keeps text in normal case
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Custom shadow
  '&:hover': {
    backgroundColor: '#3700b3', // Hover effect
  },
}));

export default function CusttomButton(props: ButtonProps) {
  return (
    <CustomButton {...props} variant="contained">
      Custom Button
    </CustomButton>
  );
}
