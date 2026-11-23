import { useState } from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="coffee-footer">
      <div className="footer-container">

        {/* Top 4-Column Grid */}
        <div className="footer-grid">

          {/* Column 1: Brand & Bio */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-logo" onClick={scrollToTop}>
              <span className="logo-bean"><i className="bx bxs-coffee-togo minimal-icon"></i></span>Bold Brew.
            </Link>
            <p className="footer-bio">
              Small-batch specialty coffee roasted daily over slow artisan flame. Ethically sourced from high-altitude estates and brewed for purists.
            </p>
            <div className="footer-socials">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="social-pill">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="social-pill">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="social-pill">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="social-pill">
                <i className="bx bxl-youtube"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Explore</h4>
            <ul className="footer-links">
              <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
              <li><Link to="/menu" onClick={scrollToTop}>Espresso Bar Menu</Link></li>
              <li><Link to="/about" onClick={scrollToTop}>Our Roastery & Story</Link></li>
              <li><Link to="/cart" onClick={scrollToTop}>Shopping Bag</Link></li>
              <li><Link to="/auth" onClick={scrollToTop}>Member Login / Sign Up</Link></li>
            </ul>
          </div>

          {/* Column 3: Cafe Hours & Location */}
          <div className="footer-col">
            <h4 className="footer-heading">Visit the Roastery</h4>
            <ul className="footer-hours">
              <li>
                <span>Mon – Fri:</span>
                <strong>7:00 AM – 8:00 PM</strong>
              </li>
              <li>
                <span>Saturday:</span>
                <strong>8:00 AM – 9:00 PM</strong>
              </li>
              <li>
                <span>Sunday:</span>
                <strong>8:00 AM – 6:00 PM</strong>
              </li>
            </ul>
            <p className="footer-address">
              📍 42 Artisan Roaster Lane, Bandra West, Mumbai
            </p>
          </div>

          {/* Column 4: Newsletter & Contact */}
          <div className="footer-col newsletter-col">
            <h4 className="footer-heading">Join the Coffee Club</h4>
            <p className="newsletter-text">
              Get <strong>15% off</strong> your first whole-bean bag and early access to limited micro-lot roasts.
            </p>

            <form className="footer-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="footer-submit-btn">
                Subscribe
              </button>
            </form>

            {subscribed && (
              <span className="subscribe-success">
                ✓ Welcome to the club! Check your inbox for 15% off.
              </span>
            )}
          </div>

        </div>

        {/* Bottom Copyright & Legal Bar */}
        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} Roast & Crema Coffee Co. All rights reserved.</p>

          <div className="footer-legal-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <button onClick={scrollToTop} className="back-top-btn">
              Back to Top ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;