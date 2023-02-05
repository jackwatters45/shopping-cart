import '../styles/Nav.css';
import devito from '../assets/devito.png';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/" className="title">
        Paddy's Pub
      </Link>
      <Link to="/">
        <img className="frank-head" src={devito} alt="Restaurant Logo" />
      </Link>
      <div className="nav-items">
        <Link to="/product" className="menuButton">
          Product
        </Link>
        <Link to="/cart" className="aboutButton">
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
