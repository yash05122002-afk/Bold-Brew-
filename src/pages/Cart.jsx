import  { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cartItems: propItems, updateQty: propUpdateQty, clearCart: propClearCart, addToCart: propAddToCart }) => {
  // Fallback local state in case Cart.jsx is tested without props from App.jsx
  const [localItems, setLocalItems] = useState([
    {
      id: '302-Regular',
      name: 'Smoked Sea Salt Cold Brew (Regular)',
      category: 'Iced & Cold Brew',
      notes: 'Oat Milk • Less Ice',
      price: 125,
      qty: 2,
      img: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: '303-250g',
      name: 'Ethiopia Yirgacheffe Whole Bean (250g)',
      category: 'Whole Beans',
      notes: 'Whole Bean • Light Roast',
      price: 150,
      qty: 1,
      img: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=400&q=80',
    },
  ]);

  const items = propItems !== undefined ? propItems : localItems;

  const [deliveryMode, setDeliveryMode] = useState('delivery'); // 'delivery' or 'pickup'
  const [promoInput, setPromoInput] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [promoError, setPromoError] = useState('');
  const [baristaNote, setBaristaNote] = useState('');
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState(null);

  // Quick Add-On Upsells
  const upsellItems = [
    {
      id: 'upsell-1',
      name: 'Warm Almond Croissant',
      price: 175,
      img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 'upsell-2',
      name: 'Cinnamon Brioche Roll',
      price: 125,
      img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 'upsell-3',
      name: 'Reusable Glass Brew Tumbler',
      price: 140,
      img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=300&q=80',
    },
  ];

  // Handlers that work with both App.jsx props and local state
  const handleQtyChange = (id, delta) => {
    if (propUpdateQty) {
      propUpdateQty(id, delta);
    } else {
      setLocalItems((prev) =>
        prev
          .map((item) => (item.id === id ? { ...item, qty: item.qty + delta } : item))
          .filter((item) => item.qty > 0)
      );
    }
  };

  const handleRemoveItem = (id, currentQty) => {
    handleQtyChange(id, -currentQty);
  };

  const handleClearBag = () => {
    if (propClearCart) {
      propClearCart();
    } else {
      setLocalItems([]);
    }
  };

  const handleAddUpsell = (upsell) => {
    if (propAddToCart) {
      propAddToCart(upsell);
    } else {
      setLocalItems((prev) => {
        const exists = prev.find((i) => i.id === upsell.id);
        if (exists) {
          return prev.map((i) => (i.id === upsell.id ? { ...i, qty: i.qty + 1 } : i));
        }
        return [...prev, { ...upsell, category: 'Bakery & Gear', qty: 1 }];
      });
    }
  };

  // Calculations
  const FREE_SHIPPING_THRESHOLD = 35.0;
  const subtotal = items.reduce((sum, item) => sum + item.price * (item.qty || 1), 0);
  const amountLeftForFreeShip = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const shippingProgress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  const discountAmount = appliedPromo ? subtotal * appliedPromo.rate : 0;
  const shippingFee =
    deliveryMode === 'pickup' || subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0
      ? 0
      : 4.5;
  const estimatedTax = (subtotal - discountAmount) * 0.05;
  const finalTotal = Math.max(0, subtotal - discountAmount + shippingFee + estimatedTax);

  // Promo Code Handler
  const handleApplyPromo = (e) => {
    e.preventDefault();
    const code = promoInput.trim().toUpperCase();
    setPromoError('');

    if (code === 'BREW15') {
      setAppliedPromo({ code: 'BREW15', rate: 0.15, label: '15% Off' });
      setPromoInput('');
    } else if (code === 'COFFEE10') {
      setAppliedPromo({ code: 'COFFEE10', rate: 0.1, label: '10% Off' });
      setPromoInput('');
    } else {
      setPromoError('Invalid code. Try BREW15 or COFFEE10');
    }
  };

  const handleCheckout = () => {
    setOrderNumber(Math.floor(1000 + Math.random() * 9000));
    setOrderComplete(true);
    handleClearBag();
  };

  // Order Confirmation Screen
  if (orderComplete) {
    return (
      <div className="artisan-cart-page">
        <div className="cart-container">
          <div className="order-success-card">
            <div className="success-check-circle">✓</div>
            <span className="cart-eyebrow">ORDER CONFIRMED • #RC-{orderNumber}</span>
            <h2>Your Brew Is On the Way!</h2>
            <p>
              {deliveryMode === 'pickup'
                ? 'Our baristas have started crafting your order. It will be ready at the Espresso Pickup Counter in 10–12 minutes.'
                : 'We are packing your freshly roasted order with cold-packs. You will receive a live tracking link via SMS shortly.'}
            </p>
            <div className="success-actions">
              <Link to="/menu" className="btn-caramel-pill" onClick={() => setOrderComplete(false)}>
                Order More Coffee
              </Link>
              <Link to="/" className="btn-outline-pill" onClick={() => setOrderComplete(false)}>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="artisan-cart-page">
      
      {/* 1. CART HEADER*/}
      <section className="cart-header-banner">
        <div className="cart-container">
          <span className="cart-eyebrow">FRESH ROASTED • CRAFTED TO ORDER</span>
          <h1>Your Coffee Bag</h1>
          <p>Review your handcrafted drinks and whole-bean selections before checkout.</p>
        </div>
      </section>

      <div className="cart-container">
        {items.length === 0 ? (
          /*  EMPTY CART STATE */
          <div className="empty-bag-card">
            <div className="empty-cup-icon">☕</div>
            <h2>Your coffee bag is empty</h2>
            <p>
              Looks like you haven't added any espresso drinks or freshly roasted whole beans yet.
            </p>
            <div className="empty-bag-links">
              <Link to="/menu" className="btn-caramel-pill">
                Explore Espresso Bar & Beans
              </Link>
              <Link to="/" className="btn-outline-pill">
                Return to Home Page
              </Link>
            </div>
          </div>
        ) : (
          /* 
             ACTIVE CART 2-COLUMN LAYOUT */
          <div className="cart-main-grid">
            
            {/* LEFT COLUMN: SHIPPING BAR, ITEMS LIST & UPSELLS */}
            <div className="cart-left-col">
              
              {/* Free Shipping Progress Bar */}
              <div className="shipping-progress-box">
                <div className="shipping-text-row">
                  {amountLeftForFreeShip > 0 ? (
                    <p>
                      Add <strong>₹{amountLeftForFreeShip.toFixed(2)}</strong> more to unlock{' '}
                      <span>FREE Priority Cold-Pack Shipping!</span>
                    </p>
                  ) : (
                    <p className="unlocked-msg">
                      🎉 You've unlocked <strong>FREE Priority Cold-Pack Shipping!</strong>
                    </p>
                  )}
                  <span className="progress-pct">{Math.round(shippingProgress)}%</span>
                </div>
                <div className="progress-track">
                  <div
                    className="progress-fill"
                    style={{ width: `₹{shippingProgress}%` }}></div>
                </div>
              </div>

              {/* Cart Items Header */}
              <div className="bag-list-header">
                <h3>
                  Bag Items <span>({items.reduce((acc, i) => acc + (i.qty || 1), 0)})</span>
                </h3>
                <button className="clear-bag-btn" onClick={handleClearBag}>
                  Clear Bag
                </button>
              </div>

              {/* Cart Item Cards */}
              <div className="cart-items-stack">
                {items.map((item) => {
                  const qty = item.qty || 1;
                  return (
                    <div className="bag-item-card" key={item.id}>
                      <img src={item.img} alt={item.name} className="bag-item-img" />

                      <div className="bag-item-details">
                        <span className="bag-item-cat">
                          {item.category || 'Signature Brew'}
                        </span>
                        <h4>{item.name}</h4>
                        {item.notes && <p className="bag-item-custom">{item.notes}</p>}
                        <span className="bag-unit-price">₹{item.price.toFixed(2)} each</span>
                      </div>

                      <div className="bag-item-controls">
                        <div className="qty-stepper">
                          <button
                            type="button"
                            onClick={() => handleQtyChange(item.id, -1)}
                            aria-label="Decrease quantity"
                          >
                            −
                          </button>
                          <span>{qty}</span>
                          <button
                            type="button"
                            onClick={() => handleQtyChange(item.id, 1)}
                            aria-label="Increase quantity">
                            +
                          </button>
                        </div>

                        <strong className="bag-line-total">
                          ₹{(item.price * qty).toFixed(2)}
                        </strong>

                        <button
                          type="button"
                          className="remove-item-btn"
                          onClick={() => handleRemoveItem(item.id, qty)}
                          title="Remove item"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Special Barista / Roast Instructions */}
              <div className="barista-note-box">
                <label htmlFor="barista-note">
                  📝 Special Instructions for the Barista or Roaster
                </label>
                <textarea
                  id="barista-note"
                  rows="2"
                  placeholder="e.g., Extra hot oat milk, grind beans for French Press, leave package at front desk..."
                  value={baristaNote}
                  onChange={(e) => setBaristaNote(e.target.value)}
                />
              </div>

              {/* Pair With Your Brew (1-Click Upsells) */}
              <div className="upsell-box">
                <h4>Pair With Your Coffee</h4>
                <div className="upsell-grid">
                  {upsellItems.map((up) => (
                    <div className="upsell-mini-card" key={up.id}>
                      <img src={up.img} alt={up.name} />
                      <div className="upsell-info">
                        <h5>{up.name}</h5>
                        <span>₹{up.price.toFixed(2)}</span>
                      </div>
                      <button
                        type="button"
                        className="upsell-add-btn"
                        onClick={() => handleAddUpsell(up)}
                      >
                        + Add
                      </button>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: ORDER SUMMARY & CHECKOUT */}
            <aside className="cart-right-col">
              <div className="summary-sticky-card">
                <h3>Order Summary</h3>

                {/* Pickup vs Delivery Toggle */}
                <div className="fulfillment-toggle">
                  <button
                    type="button"
                    className={`fulfill-btn ${deliveryMode === 'delivery' ? 'active' : ''}`}
                    onClick={() => setDeliveryMode('delivery')}
                  >
                    🚚 Doorstep Delivery
                  </button>
                  <button
                    type="button"
                    className={`fulfill-btn ${deliveryMode === 'pickup' ? 'active' : ''}`}
                    onClick={() => setDeliveryMode('pickup')}
                  >
                    ☕ In-Cafe Pickup
                  </button>
                </div>

                {/* Promo Code Form */}
                <form className="promo-code-form" onSubmit={handleApplyPromo}>
                  <input
                    type="text"
                    placeholder="Promo code (Try BREW15)"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                  />
                  <button type="submit">Apply</button>
                </form>

                {promoError && <p className="promo-error">{promoError}</p>}

                {appliedPromo && (
                  <div className="promo-applied-tag">
                    <span>
                      ✓ Code <strong>{appliedPromo.code}</strong> ({appliedPromo.label})
                    </span>
                    <button type="button" onClick={() => setAppliedPromo(null)}>
                      Remove
                    </button>
                  </div>
                )}

                {/* Cost Breakdown */}
                <div className="cost-breakdown">
                  <div className="cost-line">
                    <span>Subtotal</span>
                    <strong>₹{subtotal.toFixed(2)}</strong>
                  </div>

                  {appliedPromo && (
                    <div className="cost-line discount">
                      <span>Discount ({appliedPromo.code})</span>
                      <strong>−₹{discountAmount.toFixed(2)}</strong>
                    </div>
                  )}

                  <div className="cost-line">
                    <span>
                      {deliveryMode === 'pickup' ? 'In-Cafe Pickup' : 'Cold-Pack Shipping'}
                    </span>
                    <strong>
                      {shippingFee === 0 ? 'FREE' : `₹${shippingFee.toFixed(2)}`}
                    </strong>
                  </div>

                  <div className="cost-line">
                    <span>Estimated Taxes (5%)</span>
                    <strong>₹{estimatedTax.toFixed(2)}</strong>
                  </div>

                  <div className="cost-divider"></div>

                  <div className="cost-line grand-total">
                    <span>Total</span>
                    <strong>₹{finalTotal.toFixed(2)}</strong>
                  </div>
                </div>

                <button
                  type="button"
                  className="checkout-main-btn"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout • ₹{finalTotal.toFixed(2)}
                </button>

                <Link to="/menu" className="continue-shopping-link">
                  ← Continue Shopping Menu
                </Link>

                {/* Trust Badges */}
                <div className="cart-trust-badges">
                  <div>🔒 256-Bit Encrypted Checkout</div>
                  <div>🌱 100% Compostable Packaging</div>
                </div>
              </div>
            </aside>

          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;