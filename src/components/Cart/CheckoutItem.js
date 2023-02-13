import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import QuantityInput from '../utils/QuantityInput';
import useQuantity from '../utils/useQuantity';
import { CartContext } from '../../App';

const CheckoutItemContainer = styled.div`
  padding: 20px 15px;
  justify-self: center;
  gap: 20px;
  background-color: rgb(25, 25, 25);
  display: grid;
  grid-template-columns: auto 1fr auto;
  border-top: 1px solid gray;
  align-items: center;
  &:last-child {
    border-bottom: 1px solid gray;
  }
`;

const StyledLink = styled(Link)`
  color: white;
`;

const StyledLinkImg = styled(Link)`
  height: 180px;
`;

const StyledBtn = styled.button`
  border: none;
  background-color: transparent;
  color: white;
  height: 30px;
  width: fit-content;
`;

const CheckoutImg = styled.img`
  height: 180px;
  width: 180px;
  object-fit: cover;
  cursor: pointer;
`;

const ItemInfo = styled.div`
  height: calc(187px - 1rem);
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 10px;
  padding: 0 0 10px 0;
`;

const QuantitySection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CheckoutItem = ({ product }) => {
  const { img, name, quantity: itemQuantity, price, id } = product;
  const total = (price * itemQuantity).toFixed(2);

  const { cart, setCart } = useContext(CartContext);
  const removeFromCart = (id) => setCart(cart.filter((prod) => prod.id !== id));
  const changeQuantity = (value, id) => {
    if (!value) return removeFromCart(id);

    let cartCopy = [...cart];
    const product = cartCopy.find((prod) => prod.id === id);
    product.itemQuantity = value;

    setCart(cartCopy);
  };

  const { quantity, handleChange, increment, decrement } =
    useQuantity(itemQuantity);

  return (
    <CheckoutItemContainer key={id}>
      <StyledLinkImg to={`/merch/${id}`}>
        <CheckoutImg src={img} alt={name} />
      </StyledLinkImg>
      <ItemInfo>
        <StyledLink to={`/merch/${id}`}>
          <div style={{ fontSize: '28px' }}>
            {name} (${price})
          </div>
        </StyledLink>
        <QuantitySection>
          <QuantityInput
            quantity={quantity}
            handleChange={handleChange}
            increment={increment}
            decrement={decrement}
          />
          <StyledBtn
            style={{ marginLeft: '20px' }}
            onClick={() => changeQuantity(quantity, id)}
          >
            Update
          </StyledBtn>
        </QuantitySection>
        <StyledBtn
          style={{ fontSize: '20px' }}
          onClick={() => removeFromCart(id)}
        >
          Remove
        </StyledBtn>
      </ItemInfo>
      <div style={{ fontSize: '24px' }}>Total: ${total}</div>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
