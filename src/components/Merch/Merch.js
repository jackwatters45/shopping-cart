import React from 'react';
import products from '../../assets/data/products';
import ProductPreview from './ProductPreview';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MerchContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Merch = () => (
  <MerchContainer>
    {products.map((product) => (
      <Link to={`/shopping-cart/merch/${product.id}`} key={product.id}>
        <ProductPreview productInfo={product} />
      </Link>
    ))}
  </MerchContainer>
);

export default Merch;
