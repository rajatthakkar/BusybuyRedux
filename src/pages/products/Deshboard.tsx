import React, { useState } from 'react';
import { Box } from '@mui/material';
import FilterBox from '../../components/FilterBox';
import ProductCart from '../../components/ProductCart';
import SearchField from '../../components/SearchField';
import styled from 'styled-components';

const styles = {
  dashboardContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',  // Fixed the typo from 'colum' to 'column'
  },
  sidebar: {
    width: '20%',
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    padding: '20px', // Added padding for better spacing
  },
  mainContent: {
    width: '80%',
    height: '100vh',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    boxShadow: "0px 0px 10px 20px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    padding: '20px', // Added padding for main content
  },
};

const RowBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  // alignItems:'center',

  width: '100%',
  height: '100%',
});

const SideBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '2rem',  // Adjusted padding for better alignment
  paddingRight: '10px',
  position: 'fixed'
});

const CartBox = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  width: '70%',
  marginLeft: '22rem'
  // Added gap for spacing between product cards
});

function Dashboard() {
  return (
    <Box sx={styles.dashboardContainer}>
      <SearchField />
      <RowBox>
        <SideBox>
          <FilterBox />
        </SideBox>
        <CartBox>
          {Array.from({ length: 20 }).map((_, i) => (
            <ProductCart key={i} />
          ))}
        </CartBox>
      </RowBox>
    </Box>
  );
}

export default Dashboard;
