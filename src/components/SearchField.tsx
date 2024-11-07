import React from 'react'
import styled from 'styled-components'

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height:3.5rem;
  max-width: 500px; /* You can adjust this based on your design */
  margin: 20px auto;
`;
const SearchInput = styled.input`
  width: 100%;
  height:100%;
  padding: 10px 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 10px;
  outline: none;
  transition: border-color 0.3s ease;
  background-color:#f4f6f8;
  &:focus {
    border-color: #8177e8;
  }
  ::placeholder {
    color: #aaa;
  }
`;

function SearchField() {
  return (
    <SearchContainer>
    <SearchInput
      type="text"
      placeholder="Search By Name"
    />
  </SearchContainer>   
)
}

export default SearchField
