import React from 'react';
import styled from 'styled-components';

const Product = styled.div`
  width: 350px;
  padding: 25px;
  color: white;
  margin: 10px;
  display: flex;
  flex-direction: column;
  font-size: 24px;
`;

const ProductImg = styled.img`
  height: 300px;
  width: 300px;
  object-fit: cover;
  box-shadow: 5px 10px 25px rgba(0, 0, 0, 0.5);
`;

const NamePriceRow = styled.div`
  margin: 5px 0;
  display: grid;
  grid-template-columns: 1fr auto;
`;

const ProductPreview = ({ productInfo }) => {
  const { name, price, img, desc } = productInfo;

  const getTrimmedDesc = () => {
    if (!desc) return;
    const wordArr = desc.split(' ');

    return wordArr.length < 16
      ? wordArr.join(' ')
      : wordArr.slice(0, 15).join(' ') + '...';
  };

  return (
    <Product>
      <ProductImg className="productImg shadow" src={img} alt={name} />
      <NamePriceRow>
        <div className="name">{name}</div>
        <div className="price">${price}</div>
      </NamePriceRow>
      <div className="description">{getTrimmedDesc()}</div>
    </Product>
  );
};

export default ProductPreview;
