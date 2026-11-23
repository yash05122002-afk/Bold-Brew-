import  { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = ({ addToCart }) => {
  const [selectedTab, setSelectedTab] = useState('All');

  // 1. Famous Coffees Data with Origin & Roast Notes
  const famousMenu = [
    {
      id: 201,
      name: 'Spanish Cortado',
      category: 'Hot',
      roast: 'Medium-Dark',
      origin: 'Spain',
      rating: '4.9',
      price: 150,
      desc: ' Made with Caramelized milk , Toasted walnut & Cocoa.',
      img: 'src/images/Cortado.png',
    },
    {
      id: 202,
      name: 'Smoked Sea Salt Cold Brew',
      category: 'Cold',
      roast: 'Dark Roast',
      origin: 'Sumatra Mandheling',
      rating: '5.0',
      price: 80,
      desc: '18-hour cold-steeped coffee topped with a thick cloud of salted caramel sweet cream.',
      img: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 203,
      name: 'Hazelnut Praline Latte',
      category: 'Hot',
      roast: 'Medium Roast',
      origin: 'Brazil Cerrado',
      rating: '4.8',
      price: 70,
      desc: 'House-roasted hazelnut paste blended with organic oat milk and a bold double espresso shot.',
      img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 204,
      name: 'Chocolate Mocha Coffee',
      category: 'Reserve',
      roast: 'Light Roast',
      origin: 'Yemen',
      rating: '4.9',
      price: 70,
      desc: 'Serve hot in a clear glass mug, topped with whipped cream, chocolate drizzle and cocoa shavings.',
      img: 'src/images/Decadent Chocolate Mocha.png',
    },
    {
      id: 205,
      name: 'Velvet Mocha Frappe',
      category: 'Cold',
      roast: 'Medium-Dark',
      origin: 'Guatemala Antigua',
      rating: '4.7',
      price: 120,
      desc: '70% single-origin dark chocolate melted into chilled espresso and topped with cocoa nibs.',
      img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 206,
      name: 'Dalgona Coffee',
      category: 'Cold',
      roast: 'Medium-roast',
      origin: 'South Korea',
      rating: '5.0',
      price: 100,
      desc: 'Serve in a transparent glass with chilled milk, ice cubes and a generous swirl of whipped coffee foam.',
      img: 'src/images/Marbled Dalgona Coffee Delight.png',
    },
  ];

  // 2. Customer Reviews State
  const [reviewsList, setReviewsList] = useState([
    {
      id: 1,
      name: 'Ananya Deshmukh',
      drinkTried: 'Smoked Sea Salt Cold Brew',
      stars: 5,
      date: '2 days ago',
      text: 'The salted sweet cream foam on top of the dark cold brew is perfection. Easily the best iced coffee I have ever ordered!',
    },
    {
      id: 2,
      name: 'Kabir Malhotra',
      drinkTried: 'Spanish Cortado',
      stars: 5,
      date: '5 days ago',
      text: 'You can immediately taste the freshly roasted beans. Smooth, nutty, and never sour. My new morning ritual.',
    },
    {
      id: 3,
      name: 'Meera Nair',
      drinkTried: 'Ethiopian Honey Pour-Over',
      stars: 5,
      date: '1 week ago',
      text: 'Rare to find a café that respects light roasts! The floral and honey notes came through beautifully.',
    },
  ]);

  // 3. Feedback Form State
  const [userName, setUserName] = useState('');
  const [favoriteDrink, setFavoriteDrink] = useState('Smoked Sea Salt Cold Brew');
  const [starRating, setStarRating] = useState(5);
  const [message, setMessage] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);

  const filteredCoffees =
    selectedTab === 'All'
      ? famousMenu
      : famousMenu.filter((item) => item.category === selectedTab);

  const handleOrderClick = (item) => {
    if (addToCart) {
      addToCart(item);
    } else {
      alert(`Added "${item.name}" ($${item.price.toFixed(2)}) to your bag!`);
    }
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (!userName.trim() || !message.trim()) return;

    const newReviewItem = {
      id: Date.now(),
      name: userName,
      drinkTried: favoriteDrink,
      stars: starRating,
      date: 'Just now',
      text: message,
    };

    setReviewsList([newReviewItem, ...reviewsList]);
    setUserName('');
    setMessage('');
    setStarRating(5);
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 4000);
  };

  return (
    <div className="artisan-home">
      
      {/* 
          1. TITLE / EDITORIAL HERO SECTION*/}
      <section className="editorial-hero">
        <div className="hero-inner">
          
          {/* Left Column: Title, Story & CTA */}
          <div className="hero-copy-col">
            <div className="roaster-pill">
              <span className="pulse-dot"></span>
              FRESHLY ROASTED IN SMALL BATCHES
            </div>

            <h1 className="editorial-title">
              Awaken Your Senses With <span>Artisan</span> Coffee.
            </h1>

            <p className="editorial-desc">
              From high-altitude single-origin estates directly to your cup. We roast daily over slow drum fire to bring out deep cocoa, toasted hazelnut, and velvety golden crema.
            </p>

            <div className="hero-cta-row">
              <a href="#famous-coffees" className="btn-caramel">
                Explore Famous Brews
              </a>
              <Link to="/menu" className="btn-ghost">
                View Full Menu →
              </Link>
            </div>

            <div className="hero-mini-stats">
              <div>
                <strong>100%</strong>
                <span>Specialty Arabica</span>
              </div>
              <div className="stat-divider"></div>
              <div>
                <strong>24 hrs</strong>
                <span>Roast-to-Cup Fresh</span>
              </div>
              <div className="stat-divider"></div>
              <div>
                <strong>4.9 ★</strong>
                <span>2,400+ Cafe Reviews</span>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Coffee Visuals */}
          <div className="hero-visual-col">
            <div className="arch-image-frame">
              <img
                src="src/images/Decadent Chocolate Mocha.png"
                alt="Barista Pouring Latte Art"
              />
            </div>

           

            {/* Floating Card 1 */}
            <div className="floating-card bottom-right">
              <span className="float-price">₹70</span>
              <div>
                <strong>Chocolate Mocha</strong>
                <p>Barista's #1 Pick</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. FAMOUS COFFEE SECTION */}
      <section id="famous-coffees" className="artisan-section famous-bg">
        <div className="section-container">
          
          <div className="famous-header-flex">
            <div>
              <span className="eyebrow-tag">SIGNATURE CREATIONS</span>
              <h2 className="section-heading">Our Famous Coffees</h2>
            </div>

            {/* Category Filter Buttons */}
            <div className="category-tabs">
              {['All', 'Hot', 'Cold', 'Reserve'].map((tab) => (
                <button
                  key={tab}
                  className={`cat-tab-btn ${selectedTab === tab ? 'active' : ''}`}
                  onClick={() => setSelectedTab(tab)}
                >
                  {tab === 'All' ? 'All Signatures' : `${tab} Brews`}
                </button>
              ))}
            </div>
          </div>

          {/* Coffee Cards Grid */}
          <div className="famous-cards-grid">
            {filteredCoffees.map((item) => (
              <div className="artisan-coffee-card" key={item.id}>
                <div className="card-media">
                  <img src={item.img} alt={item.name} />
                  <span className="rating-chip">★ {item.rating}</span>
                  <span className="roast-chip">{item.roast}</span>
                </div>

                <div className="card-content">
                  <span className="origin-label">Origin: {item.origin}</span>
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>

                  <div className="card-action-bar">
                    <div className="price-stack">
                      <span className="price-caption">Price</span>
                      <strong className="price-amount">₹{item.price.toFixed(2)}</strong>
                    </div>

                    <button
                      className="add-bag-btn"
                      onClick={() => handleOrderClick(item)}
                    >
                      + Add to Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================
          3. CUSTOMER REVIEWS SECTION
      ========================================================= */}
      <section className="artisan-section reviews-bg">
        <div className="section-container">
          
          <div className="centered-header">
            <span className="eyebrow-tag">COMMUNITY LOVE</span>
            <h2 className="section-heading">Words From Coffee Lovers</h2>
            <p className="section-subtext">
              Every cup is crafted with care. Here is what our regulars say about their daily brew.
            </p>
          </div>

          <div className="reviews-cards-grid">
            {reviewsList.map((review) => (
              <div className="editorial-review-card" key={review.id}>
                <div className="review-card-top">
                  <div className="gold-stars">
                    {'★'.repeat(review.stars)}
                    {'☆'.repeat(5 - review.stars)}
                  </div>
                  <span className="review-date">{review.date}</span>
                </div>

                <p className="review-body">"{review.text}"</p>

                <div className="review-footer">
                  <div className="avatar-initial">
                    {review.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="reviewer-meta">
                    <h4>{review.name}</h4>
                    <span className="verified-tag">
                      ✓ Ordered: {review.drinkTried}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================
          4. INTERACTIVE FEEDBACK SECTION
      ========================================================= */}
      <section className="artisan-section feedback-bg">
        <div className="section-container">
          <div className="feedback-split-box">
            
            {/* Left Side: Callout & Coffee Perks */}
            <div className="feedback-left-panel">
              <span className="eyebrow-tag light">YOUR TASTE MATTERS</span>
              <h2>Leave Us Your Feedback</h2>
              <p>
                Did you love your morning espresso or have a suggestion for our next seasonal blend? Drop your review here—it posts immediately to our live wall above!
              </p>

              <div className="perk-callout-box">
                <span className="perk-badge">🎁 COFFEE CLUB PERK</span>
                <p>
                  Every feedback submission earns you a <strong>Free Pastry Voucher</strong> on your next in-store or online order.
                </p>
              </div>
            </div>

            {/* Right Side: Interactive Star Rating Form */}
            <form className="feedback-right-form" onSubmit={handleFeedbackSubmit}>
              <h3>Rate Your Brew</h3>

              {showThankYou && (
                <div className="live-alert">
                  ✨ Thank you! Your review is now live in the Reviews section above.
                </div>
              )}

              <div className="input-field">
                <label>Your Full Name *</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
              </div>

              <div className="input-field">
                <label>Which Coffee Did You Try?</label>
                <select
                  value={favoriteDrink}
                  onChange={(e) => setFavoriteDrink(e.target.value)}
                >
                  {famousMenu.map((drink) => (
                    <option key={drink.id} value={drink.name}>
                      {drink.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="input-field">
                <label>Click to Rate *</label>
                <div className="interactive-stars">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      type="button"
                      key={num}
                      className={`star-pick-btn ${starRating >= num ? 'lit' : ''}`}
                      onClick={() => setStarRating(num)}
                    >
                      ★
                    </button>
                  ))}
                  <span className="rating-text">{starRating} out of 5 Stars</span>
                </div>
              </div>

              <div className="input-field">
                <label>Your Experience *</label>
                <textarea
                  rows="3"
                  placeholder="How was the aroma, crema, and flavor?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-caramel full-width">
                Post My Review
              </button>
            </form>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;