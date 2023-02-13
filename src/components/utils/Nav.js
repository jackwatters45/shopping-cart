import devito from '../../assets/imgs/devito.png';
import { Link } from 'react-router-dom';
import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import Icon from '@mdi/react';
import { mdiCart } from '@mdi/js';
import PropTypes from 'prop-types';
import { CartContext } from '../../App';

const NavContainer = styled.nav`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 10px 50px 0 50px;
`;

const Title = styled.h1`
  display: flex;
  font-size: 24px;
`;

const FrankIcon = styled.img`
  width: 75px;
`;

const NavPages = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 25px;
  font-size: 20px;
`;

const CartLink = styled(Link)`
  width: fit-content;
  height: 36px;
`;

const CartSize = styled.span`
  position: absolute;
  right: 62px;
  top: 20px;
  color: var(--sunny-yellow-color);
  font-size: 14px;
`;

const Nav = () => {
  const { cart } = useContext(CartContext);
  const [cartSize, setCartSize] = useState();
  useEffect(() => {
    setCartSize(cart.reduce((acc, el) => acc + el.quantity, 0));
  }, [cart]);

  return (
    <NavContainer>
      <Link to="/shopping-cart/">
        <Title>Paddy's Pub</Title>
      </Link>
      <Link to="/shopping-cart/">
        <FrankIcon src={devito} alt="Restaurant Logo" />
      </Link>
      <NavPages>
        <CartLink to="/shopping-cart/cart">
          <Icon path={mdiCart} size={1.5} />
          <CartSize>{cartSize}</CartSize>
        </CartLink>
        <Link to="/shopping-cart/merch">Merch</Link>
        <Link to="/shopping-cart/menu">Menu</Link>
      </NavPages>
    </NavContainer>
  );
};

Nav.propTypes = {
  cartSize: PropTypes.number,
};

export default Nav;
