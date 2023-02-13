import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/utils/Footer';
import Nav from './components/utils/Nav';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import Merch from './components/Merch/Merch';
import MerchItem from './components/MerchItem/MerchItem';
import { useState, createContext } from 'react';
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

// Normally do this in separate file but keeping here for learning purposes
export const CartContext = createContext({});

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <AppContainer>
        <CartContext.Provider value={{ cart, setCart }}>
          <Nav />
          <MainContentContainer>
            <Routes>
              <Route path="/shopping-cart/" element={<Home />} />
              <Route path="/shopping-cart/merch" element={<Merch />} />
              <Route path="/shopping-cart/menu" element={<Menu />} />
              <Route path="/shopping-cart/cart" element={<Cart />} />
              <Route path="/shopping-cart/merch/:id" element={<MerchItem />} />
            </Routes>
          </MainContentContainer>
        </CartContext.Provider>
        <Footer />
      </AppContainer>
    </BrowserRouter>
  );
};

export default App;
