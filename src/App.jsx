import  { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Cart from './pages/Cart';
import Auth from './pages/Auth';


// Automatically scrolls to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [cartItems, setCartItems] = useState([
    {
      id: '302-Regular',
      name: 'Smoked Sea Salt Cold Brew (Regular)',
      category: 'Iced & Cold Brew',
      notes: 'Oat Milk • Less Ice',
      price: 6.25,
      qty: 2,
      img: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: '303-250g',
      name: 'Ethiopia Yirgacheffe Whole Bean (250g)',
      category: 'Whole Beans',
      notes: 'Whole Bean • Light Roast',
      price: 19.0,
      qty: 1,
      img: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=400&q=80',
    },
  ]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, qty: (Number(item.qty) || 1) + 1 }
            : item
        );
      }
      return [
        ...prevItems,
        {
          ...product,
          price: Number(product.price) || Number(product.basePrice) || 5.0,
          qty: 1,
        },
      ];
    });
  };

  const updateQty = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.id === id) {
            const newQty = (Number(item.qty) || 1) + delta;
            return { ...item, qty: newQty };
          }
          return item;
        })
        .filter((item) => item.qty > 0)
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce(
    (sum, item) => sum + (Number(item.qty) || 1),
    0
  );

  return (
    /* ONLY ONE <Router> IN THE ENTIRE APP */
    <Router>
      <ScrollToTop />
      <div className="app-wrapper">
        <Navbar cartCount={totalCartCount} />

        <main>
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route path="/menu" element={<Menu addToCart={addToCart} />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/cart"
              element={
                <Cart
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  updateQty={updateQty}
                  removeFromCart={removeFromCart}
                  clearCart={clearCart}
                  addToCart={addToCart}
                />
              }
            />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;