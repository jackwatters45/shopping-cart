import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/utils/Footer';
import Nav from './components/utils/Nav';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import Merch from './components/Merch/Merch';
import MerchItem from './components/MerchItem/MerchItem';
import { useEffect, useState } from 'react';
import Menu from './components/Menu/Menu';
import styled from 'styled-components';
import paddysPub from './assets/imgs/paddys-pub.jpeg';

const AppContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

const MainContentContainer = styled.div`
  padding: 50px 100px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${paddysPub});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const App = () => {
  const [cart, setCart] = useState([]);
  const removeFromCart = (id) => setCart(cart.filter((prod) => prod.id !== id));
  const addToCart = (product) => {
    let cartCopy = [...cart];

    const findOther = cartCopy.find((prod) => prod.id === product.id);
    if (!findOther) {
      return setCart([...cart, product]);
    }
    findOther.quantity = findOther.quantity + product.quantity;

    setCart(cartCopy);
  };

  const changeQuantity = (value, id) => {
    if (!value) return removeFromCart(id);

    let cartCopy = [...cart];
    const product = cartCopy.find((prod) => prod.id === id);
    product.quantity = value;

    setCart(cartCopy);
  };

  const [cartSize, setCartSize] = useState();
  useEffect(() => {
    setCartSize(cart.reduce((acc, el) => acc + el.quantity, 0));
  }, [cart]);

  return (
    <BrowserRouter>
      <AppContainer>
        <Nav cartSize={cartSize} />
        <MainContentContainer>
          <Routes>
            <Route path="/shopping-cart/" element={<Home />} />
            <Route path="/shopping-cart/merch" element={<Merch />} />
            <Route path="/shopping-cart/menu" element={<Menu />} />
            <Route
              path="/shopping-cart/cart"
              element={
                <Cart
                  cart={cart}
                  removeFromCart={removeFromCart}
                  changeQuantity={changeQuantity}
                />
              }
            />
            <Route
              path="/shopping-cart/merch/:id"
              element={<MerchItem addToCart={addToCart} />}
            />
          </Routes>
        </MainContentContainer>
        <Footer />
      </AppContainer>
    </BrowserRouter>
  );
};

export default App;

// .app {

// }

// .mainContent {

// }
