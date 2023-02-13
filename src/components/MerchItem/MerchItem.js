import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import products from '../../assets/data/products';
import QuantityInput from '../utils/QuantityInput';
import useQuantity from '../utils/useQuantity';
import styled from 'styled-components';
import { CartContext } from '../../App';

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
  width: fit-content;
  justify-self: flex-end;
`;

const QuantitySection = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 50px;
  margin-bottom: 10px;
`;

const AddToCartBtn = styled.button`
  padding: 0px 10px;
  width: fit-content;
  align-self: flex-end;
  color: white;
  background: none;
  border: solid white;
  height: fit-content;
  font-size: 32px;
`;

const Product = styled.div`
  color: white;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 50px;
`;

const MerchItem = () => {
  const { id } = useParams();
  const product = products.find((e) => e.id === id);
  const { name, img, desc, price } = product;

  const { quantity, setQuantity, handleChange, increment, decrement } =
    useQuantity(1);

  const { cart, setCart } = useContext(CartContext);
  const addToCart = () => {
    let cartCopy = [...cart];

    const findOther = cartCopy.find((prod) => prod.id === product.id);

    if (!findOther) setCart([...cart, { ...product, quantity }]);
    else {
      findOther.quantity = findOther.quantity + quantity;
      setCart(cartCopy);
    }
    setQuantity(1);
  };

  return (
    <Product>
      <img src={img} alt={name} style={{ width: '360px' }} />
      <ProductInfo>
        <div style={{ fontSize: '42px' }}>{name}</div>
        <div style={{ fontSize: '32px' }}>${price}</div>
        <div style={{ fontSize: '18px' }}>{desc}</div>
        <QuantitySection>
          <label style={{ fontSize: '22px' }} htmlFor="quantity">
            Quantity:{' '}
          </label>
          <QuantityInput
            quantity={quantity}
            handleChange={handleChange}
            increment={increment}
            decrement={decrement}
          />
        </QuantitySection>
        <AddToCartBtn onClick={addToCart}>Add to cart</AddToCartBtn>
      </ProductInfo>
    </Product>
  );
};

export default MerchItem;
