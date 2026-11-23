import { useState } from 'react';
import './Menu.css';
// Import local images
import cortado from '../images/Cortado.png';
import chocolateMocha from '../images/Decadent Chocolate Mocha.png';


const Menu = ({ addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedSizes, setSelectedSizes] = useState({});
  const [quickViewItem, setQuickViewItem] = useState(null);
  const [addedToast, setAddedToast] = useState(null);

  // Complete Coffee & Bean Catalog
  const productsData = [
    {
      id: 301,
      name: 'Spanish Cortado',
      category: 'Hot Espresso',
      origin: 'Spain',
      roast: 'Medium-Dark',
      notes: 'Caramelized Milk, Toasted Walnut, Cocoa',
      rating: 4.9,
      reviewsCount: 142,
      basePrice: 160,
      badge: 'Bestseller',
      isBean: false,
      desc: 'Equal parts rich double ristretto and lightly sweetened condensed micro-foam.',
      img: cortado,
    },

    {
      id: 302,
      name: 'Espresso Machiatto',
      category: 'Hot Espresso',
      origin: 'Italy',
      roast: 'Medium-Dark',
      notes: 'Dark brown espresso with a golden crema and a white milk-foam layer.',
      rating: 4.9,
      reviewsCount: 142,
      basePrice: 160,
      badge: 'Bestseller',
      isBean: false,
      desc: 'Slightly bitter, strong, rich and mildly creamy.',
      img: 'src/images/Warm Espresso Macchiato coffee.png',
    },



    {
      id: 303,
      name: 'Smoked Sea Salt Cold Brew',
      category: 'Iced & Cold Brew',
      origin: 'Sumatra Mandheling',
      roast: 'Dark Roast',
      notes: 'Salted Caramel, Dark Chocolate, Velvety Finish',
      rating: 5.0,
      reviewsCount: 218,
      basePrice: 125,
      badge: 'Barista Pick',
      isBean: false,
      desc: 'Steeped cold for 18 hours and crowned with a thick cloud of sea-salt caramel cold foam.',
      img: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80',
    },

    {
      id: 304,
      name: 'Ethiopia Yirgacheffe Whole Bean',
      category: 'Whole Beans',
      origin: 'Yirgacheffe, Ethiopia',
      roast: 'Light Roast',
      notes: 'Jasmine Blossom, Bergamot, White Peach',
      rating: 4.9,
      reviewsCount: 89,
      basePrice: 190,
      badge: 'Single Origin',
      isBean: true,
      desc: 'Washed high-altitude heirloom beans roasted light to preserve vibrant floral aromatics.',
      img: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 305,
      name: 'Brazilian Arabica Coffee Beans',
      category: 'Whole Beans',
      origin: 'Brazil, South america',
      roast: 'Medium Roast',
      notes: 'Rich chocolate, Roasted nuts, caramel sweetness',
      rating: 4.9,
      reviewsCount: 164,
      basePrice: 180,
      badge: 'Roaster Favorite',
      isBean: true,
      desc: 'Carefully roasted to bring out their natural sweetness, smooth chocolate notes, and delightful nutty aroma ',
      img: 'src/images/Rustic Coffee Beans and Burlap Sack.png',
    },

    {
      id: 306,
      name: 'Hazelnut Praline Oat Latte',
      category: 'Hot Espresso',
      origin: 'Brazil Cerrado',
      roast: 'Medium Roast',
      notes: 'Roasted Hazelnut, Brown Sugar, Creamy Oat',
      rating: 4.8,
      reviewsCount: 115,
      basePrice: 175,
      badge: null,
      isBean: false,
      desc: 'House-made hazelnut praline paste steamed with barista-grade oat milk and double espresso.',
      img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 307,
      name: 'Midnight Crema Espresso Blend',
      category: 'Whole Beans',
      origin: 'Guatemala & Colombia',
      roast: 'Dark Roast',
      notes: 'Molasses, Dark Berry, Syrupy Crema',
      rating: 4.9,
      reviewsCount: 164,
      basePrice: 180,
      badge: 'Roaster Favorite',
      isBean: true,
      desc: 'Our signature house espresso blend crafted for thick golden crema and zero bitterness.',
      img: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&w=600&q=80',
    },


    {
      id: 308,
      name: 'Belgian Mocha Silk Iced',
      category: 'Iced & Cold Brew',
      origin: 'Guatemala Antigua',
      roast: 'Medium-Dark',
      notes: '70% Dark Cacao, Espresso, Vanilla Bean',
      rating: 4.7,
      reviewsCount: 94,
      basePrice: 160,
      badge: null,
      isBean: false,
      desc: ' melted single-origin Belgian dark chocolate shaken with chilled espresso over crystal ice.',
      img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 309,
      name: 'Chocolate Mocha',
      category: 'Iced & Cold Brew',
      origin: 'Yemen',
      roast: 'Light-Medium',
      notes: 'Blackcurrant, Winey Acidity, Silky Body',
      rating: 5.0,
      reviewsCount: 67,
      basePrice: 70,
      badge: 'Roaster Favourite',
      isBean: false,
      desc: 'Serve hot in a clear glass mug, topped with whipped cream, chocolate drizzle and cocoa shavings.',
      img: chocolateMocha,
    },
    {
      id: 310,
      name: 'Artisanal Almond Croissant',
      category: 'Bakery',
      origin: 'In-House Bakery',
      roast: 'Baked Fresh Daily',
      notes: 'French Butter, Frangipane, Toasted Almonds',
      rating: 4.9,
      reviewsCount: 130,
      basePrice: 120,
      badge: 'Fresh Warm',
      isBean: false,
      desc: 'Flaky 27-layer laminated brioche pastry filled with sweet almond cream and flaked almonds.',
      img: 'src/images/Golden Almond Croissant.png',
    },

     {
      id: 311,
      name: 'Artisanal Chocolate Croissant',
      category: 'Bakery',
      origin: 'In-House Bakery',
      roast: 'Baked Fresh Daily',
      notes: 'European unsalted butter, Hot Chocolate',
      rating: 4.9,
      reviewsCount: 130,
      basePrice: 100,
      badge: 'Fresh Warm',
      isBean: false,
      desc: 'A classic baked pastry made from buttery, yeast-leavened laminated dough wrapped around sticks of rich dark chocolate.',
      img: 'src/images/Chocolate-Filled Powdered Croissant.png',
    },

     {
      id: 312,
      name: 'Artisanal Blackberry & Raspberry Pulp Croissant',
      category: 'Bakery',
      origin: 'In-House Bakery',
      roast: 'Baked Fresh Daily',
      notes: 'Europian unsalted Butter, Pulped berries',
      rating: 4.9,
      reviewsCount: 110,
      basePrice: 150,
      badge: 'Fresh Warm',
      isBean: false,
      desc: 'Golden, flaky pastry filled with rich mixed-berry pulp and finished with a generous dusting of icing sugar.',
      img: 'src/images/Berry-Filled Croissant Delight.png',
    },


  ];

  const categories = ['All', 'Hot Espresso', 'Iced & Cold Brew', 'Whole Beans', 'Bakery'];

  // Size / Weight price multiplier helper
  const getSelectedOption = (product) => {
    const defaultOpt = product.isBean ? '250g' : 'Regular';
    return selectedSizes[product.id] || defaultOpt;
  };

  const getCalculatedPrice = (product) => {
    const opt = getSelectedOption(product);
    if (product.isBean) {
      return opt === '500g' ? product.basePrice * 1.8 : product.basePrice;
    } else {
      return opt === 'Large' ? product.basePrice + 1.25 : product.basePrice;
    }
  };

  const handleSizeChange = (productId, option) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: option }));
  };

  const handleAddToCartClick = (product) => {
    const chosenSize = getSelectedOption(product);
    const finalPrice = getCalculatedPrice(product);

    const cartProduct = {
      id: `${product.id}-${chosenSize}`,
      name: `${product.name} (${chosenSize})`,
      price: finalPrice,
      img: product.img,
    };

    if (addToCart) {
      addToCart(cartProduct);
    }

    setAddedToast(`${product.name} (${chosenSize}) added to bag!`);
    setTimeout(() => setAddedToast(null), 3000);
  };

  // Filter & Sort Logic
  const filteredProducts = productsData
    .filter((item) => {
      const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.notes.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.origin.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.basePrice - b.basePrice;
      if (sortBy === 'price-desc') return b.basePrice - a.basePrice;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="products-page">

      {/* Floating Toast Notification */}
      {addedToast && (
        <div className="cart-toast-notification">
          <span>✓</span> {addedToast}
        </div>
      )}

      {/* 
          1. PAGE HEADER BANNER */}
      <section className="products-hero-banner">
        <div className="products-hero-inner">
          <span className="products-eyebrow">SMALL BATCH ROASTERY & ESPRESSO BAR</span>
          <h1>Crafted Brews & Whole Beans</h1>
          <p>
            Order ahead for pickup at our espresso bar or have freshly roasted single-origin whole beans shipped straight to your door.
          </p>
        </div>
      </section>

      {/* 2. FILTER, SEARCH & SORT CONTROL BAR */}
      <section className="products-controls-section">
        <div className="products-container">

          <div className="controls-top-row">
            {/* Category Pills */}
            <div className="category-filter-pills">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`cat-pill ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search & Sort Controls */}
            <div className="search-sort-group">
              <div className="product-search-box">
                <span className="search-icon">🔍</span>
                <input
                  type="text"
                  placeholder="Search drinks, tasting notes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button className="clear-search" onClick={() => setSearchQuery('')}>
                    ✕
                  </button>
                )}
              </div>

              <select
                className="product-sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Sort: Featured</option>
                <option value="rating">Sort: Top Rated</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Results Count Bar */}
          <div className="results-status-bar">
            <span>
              Showing <strong>{filteredProducts.length}</strong> artisan items
            </span>
            {selectedCategory !== 'All' && (
              <button className="reset-filter-btn" onClick={() => setSelectedCategory('All')}>
                Reset Filter ✕
              </button>
            )}
          </div>

          {/* 3. PRODUCTS GRID */}
          {filteredProducts.length === 0 ? (
            <div className="no-products-box">
              <h3>No matching brews found</h3>
              <p>Try clearing your search query or switching product categories.</p>
              <button
                className="btn-caramel-solid"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
              >
                Show All Products
              </button>
            </div>
          ) : (
            <div className="products-grid">
              {filteredProducts.map((product) => {
                const currentSize = getSelectedOption(product);
                const finalPrice = getCalculatedPrice(product);
                const sizeOptions = product.isBean ? ['250g', '500g'] : ['Regular', 'Large'];

                return (
                  <div className="product-item-card" key={product.id}>

                    {/* Image & Badges */}
                    <div
                      className="product-img-box"
                      onClick={() => setQuickViewItem(product)}
                    >
                      <img src={product.img} alt={product.name} />
                      {product.badge && (
                        <span className="product-top-badge">{product.badge}</span>
                      )}
                      <span className="product-rating-pill">
                        ★ {product.rating.toFixed(1)} ({product.reviewsCount})
                      </span>
                      <div className="quick-view-overlay">
                        <span>Quick View</span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="product-card-body">
                      <div className="product-meta-row">
                        <span className="product-origin">{product.origin}</span>
                        <span className="product-roast-dot">• {product.roast}</span>
                      </div>

                      <h3
                        className="product-title"
                        onClick={() => setQuickViewItem(product)}
                      >
                        {product.name}
                      </h3>

                      <p className="product-tasting-notes">
                        <strong>Notes:</strong> {product.notes}
                      </p>

                      {/* Size / Bag Weight Selector */}
                      <div className="size-selector-group">
                        <span className="size-label">
                          {product.isBean ? 'Bag Weight:' : 'Cup Size:'}
                        </span>
                        <div className="size-buttons">
                          {sizeOptions.map((opt) => (
                            <button
                              type="button"
                              key={opt}
                              className={`size-btn ${currentSize === opt ? 'selected' : ''}`}
                              onClick={() => handleSizeChange(product.id, opt)}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Price & Add to Cart Footer */}
                      <div className="product-card-footer">
                        <div className="product-price-col">
                          <span className="price-sub">Total</span>
                          <strong className="price-main">₹{finalPrice.toFixed(2)}</strong>
                        </div>

                        <button
                          className="add-to-bag-btn"
                          onClick={() => handleAddToCartClick(product)}
                        >
                          + Add to Bag
                        </button>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          )}

        </div>
      </section>

      {/* 4. QUICK VIEW MODAL (POPUP)*/}
      {quickViewItem && (
        <div className="quickview-backdrop" onClick={() => setQuickViewItem(null)}>
          <div className="quickview-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setQuickViewItem(null)}
            >
              ✕
            </button>

            <div className="modal-grid">
              <div className="modal-img-col">
                <img src={quickViewItem.img} alt={quickViewItem.name} />
              </div>

              <div className="modal-info-col">
                <span className="modal-cat-tag">{quickViewItem.category}</span>
                <h2>{quickViewItem.name}</h2>
                <div className="modal-rating">
                  ★ {quickViewItem.rating} ({quickViewItem.reviewsCount} verified reviews)
                </div>

                <p className="modal-desc">{quickViewItem.desc}</p>

                <div className="modal-specs-box">
                  <div>
                    <span>Origin</span>
                    <strong>{quickViewItem.origin}</strong>
                  </div>
                  <div>
                    <span>Roast Level</span>
                    <strong>{quickViewItem.roast}</strong>
                  </div>
                  <div>
                    <span>Flavor Notes</span>
                    <strong>{quickViewItem.notes}</strong>
                  </div>
                </div>

                <div className="modal-action-row">
                  <strong className="modal-price">

                    ₹{getCalculatedPrice(quickViewItem).toFixed(2)}
                  </strong>
                  <button
                    className="btn-caramel-solid"
                    onClick={() => {
                      handleAddToCartClick(quickViewItem);
                      setQuickViewItem(null);
                    }}
                  >
                    + Add to Bag
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Menu;