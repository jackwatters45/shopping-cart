import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Product from './pages/Product';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
