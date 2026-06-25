/* ============================================================
   DTS CHOCOLATE — PAGE RENDERERS
   Homepage, Products, Product Detail, Cart, Checkout,
   Auth, Account, About, Contact, 404
   ============================================================ */

const Pages = {

  /* ======================== HOMEPAGE ======================== */
  home(container) {
    const featured = DBHelpers.getFeaturedProducts();
    const categories = DB.categories;
    const testimonials = DB.testimonials;

    container.innerHTML = `
      ${Layout.renderNavbar()}

      <main class="main-content" id="mainContent">

        <!-- HERO SECTION -->
        <section class="hero" aria-label="Welcome to DTS Chocolate">
          <div class="hero-bg">
            <img src="assets/images/hero-banner.png" alt="" role="presentation" />
          </div>
          <div class="hero-decor hero-decor-1"></div>
          <div class="hero-decor hero-decor-2"></div>
          <div class="hero-decor hero-decor-3"></div>

          <div class="container">
            <div class="hero-content">
              <div class="hero-text">
                <div class="hero-badge">
                  ${Icons.sparkles}
                  <span>Handcrafted in Hyderabad</span>
                </div>
                <h1 class="hero-title">
                  Sweet Moments,<br/>
                  <span>Made With Love</span>
                </h1>
                <p class="hero-subtitle">
                  Discover our collection of artisan chocolates, freshly baked cookies, and gourmet donuts — crafted with premium ingredients and delivered with care.
                </p>
                <div class="hero-ctas">
                  <a class="btn btn-primary btn-lg" data-link="/products">
                    Shop Now ${Icons.arrowRight}
                  </a>
                  <a class="btn btn-secondary btn-lg" data-link="/about">
                    Our Story
                  </a>
                </div>
                <div class="hero-stats">
                  <div>
                    <div class="hero-stat-value">1000+</div>
                    <div class="hero-stat-label">Happy Customers</div>
                  </div>
                  <div>
                    <div class="hero-stat-value">13</div>
                    <div class="hero-stat-label">Unique Products</div>
                  </div>
                  <div>
                    <div class="hero-stat-value">4.8</div>
                    <div class="hero-stat-label">Average Rating</div>
                  </div>
                </div>
              </div>
              <div class="hero-image">
                <img class="hero-image-main" src="assets/images/dark-chocolate.png" alt="DTS premium dark chocolate" />
                <div class="hero-image-float hero-float-1">
                  <div style="display:flex;align-items:center;gap:var(--space-sm)">
                    ${Icons.truck}
                    <div>
                      <div style="font-weight:var(--weight-semibold);font-size:var(--text-sm)">Free Delivery</div>
                      <div style="font-size:var(--text-xs);color:var(--color-text-muted)">Orders above ₹500</div>
                    </div>
                  </div>
                </div>
                <div class="hero-image-float hero-float-2">
                  <div style="display:flex;align-items:center;gap:var(--space-sm)">
                    ${Icons.shield}
                    <div>
                      <div style="font-weight:var(--weight-semibold);font-size:var(--text-sm)">Quality Guaranteed</div>
                      <div style="font-size:var(--text-xs);color:var(--color-text-muted)">Premium ingredients</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- CATEGORIES -->
        <section class="section" aria-label="Product categories">
          <div class="container">
            <div class="section-header">
              <h2>Shop By Category</h2>
              <p>Explore our handcrafted collections</p>
            </div>
            <div class="categories-scroll">
              ${categories.map(cat => `
                <div class="category-card" data-link="/products?cat=${cat.slug}" tabindex="0" role="button" aria-label="Browse ${cat.name}">
                  <div class="category-image">
                    <img src="${cat.image}" alt="${cat.name}" loading="lazy" />
                  </div>
                  <h3 class="category-name">${cat.name}</h3>
                  <p class="category-count">${DBHelpers.getProductsByCategory(cat.id).length} Products</p>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        ${Components.dividerOrnament()}

        <!-- FEATURED PRODUCTS -->
        <section class="section" style="background:var(--color-bg)" aria-label="Featured products">
          <div class="container">
            <div class="section-header">
              <h2>Our Bestsellers</h2>
              <p>The most loved treats from our kitchen</p>
            </div>
            <div class="product-grid">
              ${featured.map((p, i) => Components.productCard(p, i)).join('')}
            </div>
            <div style="text-align:center;margin-top:var(--space-2xl)">
              <a class="btn btn-secondary btn-lg" data-link="/products">
                View All Products ${Icons.arrowRight}
              </a>
            </div>
          </div>
        </section>

        <!-- WHY DTS -->
        <section class="section" aria-label="Why choose DTS">
          <div class="container">
            <div class="section-header">
              <h2>Why DTS Chocolate?</h2>
              <p>What makes us special</p>
            </div>
            <div class="grid grid-3">
              <div class="card-glass" style="padding:var(--space-xl);text-align:center">
                <div class="about-value-icon" style="margin:0 auto var(--space-md)">
                  ${Icons.leaf}
                </div>
                <h4 style="margin-bottom:var(--space-sm)">Premium Ingredients</h4>
                <p style="font-size:var(--text-sm);color:var(--color-text-muted)">We source the finest cocoa, real butter, and fresh dry fruits to ensure every bite is exceptional.</p>
              </div>
              <div class="card-glass" style="padding:var(--space-xl);text-align:center">
                <div class="about-value-icon" style="margin:0 auto var(--space-md)">
                  ${Icons.sparkles}
                </div>
                <h4 style="margin-bottom:var(--space-sm)">Handcrafted Daily</h4>
                <p style="font-size:var(--text-sm);color:var(--color-text-muted)">Every chocolate, cookie, and donut is made fresh by hand with love and care. No mass production.</p>
              </div>
              <div class="card-glass" style="padding:var(--space-xl);text-align:center">
                <div class="about-value-icon" style="margin:0 auto var(--space-md)">
                  ${Icons.gift}
                </div>
                <h4 style="margin-bottom:var(--space-sm)">Custom Gift Boxes</h4>
                <p style="font-size:var(--text-sm);color:var(--color-text-muted)">Perfect for weddings, birthdays, and festivals. Design your own gift box with our customization options.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- TESTIMONIALS -->
        <section class="section" style="background:var(--color-bg)" aria-label="Customer testimonials">
          <div class="container">
            <div class="section-header">
              <h2>What Our Customers Say</h2>
              <p>Real reviews from real chocolate lovers</p>
            </div>
            <div class="testimonials-grid">
              ${testimonials.map(t => `
                <div class="card-glass testimonial-card">
                  <div class="testimonial-rating">
                    ${Components.rating(t.rating)}
                  </div>
                  <p class="testimonial-text">"${t.text}"</p>
                  <div class="testimonial-author">
                    <div class="avatar avatar-placeholder">${t.name.charAt(0)}</div>
                    <div>
                      <div class="testimonial-author-name">${t.name}</div>
                      <div class="testimonial-author-role">${t.role}</div>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- NEWSLETTER -->
        <section class="section" aria-label="Newsletter signup">
          <div class="container">
            <div class="newsletter">
              <h2>Stay in the Sweet Loop</h2>
              <p>Get exclusive offers, new product launches, and festive discounts delivered to your inbox.</p>
              <form class="newsletter-form" onsubmit="event.preventDefault();Toast.show('Thanks for subscribing!','success')">
                <input class="input" type="email" placeholder="your@email.com" required aria-label="Email address" />
                <button class="btn btn-dark" type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </section>

      </main>

      <div id="cartDrawerContainer">${Layout.renderCartDrawer()}</div>
      ${Layout.renderFooter()}
    `;

    Layout.initNavbarScroll();
    Layout.setActiveNavLink();
    Layout.initSearchHandler();
    Pages.initIntersectionObserver();
  },

  /* ======================== PRODUCTS CATALOG ======================== */
  products(container) {
    // Parse query params from hash
    const hash = window.location.hash;
    const queryStr = hash.includes('?') ? hash.split('?')[1] : '';
    const params = new URLSearchParams(queryStr);
    const activeCat = params.get('cat') || 'all';
    const searchQuery = params.get('search') || '';
    const sort = params.get('sort') || 'popular';

    const catMap = {
      'all': 'all',
      'chocolates': 'cat_chocolates',
      'cookies': 'cat_cookies',
      'donuts': 'cat_donuts'
    };

    const products = DBHelpers.filterProducts({
      category: catMap[activeCat] || activeCat,
      sort: sort,
      search: searchQuery
    });

    container.innerHTML = `
      ${Layout.renderNavbar()}
      <main class="main-content">
        <div class="container">
          ${Components.breadcrumb([
            { label: 'Home', href: '/' },
            { label: 'Shop' }
          ])}

          <div style="margin-bottom:var(--space-xl)">
            <h1 style="font-family:var(--font-heading-sc);margin-bottom:var(--space-sm)">
              ${searchQuery ? `Search: "${searchQuery}"` : activeCat !== 'all' ? activeCat.charAt(0).toUpperCase() + activeCat.slice(1) : 'All Products'}
            </h1>
            <p style="color:var(--color-text-muted)">${products.length} product${products.length !== 1 ? 's' : ''} found</p>
          </div>

          <!-- Category Chips -->
          <div style="display:flex;flex-wrap:wrap;gap:var(--space-sm);margin-bottom:var(--space-xl)">
            ${['all', 'chocolates', 'cookies', 'donuts'].map(cat => `
              <button class="chip ${activeCat === cat ? 'active' : ''}" onclick="Router.navigate('/products?cat=${cat}')">
                ${cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            `).join('')}
          </div>

          <!-- Toolbar -->
          <div class="catalog-toolbar">
            <div class="catalog-count">
              Showing ${products.length} products
            </div>
            <div class="catalog-sort">
              <label for="sortSelect">Sort by:</label>
              <select class="input" id="sortSelect" style="width:auto;padding:8px 36px 8px 12px" onchange="Router.navigate('/products?cat=${activeCat}&sort=' + this.value)">
                <option value="popular" ${sort === 'popular' ? 'selected' : ''}>Most Popular</option>
                <option value="rating" ${sort === 'rating' ? 'selected' : ''}>Highest Rated</option>
                <option value="price-low" ${sort === 'price-low' ? 'selected' : ''}>Price: Low to High</option>
                <option value="price-high" ${sort === 'price-high' ? 'selected' : ''}>Price: High to Low</option>
                <option value="newest" ${sort === 'newest' ? 'selected' : ''}>Newest</option>
              </select>
            </div>
          </div>

          <!-- Product Grid -->
          ${products.length > 0
            ? `<div class="product-grid">${products.map((p, i) => Components.productCard(p, i)).join('')}</div>`
            : Components.emptyState('search', 'No products found', 'Try a different search or browse our categories', 'View All', '/products')
          }

        </div>
      </main>
      <div id="cartDrawerContainer">${Layout.renderCartDrawer()}</div>
      ${Layout.renderFooter()}
    `;

    Layout.initNavbarScroll();
    Layout.setActiveNavLink();
    Layout.initSearchHandler();
    Pages.initIntersectionObserver();
  },

  /* ======================== PRODUCT DETAIL ======================== */
  productDetail(container, params) {
    const product = DBHelpers.getProductBySlug(params.slug);

    if (!product) {
      Pages.notFound(container);
      return;
    }

    const reviews = DBHelpers.getProductReviews(product.id);
    const related = DB.products.filter(p => p.categoryId === product.categoryId && p.id !== product.id && p.isActive).slice(0, 4);
    const discount = product.compareAtPrice ? Math.round((1 - product.price / product.compareAtPrice) * 100) : 0;

    container.innerHTML = `
      ${Layout.renderNavbar()}
      <main class="main-content">
        <div class="container">
          ${Components.breadcrumb([
            { label: 'Home', href: '/' },
            { label: 'Shop', href: '/products' },
            { label: product.category, href: `/products?cat=${product.category.toLowerCase()}` },
            { label: product.name }
          ])}

          <div class="product-detail">
            <!-- Gallery -->
            <div class="product-gallery animate-fade-in">
              <div class="product-gallery-main">
                <img src="${product.images[0]}" alt="${product.name}" id="productMainImage" />
              </div>
            </div>

            <!-- Info -->
            <div class="product-info animate-fade-in-up">
              <p class="product-info-category">${product.category}</p>
              <h1>${product.name}</h1>

              <div class="product-info-rating">
                ${Components.rating(product.avgRating, product.reviewCount)}
                ${product.stock > 0
                  ? `<span class="badge badge-success">In Stock</span>`
                  : `<span class="badge badge-error">Out of Stock</span>`
                }
                ${discount > 0 ? `<span class="badge badge-new">${discount}% OFF</span>` : ''}
              </div>

              <div class="product-info-price">
                ${DBHelpers.formatPrice(product.price)}
                ${product.compareAtPrice ? `<span class="price-original" style="margin-left:var(--space-sm)">${DBHelpers.formatPrice(product.compareAtPrice)}</span>` : ''}
              </div>

              <p class="product-info-desc">${product.description}</p>

              <!-- Variants -->
              ${product.variants.length > 0 ? `
                <div class="product-options">
                  <div>
                    <p class="product-option-label">Size / Quantity</p>
                    <div class="product-variants" id="variantSelector">
                      ${product.variants.map((v, i) => `
                        <button
                          class="chip ${i === 0 ? 'active' : ''}"
                          data-variant-id="${v.id}"
                          data-price="${v.price}"
                          onclick="Pages.selectVariant(this, '${v.id}', ${v.price})"
                        >
                          ${v.name} — ${DBHelpers.formatPrice(v.price)}
                        </button>
                      `).join('')}
                    </div>
                  </div>
                </div>
              ` : ''}

              <!-- Add to Cart -->
              <div class="product-add-section">
                <div class="qty-selector" id="productQty">
                  <button class="qty-btn" onclick="Pages.updateProductQty(-1)" aria-label="Decrease">${Icons.minus}</button>
                  <span class="qty-value" id="productQtyValue">1</span>
                  <button class="qty-btn" onclick="Pages.updateProductQty(1)" aria-label="Increase">${Icons.plus}</button>
                </div>
                <button
                  class="btn btn-primary btn-lg"
                  onclick="Pages.addProductToCart('${product.id}')"
                  ${product.stock <= 0 ? 'disabled' : ''}
                >
                  ${Icons.cart} Add to Cart
                </button>
              </div>

              <!-- Meta info -->
              <div class="product-meta">
                <div class="product-meta-item">
                  ${Icons.package}
                  <span><strong>Shelf Life:</strong> ${product.shelfLife}</span>
                </div>
                <div class="product-meta-item">
                  ${Icons.leaf}
                  <span><strong>Ingredients:</strong> ${product.ingredients.join(', ')}</span>
                </div>
                <div class="product-meta-item">
                  ${Icons.alertCircle}
                  <span><strong>Allergens:</strong> ${product.allergens.join(', ')}</span>
                </div>
                <div class="product-meta-item">
                  ${Icons.truck}
                  <span><strong>Delivery:</strong> Free on orders above ₹500. Same-day available in Hyderabad.</span>
                </div>
                <div class="product-meta-item">
                  ${Icons.shield}
                  <span><strong>Quality Guarantee:</strong> 100% satisfaction or full refund</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Reviews Section -->
          <section class="section" style="margin-top:var(--space-2xl)">
            <h2 style="font-family:var(--font-heading-sc);margin-bottom:var(--space-xl)">Customer Reviews</h2>
            ${reviews.length > 0 ? reviews.map(r => `
              <div style="padding:var(--space-lg);border-bottom:1px solid var(--color-border)">
                <div style="display:flex;align-items:center;gap:var(--space-md);margin-bottom:var(--space-sm)">
                  <div class="avatar avatar-placeholder avatar-sm">${r.userName.charAt(0)}</div>
                  <div>
                    <strong style="font-size:var(--text-sm)">${r.userName}</strong>
                    ${r.isVerifiedPurchase ? `<span class="badge badge-success" style="margin-left:var(--space-sm)">Verified</span>` : ''}
                  </div>
                  <span style="font-size:var(--text-xs);color:var(--color-text-muted);margin-left:auto">${r.createdAt}</span>
                </div>
                ${Components.rating(r.rating)}
                <p style="margin-top:var(--space-sm);font-size:var(--text-sm);color:var(--color-text)">${r.comment}</p>
              </div>
            `).join('') : '<p style="color:var(--color-text-muted)">No reviews yet. Be the first to review!</p>'}
          </section>

          <!-- Related Products -->
          ${related.length > 0 ? `
            <section class="section">
              <div class="section-header">
                <h2>You May Also Like</h2>
              </div>
              <div class="product-grid">
                ${related.map((p, i) => Components.productCard(p, i)).join('')}
              </div>
            </section>
          ` : ''}
        </div>
      </main>
      <div id="cartDrawerContainer">${Layout.renderCartDrawer()}</div>
      ${Layout.renderFooter()}
    `;

    // Store current product data for add-to-cart
    Pages._currentProduct = product;
    Pages._currentQty = 1;
    Pages._currentVariant = product.variants[0]?.id || null;
    Pages._currentPrice = product.variants[0]?.price || product.price;

    Layout.initNavbarScroll();
    Layout.setActiveNavLink();
    Layout.initSearchHandler();
    Pages.initIntersectionObserver();
  },

  /* ======================== CART PAGE ======================== */
  cart(container) {
    const cart = CartStore.getState();
    const subtotal = CartActions.getTotal();
    const deliveryFee = subtotal >= 500 ? 0 : 49;
    const total = subtotal + deliveryFee;

    container.innerHTML = `
      ${Layout.renderNavbar()}
      <main class="main-content">
        <div class="container">
          ${Components.breadcrumb([
            { label: 'Home', href: '/' },
            { label: 'Cart' }
          ])}
          <h1 style="font-family:var(--font-heading-sc);margin-bottom:var(--space-xl)">Shopping Cart</h1>

          ${cart.items.length > 0 ? `
            <div class="cart-layout">
              <div class="cart-items">
                ${cart.items.map(item => `
                  <div class="cart-item animate-fade-in">
                    <img class="cart-item-image" src="${item.image}" alt="${item.name}" />
                    <div class="cart-item-info">
                      <h4 class="cart-item-name">${item.name}</h4>
                      <p class="cart-item-variant">${item.variant || item.category}</p>
                      <p style="font-family:var(--font-heading);font-weight:var(--weight-bold);color:var(--color-primary);font-size:var(--text-lg)">${DBHelpers.formatPrice(item.price)}</p>
                      <div class="cart-item-actions">
                        ${Components.quantitySelector(item.id, item.quantity, item.variant)}
                        <span style="font-weight:var(--weight-bold);font-family:var(--font-heading);color:var(--color-text-dark)">${DBHelpers.formatPrice(item.price * item.quantity)}</span>
                        <button class="cart-item-remove" onclick="CartActions.removeItem('${item.id}', ${item.variant ? `'${item.variant}'` : 'null'});Router.navigate('/cart')">
                          ${Icons.trash} Remove
                        </button>
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>

              <div class="cart-summary animate-fade-in-up">
                <h3>Order Summary</h3>
                <div class="divider"></div>
                <div class="cart-summary-row">
                  <span>Subtotal (${CartActions.getCount()} items)</span>
                  <span style="font-weight:var(--weight-semibold);color:var(--color-text-dark)">${DBHelpers.formatPrice(subtotal)}</span>
                </div>
                <div class="cart-summary-row">
                  <span>Delivery</span>
                  <span style="color:${deliveryFee === 0 ? 'var(--color-success)' : 'var(--color-text-dark)'};font-weight:var(--weight-semibold)">
                    ${deliveryFee === 0 ? 'FREE' : DBHelpers.formatPrice(deliveryFee)}
                  </span>
                </div>
                ${deliveryFee > 0 ? `
                  <p style="font-size:var(--text-xs);color:var(--color-success);margin-top:var(--space-xs)">
                    Add ${DBHelpers.formatPrice(500 - subtotal)} more for free delivery
                  </p>
                ` : ''}
                <div class="cart-summary-total cart-summary-row">
                  <span>Total</span>
                  <span>${DBHelpers.formatPrice(total)}</span>
                </div>
                <a class="btn btn-primary btn-lg" style="width:100%;text-align:center;margin-top:var(--space-lg);display:block" data-link="/checkout">
                  Proceed to Checkout ${Icons.arrowRight}
                </a>
                <a class="btn btn-ghost" style="width:100%;text-align:center;margin-top:var(--space-sm);display:block" data-link="/products">
                  Continue Shopping
                </a>
              </div>
            </div>
          ` : Components.emptyState('cart', 'Your cart is empty', 'Looks like you haven\'t added anything yet. Browse our delicious collection!', 'Start Shopping', '/products')}
        </div>
      </main>
      <div id="cartDrawerContainer">${Layout.renderCartDrawer()}</div>
      ${Layout.renderFooter()}
    `;

    Layout.initNavbarScroll();
    Layout.setActiveNavLink();
    Layout.initSearchHandler();
  },

  /* ======================== CHECKOUT ======================== */
  checkout(container) {
    const cart = CartStore.getState();
    const auth = AuthStore.getState();
    const subtotal = CartActions.getTotal();
    const deliveryFee = subtotal >= 500 ? 0 : 49;
    const total = subtotal + deliveryFee;

    if (cart.items.length === 0) {
      Router.navigate('/cart');
      return;
    }

    container.innerHTML = `
      ${Layout.renderNavbar()}
      <main class="main-content">
        <div class="container">
          ${Components.breadcrumb([
            { label: 'Home', href: '/' },
            { label: 'Cart', href: '/cart' },
            { label: 'Checkout' }
          ])}
          <h1 style="font-family:var(--font-heading-sc);margin-bottom:var(--space-xl)">Checkout</h1>

          <!-- Progress Steps -->
          <div class="steps">
            <div class="step completed"><span class="step-number">${Icons.check}</span><span class="step-label">Cart</span></div>
            <div class="step-connector completed"></div>
            <div class="step active"><span class="step-number">2</span><span class="step-label">Details</span></div>
            <div class="step-connector"></div>
            <div class="step"><span class="step-number">3</span><span class="step-label">Payment</span></div>
            <div class="step-connector"></div>
            <div class="step"><span class="step-number">4</span><span class="step-label">Confirm</span></div>
          </div>

          <div class="checkout-layout">
            <form class="checkout-form-section" id="checkoutForm" onsubmit="event.preventDefault(); Pages.placeOrder()">

              <!-- Contact -->
              <div class="checkout-form-group animate-fade-in-up">
                <h3>Contact Information</h3>
                <div class="form-row">
                  <div class="input-group">
                    <label class="input-label" for="checkoutName">Full Name</label>
                    <input class="input" id="checkoutName" type="text" placeholder="Your full name" value="${auth.user?.name || ''}" required />
                  </div>
                  <div class="input-group">
                    <label class="input-label" for="checkoutPhone">Phone</label>
                    <input class="input" id="checkoutPhone" type="tel" placeholder="+91 XXXXX XXXXX" value="${auth.user?.phone || ''}" required />
                  </div>
                </div>
                <div class="input-group" style="margin-top:var(--space-md)">
                  <label class="input-label" for="checkoutEmail">Email</label>
                  <input class="input" id="checkoutEmail" type="email" placeholder="your@email.com" value="${auth.user?.email || ''}" required />
                </div>
              </div>

              <!-- Delivery Address -->
              <div class="checkout-form-group animate-fade-in-up stagger-2">
                <h3>Delivery Address</h3>
                <div class="input-group">
                  <label class="input-label" for="checkoutAddress1">Address Line 1</label>
                  <input class="input" id="checkoutAddress1" type="text" placeholder="House/Flat no., Street, Area" required />
                </div>
                <div class="input-group" style="margin-top:var(--space-md)">
                  <label class="input-label" for="checkoutAddress2">Address Line 2 (Optional)</label>
                  <input class="input" id="checkoutAddress2" type="text" placeholder="Landmark, Building name" />
                </div>
                <div class="form-row" style="margin-top:var(--space-md)">
                  <div class="input-group">
                    <label class="input-label" for="checkoutCity">City</label>
                    <input class="input" id="checkoutCity" type="text" value="Hyderabad" required />
                  </div>
                  <div class="input-group">
                    <label class="input-label" for="checkoutPincode">Pincode</label>
                    <input class="input" id="checkoutPincode" type="text" placeholder="500072" maxlength="6" required />
                  </div>
                </div>
              </div>

              <!-- Payment -->
              <div class="checkout-form-group animate-fade-in-up stagger-3">
                <h3>Payment Method</h3>
                <div class="payment-methods">
                  <div class="payment-method selected" onclick="Pages.selectPayment(this)" data-method="cod">
                    <span class="payment-method-radio"></span>
                    <span style="font-size:var(--text-xl)">🏠</span>
                    <div>
                      <div style="font-weight:var(--weight-semibold)">Cash on Delivery</div>
                      <div style="font-size:var(--text-xs);color:var(--color-text-muted)">Pay when your order arrives</div>
                    </div>
                  </div>
                  <div class="payment-method" style="opacity:0.5; cursor:not-allowed">
                    <span class="payment-method-radio"></span>
                    <span style="font-size:var(--text-xl)">💳</span>
                    <div>
                      <div style="font-weight:var(--weight-semibold)">Online Payment (Coming Soon)</div>
                      <div style="font-size:var(--text-xs);color:var(--color-text-muted)">UPI / Cards / Net Banking</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Notes -->
              <div class="checkout-form-group animate-fade-in-up stagger-4">
                <h3>Special Instructions</h3>
                <textarea class="input" id="checkoutNotes" placeholder="Any special requests or delivery instructions..." rows="3"></textarea>
              </div>
            </form>

            <!-- Order Summary Sidebar -->
            <div class="cart-summary animate-fade-in-up">
              <h3>Order Summary</h3>
              <div class="divider"></div>
              ${cart.items.map(item => `
                <div style="display:flex;gap:var(--space-sm);padding:var(--space-sm) 0;border-bottom:1px solid var(--color-border)">
                  <img src="${item.image}" alt="${item.name}" style="width:48px;height:48px;border-radius:var(--radius-sm);object-fit:cover" />
                  <div style="flex:1;min-width:0">
                    <p style="font-size:var(--text-sm);font-weight:var(--weight-medium)">${item.name}</p>
                    <p style="font-size:var(--text-xs);color:var(--color-text-muted)">Qty: ${item.quantity}</p>
                  </div>
                  <span style="font-weight:var(--weight-semibold);font-size:var(--text-sm)">${DBHelpers.formatPrice(item.price * item.quantity)}</span>
                </div>
              `).join('')}
              <div class="cart-summary-row" style="margin-top:var(--space-md)">
                <span>Subtotal</span>
                <span>${DBHelpers.formatPrice(subtotal)}</span>
              </div>
              <div class="cart-summary-row">
                <span>Delivery</span>
                <span style="color:${deliveryFee === 0 ? 'var(--color-success)' : 'inherit'}">${deliveryFee === 0 ? 'FREE' : DBHelpers.formatPrice(deliveryFee)}</span>
              </div>
              <div class="cart-summary-total cart-summary-row">
                <span>Total</span>
                <span>${DBHelpers.formatPrice(total)}</span>
              </div>
              <button type="submit" form="checkoutForm" class="btn btn-primary btn-lg" style="width:100%;margin-top:var(--space-lg)">
                ${Icons.whatsapp} Place Order via WhatsApp
              </button>
              <p style="font-size:var(--text-xs);color:var(--color-text-muted);text-align:center;margin-top:var(--space-sm)">
                You will be redirected to WhatsApp to confirm your order
              </p>
            </div>
          </div>
        </div>
      </main>
      <div id="cartDrawerContainer">${Layout.renderCartDrawer()}</div>
      ${Layout.renderFooter()}
    `;

    Layout.initNavbarScroll();
    Layout.setActiveNavLink();
    Layout.initSearchHandler();
  },

  /* ======================== LOGIN ======================== */
  login(container) {
    container.innerHTML = `
      ${Layout.renderNavbar()}
      <main class="main-content auth-page">
        <div class="auth-card animate-scale-in">
          <div class="auth-header">
            <img src="assets/images/logo.jpeg" alt="DTS" style="width:64px;height:64px;border-radius:var(--radius-full);margin:0 auto var(--space-md)" />
            <h1>Welcome Back</h1>
            <p>Sign in to your DTS Chocolate account</p>
          </div>

          <div class="auth-social-buttons">
            <button class="btn btn-secondary" style="flex:1" onclick="AuthActions.login('google@user.com','pass')">
              ${Icons.google} Google
            </button>
          </div>

          <div class="auth-divider">
            <span>or sign in with email</span>
          </div>

          <form class="auth-form" onsubmit="event.preventDefault();AuthActions.login(document.getElementById('loginEmail').value, document.getElementById('loginPass').value)">
            <div class="input-group">
              <label class="input-label" for="loginEmail">Email</label>
              <input class="input" id="loginEmail" type="email" placeholder="your@email.com" required />
            </div>
            <div class="input-group">
              <label class="input-label" for="loginPass">Password</label>
              <input class="input" id="loginPass" type="password" placeholder="Enter your password" required />
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center">
              <label style="display:flex;align-items:center;gap:var(--space-xs);font-size:var(--text-sm);cursor:pointer">
                <input type="checkbox" style="accent-color:var(--color-primary)" /> Remember me
              </label>
              <a style="font-size:var(--text-sm);color:var(--color-primary);cursor:pointer">Forgot password?</a>
            </div>
            <button class="btn btn-primary btn-lg" type="submit" style="width:100%">Sign In</button>
          </form>

          <div class="auth-footer">
            Don't have an account? <a data-link="/register">Create one</a>
          </div>
        </div>
      </main>
      <div id="cartDrawerContainer">${Layout.renderCartDrawer()}</div>
      ${Layout.renderFooter()}
    `;

    Layout.initNavbarScroll();
    Layout.setActiveNavLink();
  },

  /* ======================== REGISTER ======================== */
  register(container) {
    container.innerHTML = `
      ${Layout.renderNavbar()}
      <main class="main-content auth-page">
        <div class="auth-card animate-scale-in">
          <div class="auth-header">
            <img src="assets/images/logo.jpeg" alt="DTS" style="width:64px;height:64px;border-radius:var(--radius-full);margin:0 auto var(--space-md)" />
            <h1>Create Account</h1>
            <p>Join the DTS Chocolate family</p>
          </div>

          <form class="auth-form" onsubmit="event.preventDefault();AuthActions.register(document.getElementById('regName').value, document.getElementById('regEmail').value, document.getElementById('regPass').value)">
            <div class="input-group">
              <label class="input-label" for="regName">Full Name</label>
              <input class="input" id="regName" type="text" placeholder="Your full name" required />
            </div>
            <div class="input-group">
              <label class="input-label" for="regEmail">Email</label>
              <input class="input" id="regEmail" type="email" placeholder="your@email.com" required />
            </div>
            <div class="input-group">
              <label class="input-label" for="regPhone">Phone</label>
              <input class="input" id="regPhone" type="tel" placeholder="+91 XXXXX XXXXX" />
            </div>
            <div class="input-group">
              <label class="input-label" for="regPass">Password</label>
              <input class="input" id="regPass" type="password" placeholder="Min. 8 characters" required minlength="8" />
            </div>
            <label style="display:flex;align-items:flex-start;gap:var(--space-sm);font-size:var(--text-sm);cursor:pointer">
              <input type="checkbox" style="accent-color:var(--color-primary);margin-top:3px" required />
              <span>I agree to the <a style="color:var(--color-primary)">Terms of Service</a> and <a style="color:var(--color-primary)">Privacy Policy</a></span>
            </label>
            <button class="btn btn-primary btn-lg" type="submit" style="width:100%">Create Account</button>
          </form>

          <div class="auth-footer">
            Already have an account? <a data-link="/login">Sign in</a>
          </div>
        </div>
      </main>
      <div id="cartDrawerContainer">${Layout.renderCartDrawer()}</div>
      ${Layout.renderFooter()}
    `;

    Layout.initNavbarScroll();
    Layout.setActiveNavLink();
  },

  /* ======================== ACCOUNT ======================== */
  account(container) {
    const auth = AuthStore.getState();
    if (!auth.isAuthenticated) {
      Router.navigate('/login');
      return;
    }

    container.innerHTML = `
      ${Layout.renderNavbar()}
      <main class="main-content">
        <div class="container">
          <h1 style="font-family:var(--font-heading-sc);margin-bottom:var(--space-xl)">My Account</h1>

          <div class="grid grid-3" style="gap:var(--space-xl)">
            <!-- Profile Card -->
            <div class="card animate-fade-in-up" style="grid-column:1/-1;padding:var(--space-xl)">
              <div style="display:flex;align-items:center;gap:var(--space-lg)">
                <div class="avatar avatar-lg avatar-placeholder" style="width:72px;height:72px;font-size:var(--text-2xl)">${auth.user.name.charAt(0).toUpperCase()}</div>
                <div>
                  <h3>${auth.user.name}</h3>
                  <p style="color:var(--color-text-muted)">${auth.user.email}</p>
                  <p style="font-size:var(--text-sm);color:var(--color-text-muted)">${auth.user.phone || 'No phone added'}</p>
                </div>
                <button class="btn btn-ghost btn-sm" style="margin-left:auto" onclick="AuthActions.logout()">
                  ${Icons.logout} Sign Out
                </button>
              </div>
            </div>

            <!-- Quick Actions -->
            <div class="card animate-fade-in-up stagger-1" style="padding:var(--space-xl);cursor:pointer" data-link="/orders">
              <div style="display:flex;align-items:center;gap:var(--space-md)">
                <div class="about-value-icon">${Icons.package}</div>
                <div>
                  <h4>My Orders</h4>
                  <p style="font-size:var(--text-sm);color:var(--color-text-muted)">Track & manage your orders</p>
                </div>
              </div>
            </div>

            <div class="card animate-fade-in-up stagger-2" style="padding:var(--space-xl);cursor:pointer" data-link="/cart">
              <div style="display:flex;align-items:center;gap:var(--space-md)">
                <div class="about-value-icon">${Icons.cart}</div>
                <div>
                  <h4>My Cart</h4>
                  <p style="font-size:var(--text-sm);color:var(--color-text-muted)">${CartActions.getCount()} items in cart</p>
                </div>
              </div>
            </div>

            <div class="card animate-fade-in-up stagger-3" style="padding:var(--space-xl);cursor:pointer" data-link="/products">
              <div style="display:flex;align-items:center;gap:var(--space-md)">
                <div class="about-value-icon">${Icons.heart}</div>
                <div>
                  <h4>Browse Products</h4>
                  <p style="font-size:var(--text-sm);color:var(--color-text-muted)">Discover new flavors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div id="cartDrawerContainer">${Layout.renderCartDrawer()}</div>
      ${Layout.renderFooter()}
    `;

    Layout.initNavbarScroll();
    Layout.setActiveNavLink();
    Layout.initSearchHandler();
  },

  /* ======================== ABOUT ======================== */
  about(container) {
    container.innerHTML = `
      ${Layout.renderNavbar()}
      <main class="main-content">
        <div class="container">
          <div class="about-hero animate-fade-in-up">
            <p style="font-size:var(--text-sm);color:var(--color-primary);text-transform:uppercase;letter-spacing:0.1em;font-weight:var(--weight-semibold);margin-bottom:var(--space-md)">Our Story</p>
            <h1 style="font-family:var(--font-heading);max-width:700px;margin:0 auto var(--space-lg)">
              Freshly Baked With <span class="text-gradient">Love</span>
            </h1>
            <p style="color:var(--color-text-muted);font-size:var(--text-lg);max-width:600px;margin:0 auto">
              From a small kitchen in Kukatpally to Hyderabad's favorite chocolate brand — this is the DTS Chocolate story.
            </p>
          </div>

          <div class="about-content animate-fade-in-up">
            <div class="about-image">
              <img src="assets/images/menu.jpeg" alt="DTS Chocolate Menu" />
            </div>
            <div>
              <h2 style="margin-bottom:var(--space-lg)">The DTS Promise</h2>
              <p style="margin-bottom:var(--space-md)">DTS Chocolate was born from a simple belief: that handcrafted, freshly made chocolates can bring joy to every moment. Every chocolate, cookie, and donut we create is a labor of love.</p>
              <p style="margin-bottom:var(--space-md)">We source premium ingredients — real Belgian cocoa, fresh butter, California almonds, and locally sourced dry fruits — to ensure every bite is an experience worth savoring.</p>
              <p>Whether it's a corporate event, a wedding, a birthday, or simply a Tuesday evening treat — we're here to make your sweet moments extraordinary.</p>
            </div>
          </div>

          <div class="section">
            <div class="section-header">
              <h2>Our Values</h2>
            </div>
            <div class="about-values">
              <div class="about-value-card card-glass animate-fade-in-up stagger-1">
                <div class="about-value-icon">${Icons.leaf}</div>
                <h4>Quality First</h4>
                <p style="font-size:var(--text-sm);color:var(--color-text-muted)">Only the finest, freshest ingredients make it into our kitchen. No compromises.</p>
              </div>
              <div class="about-value-card card-glass animate-fade-in-up stagger-2">
                <div class="about-value-icon">${Icons.sparkles}</div>
                <h4>Made Fresh Daily</h4>
                <p style="font-size:var(--text-sm);color:var(--color-text-muted)">Nothing sits on a shelf. Everything is prepared fresh, ensuring maximum flavor and quality.</p>
              </div>
              <div class="about-value-card card-glass animate-fade-in-up stagger-3">
                <div class="about-value-icon">${Icons.heart}</div>
                <h4>Made With Love</h4>
                <p style="font-size:var(--text-sm);color:var(--color-text-muted)">Each product is handcrafted with care. We treat every order like it's for our own family.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div id="cartDrawerContainer">${Layout.renderCartDrawer()}</div>
      ${Layout.renderFooter()}
    `;

    Layout.initNavbarScroll();
    Layout.setActiveNavLink();
    Layout.initSearchHandler();
    Pages.initIntersectionObserver();
  },

  /* ======================== CONTACT ======================== */
  contact(container) {
    container.innerHTML = `
      ${Layout.renderNavbar()}
      <main class="main-content">
        <div class="container" style="max-width:900px">
          <div class="section-header animate-fade-in-up">
            <h1>Get in Touch</h1>
            <p>Have a question, custom order request, or just want to say hello? We'd love to hear from you!</p>
          </div>

          <div class="grid grid-2" style="gap:var(--space-2xl);margin-top:var(--space-2xl)">
            <!-- Contact Form -->
            <div class="animate-fade-in-up">
              <form class="auth-form" onsubmit="event.preventDefault();Toast.show('Message sent! We\\'ll get back to you soon.','success');this.reset()">
                <div class="input-group">
                  <label class="input-label" for="contactName">Your Name</label>
                  <input class="input" id="contactName" type="text" placeholder="Full name" required />
                </div>
                <div class="input-group">
                  <label class="input-label" for="contactEmail">Email</label>
                  <input class="input" id="contactEmail" type="email" placeholder="your@email.com" required />
                </div>
                <div class="input-group">
                  <label class="input-label" for="contactSubject">Subject</label>
                  <select class="input" id="contactSubject">
                    <option>General Inquiry</option>
                    <option>Custom Order Request</option>
                    <option>Bulk/Corporate Order</option>
                    <option>Delivery Issue</option>
                    <option>Feedback</option>
                    <option>Partnership</option>
                  </select>
                </div>
                <div class="input-group">
                  <label class="input-label" for="contactMsg">Message</label>
                  <textarea class="input" id="contactMsg" rows="5" placeholder="Tell us how we can help..." required></textarea>
                </div>
                <button class="btn btn-primary btn-lg" type="submit" style="width:100%">Send Message</button>
              </form>
            </div>

            <!-- Contact Info -->
            <div class="animate-fade-in-up stagger-2">
              <div style="display:flex;flex-direction:column;gap:var(--space-xl)">
                <div class="card-glass" style="padding:var(--space-lg)">
                  <div style="display:flex;align-items:flex-start;gap:var(--space-md)">
                    <div class="about-value-icon" style="flex-shrink:0">${Icons.mapPin}</div>
                    <div>
                      <h4 style="margin-bottom:var(--space-xs)">Visit Us</h4>
                      <p style="font-size:var(--text-sm);color:var(--color-text-muted)">Kukatpally, Hyderabad<br/>Telangana – 500072</p>
                    </div>
                  </div>
                </div>
                <div class="card-glass" style="padding:var(--space-lg)">
                  <div style="display:flex;align-items:flex-start;gap:var(--space-md)">
                    <div class="about-value-icon" style="flex-shrink:0">${Icons.phone}</div>
                    <div>
                      <h4 style="margin-bottom:var(--space-xs)">Call Us</h4>
                      <p style="font-size:var(--text-sm);color:var(--color-text-muted)">+91 93916 95574<br/>+91 99593 08679</p>
                    </div>
                  </div>
                </div>
                <div class="card-glass" style="padding:var(--space-lg)">
                  <div style="display:flex;align-items:flex-start;gap:var(--space-md)">
                    <div class="about-value-icon" style="flex-shrink:0">${Icons.clock}</div>
                    <div>
                      <h4 style="margin-bottom:var(--space-xs)">Hours</h4>
                      <p style="font-size:var(--text-sm);color:var(--color-text-muted)">Mon–Sat: 9AM – 9PM<br/>Sunday: 10AM – 6PM</p>
                    </div>
                  </div>
                </div>
                <div class="card-glass" style="padding:var(--space-lg)">
                  <div style="display:flex;align-items:flex-start;gap:var(--space-md)">
                    <div class="about-value-icon" style="flex-shrink:0">${Icons.whatsapp}</div>
                    <div>
                      <h4 style="margin-bottom:var(--space-xs)">WhatsApp</h4>
                      <p style="font-size:var(--text-sm);color:var(--color-text-muted)">
                        Quick orders & inquiries<br/>
                        <a href="https://wa.me/919391695574" target="_blank" rel="noopener" style="color:var(--color-primary);font-weight:var(--weight-semibold)">Chat with us</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div id="cartDrawerContainer">${Layout.renderCartDrawer()}</div>
      ${Layout.renderFooter()}
    `;

    Layout.initNavbarScroll();
    Layout.setActiveNavLink();
    Layout.initSearchHandler();
  },

  /* ======================== ORDERS ======================== */
  orders(container) {
    container.innerHTML = `
      ${Layout.renderNavbar()}
      <main class="main-content" style="background:var(--color-bg-subtle)">
        <div class="container" style="padding-top:var(--space-2xl);padding-bottom:var(--space-2xl)">
          ${Components.breadcrumb([
            { label: 'Home', href: '/' },
            { label: 'Account', href: '/account' },
            { label: 'Orders' }
          ])}
          <div class="account-layout" style="margin-top:var(--space-xl)">
            <div class="account-sidebar animate-fade-in-up">
              <div class="card" style="padding:var(--space-lg)">
                <div style="display:flex;align-items:center;gap:var(--space-md);margin-bottom:var(--space-lg)">
                  <div class="user-avatar" style="width:48px;height:48px;background:var(--color-primary);color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.2rem;font-weight:var(--weight-bold)">
                    T
                  </div>
                  <div>
                    <div style="font-weight:var(--weight-bold)">Test User</div>
                    <div style="font-size:var(--text-sm);color:var(--color-text-muted)">test@example.com</div>
                  </div>
                </div>
                <div class="divider"></div>
                <nav class="account-nav" style="display:flex;flex-direction:column;gap:var(--space-sm)">
                  <a data-link="/account" style="padding:var(--space-sm);border-radius:var(--radius-md);color:var(--color-text-dark);cursor:pointer;display:flex;align-items:center;gap:var(--space-sm)">${Icons.user} Profile</a>
                  <a data-link="/orders" style="padding:var(--space-sm);border-radius:var(--radius-md);background:rgba(146,64,14,0.08);color:var(--color-primary);font-weight:var(--weight-semibold);cursor:pointer;display:flex;align-items:center;gap:var(--space-sm)">${Icons.shoppingBag} Orders</a>
                  <a onclick="AuthActions.logout()" style="padding:var(--space-sm);border-radius:var(--radius-md);color:var(--color-text-muted);cursor:pointer;display:flex;align-items:center;gap:var(--space-sm);margin-top:var(--space-lg)">${Icons.logOut} Log Out</a>
                </nav>
              </div>
            </div>
            <div class="account-content animate-fade-in-up stagger-1">
              <h2 style="font-family:var(--font-heading-sc);margin-bottom:var(--space-lg)">Order History</h2>
              ${Components.emptyState('orders', 'No orders yet', 'You haven\'t placed any orders yet. Start shopping to fill this space!', 'Browse Products', '/products')}
            </div>
          </div>
        </div>
      </main>
      <div id="cartDrawerContainer">${Layout.renderCartDrawer()}</div>
      ${Layout.renderFooter()}
    `;

    Layout.initNavbarScroll();
    Layout.setActiveNavLink();
  },

  /* ======================== STATIC PAGES ======================== */
  _renderStaticPage(container, title, content) {
    container.innerHTML = `
      ${Layout.renderNavbar()}
      <main class="main-content">
        <div class="container" style="max-width:800px;padding-top:var(--space-2xl);padding-bottom:var(--space-2xl)">
          <h1 style="font-family:var(--font-heading-sc);margin-bottom:var(--space-xl);text-align:center">${title}</h1>
          <div class="card-glass" style="padding:var(--space-xl);line-height:1.8">
            ${content}
          </div>
        </div>
      </main>
      <div id="cartDrawerContainer">${Layout.renderCartDrawer()}</div>
      ${Layout.renderFooter()}
    `;
    Layout.initNavbarScroll();
    Layout.setActiveNavLink();
  },

  faq(container) {
    Pages._renderStaticPage(container, 'Frequently Asked Questions', \`
      <h3>How do I place an order?</h3>
      <p style="margin-bottom:var(--space-md)">Simply browse our products, add them to your cart, and proceed to checkout. Your order will be sent to us via WhatsApp for quick processing!</p>
      
      <h3>Do you offer Cash on Delivery (COD)?</h3>
      <p style="margin-bottom:var(--space-md)">Yes! Currently, Cash on Delivery is our primary payment method for all orders within Hyderabad.</p>
      
      <h3>How long does delivery take?</h3>
      <p style="margin-bottom:var(--space-md)">For Kukatpally and nearby areas, we usually deliver within 24-48 hours. Custom orders may take up to 3 days.</p>
    \`);
  },

  shipping(container) {
    Pages._renderStaticPage(container, 'Shipping Policy', \`
      <p style="margin-bottom:var(--space-md)">We currently deliver across Hyderabad. Delivery fees are calculated at checkout based on your location.</p>
      <ul style="margin-left:var(--space-xl);margin-bottom:var(--space-md)">
        <li>Free delivery on all orders above ₹500.</li>
        <li>Standard delivery fee of ₹49 for orders below ₹500.</li>
        <li>Orders placed before 5 PM are processed the same day.</li>
      </ul>
    \`);
  },

  returns(container) {
    Pages._renderStaticPage(container, 'Returns & Refunds', \`
      <p style="margin-bottom:var(--space-md)">Because our products are perishable food items, we do not accept returns. However, your satisfaction is our priority.</p>
      <p>If you receive a damaged product or an incorrect order, please contact us via WhatsApp immediately with a photo, and we will issue a replacement or refund.</p>
    \`);
  },

  privacy(container) {
    Pages._renderStaticPage(container, 'Privacy Policy', \`
      <p style="margin-bottom:var(--space-md)">At DTS Chocolate, we respect your privacy. We only collect the information necessary to process your orders (name, phone number, and delivery address).</p>
      <p>We do not share your personal information with third parties. Your data is used exclusively to ensure smooth delivery and customer support via WhatsApp.</p>
    \`);
  },

  terms(container) {
    Pages._renderStaticPage(container, 'Terms of Service', \`
      <p style="margin-bottom:var(--space-md)">By placing an order with DTS Chocolate, you agree to provide accurate delivery information. We reserve the right to cancel orders if the address is undeliverable or incomplete.</p>
      <p>All prices are subject to change without notice. Our liability is limited to the purchase price of the items ordered.</p>
    \`);
  },

  sitemap(container) {
    Pages._renderStaticPage(container, 'Sitemap', \`
      <ul style="margin-left:var(--space-xl);line-height:2">
        <li><a data-link="/">Home</a></li>
        <li><a data-link="/products">All Products</a></li>
        <li><a data-link="/about">About Us</a></li>
        <li><a data-link="/contact">Contact Us</a></li>
        <li><a data-link="/cart">Cart</a></li>
        <li><a data-link="/login">Login</a></li>
      </ul>
    \`);
  },

  /* ======================== 404 ======================== */
  notFound(container) {
    container.innerHTML = `
      ${Layout.renderNavbar()}
      <main class="main-content">
        <div class="container">
          ${Components.emptyState('search', 'Page Not Found', 'The page you are looking for doesn\'t exist or has been moved.', 'Go Home', '/')}
        </div>
      </main>
      <div id="cartDrawerContainer">${Layout.renderCartDrawer()}</div>
      ${Layout.renderFooter()}
    `;

    Layout.initNavbarScroll();
  },

  /* ======================== HELPERS ======================== */
  _currentProduct: null,
  _currentQty: 1,
  _currentVariant: null,
  _currentPrice: 0,

  selectVariant(btn, variantId, price) {
    document.querySelectorAll('#variantSelector .chip').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    Pages._currentVariant = variantId;
    Pages._currentPrice = price;
  },

  updateProductQty(delta) {
    Pages._currentQty = Math.max(1, Pages._currentQty + delta);
    const el = document.getElementById('productQtyValue');
    if (el) el.textContent = Pages._currentQty;
  },

  addProductToCart(productId) {
    const product = DBHelpers.getProduct(productId);
    if (product) {
      const productWithPrice = { ...product, price: Pages._currentPrice || product.price };
      CartActions.addItem(productWithPrice, Pages._currentQty, Pages._currentVariant);
      Layout.updateCartBadge();
      Layout.updateCartDrawer();
    }
  },

  selectPayment(el) {
    if (el.style.opacity === "0.5") return; // disabled
    document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('selected'));
    el.classList.add('selected');
  },

  placeOrder() {
    const orderNumber = DBHelpers.generateOrderNumber();
    const cart = CartStore.getState();
    const total = CartActions.getTotal();
    const deliveryFee = total >= 500 ? 0 : 49;
    const finalTotal = total + deliveryFee;

    // Collect details
    const name = document.getElementById('checkoutName').value.trim();
    const phone = document.getElementById('checkoutPhone').value.trim();
    const email = document.getElementById('checkoutEmail').value.trim();
    const address1 = document.getElementById('checkoutAddress1').value.trim();
    const address2 = document.getElementById('checkoutAddress2')?.value.trim() || '';
    const city = document.getElementById('checkoutCity').value.trim();
    const pincode = document.getElementById('checkoutPincode').value.trim();
    const notes = document.getElementById('checkoutNotes')?.value.trim() || '';
    
    // Generate WhatsApp Message
    let message = `*New Order - ${orderNumber}* 🍫\n\n`;
    message += `*Customer Details*\n`;
    message += `Name: ${name}\n`;
    message += `Phone: ${phone}\n`;
    message += `Email: ${email}\n\n`;
    
    message += `*Delivery Address*\n`;
    message += `${address1}\n`;
    if (address2) message += `${address2}\n`;
    message += `${city} - ${pincode}\n\n`;

    message += `*Order Items*\n`;
    cart.items.forEach(item => {
      const variantText = item.variant ? ` (${item.variant})` : '';
      message += `• ${item.name}${variantText} x ${item.quantity} = ₹${item.price * item.quantity}\n`;
    });

    message += `\n*Subtotal:* ₹${total}\n`;
    message += `*Delivery:* ${deliveryFee === 0 ? 'FREE' : '₹' + deliveryFee}\n`;
    message += `*Total Amount:* ₹${finalTotal}\n\n`;
    message += `*Payment Method:* Cash on Delivery\n`;
    
    if (notes) {
      message += `\n*Special Instructions:*\n${notes}\n`;
    }

    const businessNumber = "919391695574";
    const waLink = `https://wa.me/${businessNumber}?text=${encodeURIComponent(message)}`;

    // Simulate order placement
    Toast.show(`Redirecting to WhatsApp to complete your order...`, 'success');
    CartActions.clear();

    // Redirect to WhatsApp
    setTimeout(() => {
      window.open(waLink, '_blank');
      Router.navigate('/');
    }, 1500);
  },

  // Intersection Observer for scroll animations
  initIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-fade-in-up, .animate-fade-in, .animate-scale-in').forEach(el => {
      el.style.opacity = '0';
      observer.observe(el);
    });
  }
};

window.Pages = Pages;
