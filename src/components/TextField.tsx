import React from 'react';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';

const CustomTextField = styled(TextField)({
  backgroundColor: '#f4f6f8',
  width: '300px', // Custom background color
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#7064e5', // Custom border color
    },
    '&:hover fieldset': {
      borderColor: '#7064e5', // Border color on hover
    },
    '&.Mui-focused fieldset': {
      borderColor: '#7064e5', // Border color when focused
    },
  },
  '& .MuiInputBase-input': {
    color: '#7064e5', // Custom text color
    textAlign: 'left', // Center-aligns the placeholder text
  },
});

function TextFields() {
  return (
    <div>
      <CustomTextField
        placeholder="Custom Text Field" // Adds a placeholder in the middle
        variant="outlined"
      />
    </div>
  );
}

export default TextFields;
