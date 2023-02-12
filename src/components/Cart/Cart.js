import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CheckoutItem from './CheckoutItem';
import styled from 'styled-components';
import discountCodes from '../../assets/data/discountCodes';
import Icon from '@mdi/react';
import { mdiSale } from '@mdi/js';

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  margin: 0 auto;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 20px;
`;

const CartHeader = styled.h1`
  align-self: start;
  margin-top: 10px;
`;

const CartProductsContainer = styled.div`
  width: 100%;
`;

const MoneyTotals = styled.div`
  margin: 20px 0;
  gap: 5px;
  width: auto;
  align-self: flex-end;
  align-items: flex-end;
  display: flex;
  flex-direction: column;
`;

const DiscountSection = styled.form`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  background-color: transparent;
  border: solid white;
  color: white;
`;

const DiscountInput = styled(Input)`
  height: 30px;
  font-size: 16px;
`;

const SubmitBtn = styled(Input)`
  padding: 4px;
  font-size: 18px;
  cursor: pointer;
`;

const CheckoutBtn = styled.input`
  margin-top: 20px;
  padding: 4px;
  font-size: 24px;
  background-color: white;
  border: solid black;
  color: black;
  cursor: pointer;
`;

const DiscountSummary = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const DiscountLabel = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
  background-color: white;
  color: black;
  padding: 1px 4px 0px 2px;
  border-radius: 4px;
  font-size: 16px;
`;

const EmptyCart = styled.div`
  font-size: 32px;
  & a {
    color: white;
  }
`;

const Cart = ({ cart, removeFromCart, changeQuantity }) => {
  const [subtotal, setSubtotal] = useState(0);
  useEffect(
    () =>
      setSubtotal(
        cart.reduce((acc, el) => acc + el.price * el.quantity, 0).toFixed(2),
      ),
    [cart],
  );

  const [discountInput, setDiscountInput] = useState();
  const [discountCode, setDiscountCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const handleChangeDiscountInput = (e) => setDiscountInput(e.target.value);
  const handleSubmitDiscountCode = (e) => {
    e.preventDefault();
    setDiscountInput('');
    const coupon = discountCodes.find(
      (discount) => discount.code === discountInput,
    );
    if (!coupon) return;

    setDiscountCode(coupon.code);

    if (coupon.type === 'flatRate') setDiscount(coupon.discount);
    const percentageDiscount = ((coupon.discount * subtotal) / 100).toFixed(2);
    setDiscount(percentageDiscount);
  };

  const [total, setTotal] = useState(subtotal);
  useEffect(() => {
    setTotal(subtotal - discount);
  }, [subtotal, discount]);

  return cart.length ? (
    <CartContainer>
      <CartHeader>Cart</CartHeader>
      <CartProductsContainer>
        {cart.map((product) => (
          <CheckoutItem
            product={product}
            removeFromCart={removeFromCart}
            changeQuantity={changeQuantity}
          />
        ))}
      </CartProductsContainer>
      <MoneyTotals>
        <DiscountSection onSubmit={handleSubmitDiscountCode}>
          <label style={{ fontSize: '20px' }} htmlFor="discountInput">
            Enter Discount Code Here
          </label>
          <DiscountInput
            id="discountInput"
            value={discountInput}
            onChange={handleChangeDiscountInput}
          />
          <SubmitBtn type="submit" />
        </DiscountSection>
        <div>Subtotal: ${subtotal}</div>
        <DiscountSummary>
          {discountCode && (
            <DiscountLabel>
              <Icon path={mdiSale} size={0.7} />
              <div>{discountCode}</div>
            </DiscountLabel>
          )}
          <div>Discount: ${discount}</div>
        </DiscountSummary>
        <div>Total: ${total}</div>
        <CheckoutBtn value="Checkout" type="submit" />
      </MoneyTotals>
    </CartContainer>
  ) : (
    <EmptyCart>
      <Link to="/merch">
        <p> Your Cart is Empty.</p>
        <div>Click here to continue shopping.</div>
      </Link>
    </EmptyCart>
  );
};

export default Cart;
