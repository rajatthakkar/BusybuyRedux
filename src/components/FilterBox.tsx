import React, { useState } from 'react';

function FilterBox() {
  const [price, setPrice] = useState(20000);  // Initial price set to 20000
  const [category, setCategory] = useState('');  // Initial category is empty

//   const handlePriceChange = (event) => {
//     setPrice(event.target.value);  // Update price as slider moves
//   };

//   const handleCategoryChange = (event) => {
//     setCategory(event.target.value);  // Update category when radio button is selected
//   };

  return (
    <div style={styles.filterBox}>
      <h2 style={styles.title}>Filter</h2>
      
      {/* Price Slider */}
      <div style={styles.priceSection}>
        <label style={styles.priceLabel}>Price: ₹{price}</label>
        <input
          type="range"
          min="1000"
          max="50000"
          value={price}
        //   onChange={handlePriceChange}
          style={styles.slider}
        />
      </div>

      {/* Category Section */}
      <div style={styles.categorySection}>
        <h3 style={styles.categoryTitle}>Category</h3>
        <div style={styles.categoryTitle}>
          <label style={styles.radioLabel}>
            <input
              type="radio"
              value="man_clothing"
              checked={category === 'man_clothing'}
            //   onChange={handleCategoryChange}
            />
            Man Clothing
          </label>
          <label style={styles.radioLabel}>
            <input
              type="radio"
              value="woman_clothing"
              checked={category === 'woman_clothing'}
            //   onChange={handleCategoryChange}
            />
            Woman Clothing
          </label>
          <label style={styles.radioLabel}>
            <input
              type="radio"
              value="jewelry"
              checked={category === 'jewelry'}
            //   onChange={handleCategoryChange}
            />
            Jewelry
          </label>
          <label style={styles.radioLabel}>
            <input
              type="radio"
              value="electronics"
              checked={category === 'electronics'}
            //   onChange={handleCategoryChange}
            />
            Electronics
          </label>
        </div>
      </div>
    </div>
  );
}

const styles = {
  filterBox: {
    width: '300px',
    height:'15rem',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f0f0fc',
  
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

export default FilterBox;
