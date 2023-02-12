import Icon from '@mdi/react';
import { mdiPlus, mdiMinus } from '@mdi/js';
import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  font-size: 24px;
  width: 48px;
  height: 2rem;
  border: 1px solid #e6dcd2;
  text-align: center;
  justify-self: center;
  background: none;
  border: none;
  outline: none;
  color: white;
`;

const Quantity = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 24px);
  gap: 5px;
  align-items: center;
`;

const QuantityInput = ({
  quantity,
  handleChange,
  increment,
  decrement,
}) => (
  <Quantity>
    <Icon onClick={decrement} path={mdiMinus} size={1} />
    <Input id="quantity" value={quantity} onChange={handleChange} />
    <Icon onClick={increment} path={mdiPlus} size={1} />
  </Quantity>
);

export default QuantityInput;
