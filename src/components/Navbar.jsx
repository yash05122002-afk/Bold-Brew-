import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ cartCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bb-navbar">
      <div className="bb-nav-container">
        {/* Link to Home */}
      <Link to="/" className="coffee-brand-logo minimal">
  <i className="bx bxs-coffee-togo minimal-icon"></i>
  <span className="minimal-title">
    Bold Brew<span className="orange-dot">.</span>
  </span>
</Link>

        {/* NavLink automatically applies class="active" to the current page */}
        <nav
          className={`bb-nav-links ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(false)}
        >
          <NavLink to="/">Home</NavLink>
          <span className="nav-slash">/</span>
          <NavLink to="/Menu">Menu</NavLink>
          <span className="nav-slash">/</span>
          <NavLink to="/About">About Us</NavLink>
          <span className="nav-slash">/</span>
          <NavLink to="/Cart">Cart</NavLink>
        </nav>

        <div className="bb-nav-actions">
          <Link to="/Auth" className="bb-signin-btn">Sign In</Link>
          <Link to="/Cart" className="bb-cart-square">
            🛒 <span>{cartCount}</span>
          </Link>

<button
    type="button"
    className={`bb-hamburger ${menuOpen ? 'active' : ''}`}
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Toggle navigation menu"
  >
    <span className="bar"></span>
    <span className="bar"></span>
    <span className="bar"></span>
  </button>
     
        </div>
      </div>
    </header>
  );
};

export default Navbar;