import zIndex from '@mui/material/styles/zIndex';
import React from 'react';

function ProductCart() {
  return (
    <div className="product-card" style={styles.card}>
      <img 
        src="https://via.placeholder.com/150" 
        alt="Product" 
         style={ {
            width: '100%',
            height: '150px',
            objectFit: 'cover',
          }}
      />
      <div style={styles.details}>
        <h3 style={styles.productName}>Product Name</h3>
        <p style={styles.productDescription}>This is a description of the product. It explains what the product is about.</p>
        <p style={styles.productPrice}>$49.99</p>
      </div>
      <button style={styles.addToCartButton}>Add to Cart</button>
    </div>
  );
}

const styles = {
  card: {
    width: '300px',
    height:'22rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    backgroundColor: '#fff',
     paddingLeft:'0.5rem',
     paddingRight:'0.5rem',
     margin:'0.5rem',
  },
  details: {
    padding: '15px',
  },
  productName: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '0 0 10px 0',
  },
  productDescription: {
    fontSize: '14px',
    color: '#555',
    margin: '0 0 10px 0',
  },
  productPrice: {
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '0 0 15px 0',
  },
  addToCartButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#8177e8',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    marginBottom:'1rem'
  }
};

export default ProductCart;
