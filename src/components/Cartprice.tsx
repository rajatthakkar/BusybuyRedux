import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
const CustomButton = styled(Button)({
    backgroundColor: '#8177e8',  // Set background color to #8177e8
    color: '#ffff',              // Set text color to white
    padding: '10px 20px',        // Custom padding
    borderRadius: '8px',         // Custom border radius
    textTransform: 'none',       // Keeps text in normal case
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Custom shadow
    '&:hover': {
      backgroundColor: '#ffff',  // Hover background color to white
      color: '#8177e8',          // Hover text color to #8177e8
    },
});


function CartPrice() {
  const [price, setPrice] = useState(20000);  // Initial price set to 20000
  const [category, setCategory] = useState('');  // Initial category is empty

//   const handlePriceChange = (event) => {
//     setPrice(event.target.value);  // Update price as slider moves
//   };

//   const handleCategoryChange = (event) => {
//     setCategory(event.target.value);  // Update category when radio button is selected
//   };
 
  return (
    <Box  sx={styles.filterBox}>
      <div style={styles.priceSection}>
        <label style={styles.priceLabel}>Total Price: ₹{price}</label>
      </div> 
        <div style={styles.categorySection}>
        <CustomButton>Purches</CustomButton>    
      </div>
    </Box>
  );
}

const styles = {
  filterBox: {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    width: '300px',
    height:'15rem',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor:'#f0f0fc',
  
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  priceSection: {

    marginBottom: '20px',
  },
  priceLabel: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '10px',
    display: 'block',
  },
  slider: {
    width: '100%',
  },
  categorySection: {
    
    marginTop: '20px',
  },
  categoryTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  radioGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  radioLabel: {
    fontSize: '16px',
    marginBottom: '8px',
    cursor: 'pointer',
  },
};

export default CartPrice;
