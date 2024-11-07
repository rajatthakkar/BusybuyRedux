import React, { useState } from 'react';

const YourOrder = () => {
  const data = [
    { title: 'Item A', price: 10, quantity: 2, totalPrice: 20 },
    { title: 'Item B', price: 15, quantity: 3, totalPrice: 45 },
    { title: 'Item C', price: 8, quantity: 5, totalPrice: 40 },
  ];

  const tableContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px',
  };

  const tableStyle: React.CSSProperties = {
    width: '80%',
    borderCollapse: 'collapse',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
  };

  const headerCellStyle: React.CSSProperties = {
    backgroundColor: '#8177e8',
    color: '#ffffff',
    padding: '12px 15px',
    textAlign: 'left' as 'left',  // Type assertion for textAlign
    fontWeight: '600',
    fontSize: '1.1em',
  };

  const cellStyle: React.CSSProperties = {
    padding: '10px 15px',
    borderBottom: '1px solid #e0e0e0',
    color: '#333333',
    textAlign: 'left' as 'left',  // Type assertion for textAlign
  };

  const evenRowStyle: React.CSSProperties = {
    backgroundColor: '#f2f2f2',
  };

  const hoverRowStyle: React.CSSProperties = {
    backgroundColor: '#e0e0e0',
  };

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div style={tableContainerStyle}>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={headerCellStyle}>Title</th>
            <th style={headerCellStyle}>Price</th>
            <th style={headerCellStyle}>Quantity</th>
            <th style={headerCellStyle}>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              style={{
                ...cellStyle,
                ...(index % 2 === 0 ? evenRowStyle : {}),
                ...(hoverIndex === index ? hoverRowStyle : {}),
              }}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <td style={cellStyle}>{item.title}</td>
              <td style={cellStyle}>${item.price}</td>
              <td style={cellStyle}>{item.quantity}</td>
              <td style={cellStyle}>${item.totalPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default YourOrder;
