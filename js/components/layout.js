/* ============================================================
   DTS CHOCOLATE — LAYOUT COMPONENTS
   Navbar, Footer, Cart Drawer
   ============================================================ */

const Layout = {
  renderNavbar() {
    const cartCount = CartActions.getCount();
    const auth = AuthStore.getState();

    return `
      <nav class="navbar" id="navbar" role="navigation" aria-label="Main navigation">
        <div class="navbar-inner">
          <a class="navbar-brand" data-link="/">
            <img class="navbar-logo" src="assets/images/logo.jpeg" alt="DTS Chocolate logo" />
            <div class="navbar-brand-text">
              <span class="navbar-brand-name">DTS Chocolate</span>
              <span class="navbar-brand-tagline">Freshly Baked With Love</span>
            </div>
          </a>

          <div class="navbar-nav" id="navMenu">
            <a class="nav-link" data-link="/">Home</a>
            <a class="nav-link" data-link="/products">Shop</a>
            <a class="nav-link" data-link="/about">About</a>
            <a class="nav-link" data-link="/contact">Contact</a>
          </div>

          <div class="navbar-actions">
            <div class="navbar-search" id="navSearch">
              <input
                class="navbar-search-input"
                type="text"
                placeholder="Search chocolates..."
                id="navSearchInput"
                aria-label="Search products"
              />
              <button class="btn btn-icon btn-ghost" onclick="Layout.toggleSearch()" aria-label="Toggle search">
                ${Icons.search}
              </button>
            </div>

            <button class="cart-btn" onclick="Layout.toggleCartDrawer()" aria-label="Open cart">
              ${Icons.cart}
              <span class="cart-badge" id="cartBadge">${cartCount > 0 ? cartCount : ''}</span>
            </button>

            ${auth.isAuthenticated
              ? `<button class="btn btn-icon btn-ghost" onclick="Router.navigate('/account')" aria-label="Account">
                  ${Icons.user}
                </button>`
              : `<a class="btn btn-primary btn-sm" data-link="/login">Sign In</a>`
            }

            <button class="menu-toggle" id="menuToggle" onclick="Layout.toggleMobileMenu()" aria-label="Toggle menu" aria-expanded="false">
              <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>
      </nav>
    `;
  },

  renderFooter() {
    return `
      <footer class="footer" role="contentinfo">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">
              <div class="footer-brand-header">
                <img class="footer-logo" src="assets/images/logo.jpeg" alt="DTS Chocolate" />
                <span class="footer-brand-name">DTS Chocolate</span>
              </div>
              <p class="footer-brand-desc">
                Sweet moments, made with love. Freshly made & delicious handcrafted chocolates, cookies, and donuts from the heart of Hyderabad.
              </p>
              <div class="footer-socials">
                <a class="footer-social-link" href="https://instagram.com/dtschocolate" target="_blank" rel="noopener" aria-label="Instagram">
                  ${Icons.instagram}
                </a>
                <a class="footer-social-link" href="https://facebook.com/dtschocolate" target="_blank" rel="noopener" aria-label="Facebook">
                  ${Icons.facebook}
                </a>
                <a class="footer-social-link" href="https://wa.me/919391695574" target="_blank" rel="noopener" aria-label="WhatsApp">
                  ${Icons.whatsapp}
                </a>
              </div>
            </div>

            <div class="footer-col">
              <h4>Shop</h4>
              <div class="footer-links">
                <a class="footer-link" data-link="/products">All Products</a>
                <a class="footer-link" data-link="/products?cat=chocolates">Chocolates</a>
                <a class="footer-link" data-link="/products?cat=cookies">Cookies</a>
                <a class="footer-link" data-link="/products?cat=donuts">Donuts</a>
                <a class="footer-link" data-link="/products?cat=custom">Custom Orders</a>
              </div>
            </div>

            <div class="footer-col">
              <h4>Company</h4>
              <div class="footer-links">
                <a class="footer-link" data-link="/about">About Us</a>
                <a class="footer-link" data-link="/contact">Contact</a>
                <a class="footer-link" data-link="/faq">FAQs</a>
                <a class="footer-link" data-link="/shipping">Shipping Policy</a>
                <a class="footer-link" data-link="/returns">Returns & Refunds</a>
              </div>
            </div>

            <div class="footer-col">
              <h4>Contact Us</h4>
              <div class="footer-contact-item">
                ${Icons.mapPin}
                <span>Kukatpally, Hyderabad<br/>Telangana – 500072</span>
              </div>
              <div class="footer-contact-item">
                ${Icons.phone}
                <span>+91 93916 95574<br/>+91 99593 08679</span>
              </div>
              <div class="footer-contact-item">
                ${Icons.mail}
                <span>hello@dtschocolate.com</span>
              </div>
              <div class="footer-contact-item">
                ${Icons.clock}
                <span>Mon-Sat: 9AM - 9PM<br/>Sun: 10AM - 6PM</span>
              </div>
            </div>
          </div>

          <div class="footer-bottom">
            <p class="footer-copyright">&copy; ${new Date().getFullYear()} DTS Chocolate. All rights reserved. Made with love in Hyderabad.</p>
            <div class="footer-legal">
              <a data-link="/privacy">Privacy Policy</a>
              <a data-link="/terms">Terms of Service</a>
              <a data-link="/sitemap">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    `;
  },

  renderCartDrawer() {
    const cart = CartStore.getState();
    const total = CartActions.getTotal();
    const count = CartActions.getCount();

    const itemsHtml = cart.items.length > 0
      ? cart.items.map(item => `
          <div class="cart-item" style="display:flex;gap:var(--space-md);padding:var(--space-md);border-bottom:1px solid var(--color-border)">
            <img
              src="${item.image}"
              alt="${item.name}"
              style="width:64px;height:64px;border-radius:var(--radius-md);object-fit:cover;flex-shrink:0"
            />
            <div style="flex:1;min-width:0">
              <p style="font-weight:var(--weight-semibold);font-size:var(--text-sm);color:var(--color-text-dark);margin-bottom:2px">${item.name}</p>
              <p style="font-size:var(--text-xs);color:var(--color-text-muted)">${item.variant || item.category}</p>
              <div style="display:flex;align-items:center;justify-content:space-between;margin-top:var(--space-sm)">
                ${Components.quantitySelector(item.id, item.quantity, item.variant)}
                <span style="font-weight:var(--weight-bold);color:var(--color-primary);font-family:var(--font-heading)">${DBHelpers.formatPrice(item.price * item.quantity)}</span>
              </div>
            </div>
            <button
              class="btn btn-icon btn-ghost"
              style="align-self:flex-start;flex-shrink:0"
              onclick="CartActions.removeItem('${item.id}', ${item.variant ? `'${item.variant}'` : 'null'})"
              aria-label="Remove ${item.name}"
            >
              ${Icons.trash}
            </button>
          </div>
        `).join('')
      : Components.emptyState('cart', 'Your cart is empty', 'Looks like you haven\'t added anything yet. Browse our delicious collection!', 'Start Shopping', '/products');

    return `
      <div class="cart-drawer-overlay ${cart.isDrawerOpen ? 'open' : ''}" onclick="CartActions.toggleDrawer(false)"></div>
      <aside class="cart-drawer ${cart.isDrawerOpen ? 'open' : ''}" role="dialog" aria-label="Shopping cart">
        <div class="cart-drawer-header">
          <h3>Cart (${count})</h3>
          <button class="modal-close" onclick="CartActions.toggleDrawer(false)" aria-label="Close cart">
            ${Icons.x}
          </button>
        </div>
        <div class="cart-drawer-body">
          ${itemsHtml}
        </div>
        ${cart.items.length > 0 ? `
          <div class="cart-drawer-footer">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-md)">
              <span style="font-weight:var(--weight-semibold)">Subtotal</span>
              <span style="font-family:var(--font-heading);font-size:var(--text-xl);font-weight:var(--weight-bold);color:var(--color-primary)">${DBHelpers.formatPrice(total)}</span>
            </div>
            <p style="font-size:var(--text-xs);color:var(--color-text-muted);margin-bottom:var(--space-md)">Delivery charges calculated at checkout</p>
            <a class="btn btn-primary btn-lg" style="width:100%;text-align:center;display:block" data-link="/cart" onclick="CartActions.toggleDrawer(false)">
              View Cart & Checkout
            </a>
          </div>
        ` : ''}
      </aside>
    `;
  },

  // === INTERACTIVITY ===
  toggleMobileMenu() {
    const nav = document.getElementById('navMenu');
    const toggle = document.getElementById('menuToggle');
    nav.classList.toggle('open');
    toggle.classList.toggle('active');
    toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
  },

  toggleSearch() {
    const searchWrap = document.getElementById('navSearch');
    const input = document.getElementById('navSearchInput');
    searchWrap.classList.toggle('expanded');
    if (searchWrap.classList.contains('expanded')) {
      input.focus();
    }
  },

  toggleCartDrawer() {
    CartActions.toggleDrawer();
    Layout.updateCartDrawer();
  },

  updateCartDrawer() {
    const drawerContainer = document.getElementById('cartDrawerContainer');
    if (drawerContainer) {
      drawerContainer.innerHTML = Layout.renderCartDrawer();
    }
  },

  updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    if (badge) {
      const count = CartActions.getCount();
      badge.textContent = count > 0 ? count : '';
    }
  },

  initNavbarScroll() {
    if (window._navbarScrollInitialized) return;
    window._navbarScrollInitialized = true;

    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const navbar = document.getElementById('navbar');
      if (!navbar) return;

      const currentScroll = window.scrollY;
      if (currentScroll > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
      lastScroll = currentScroll;
    }, { passive: true });
  },

  setActiveNavLink() {
    const path = Router.getPath();
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('data-link');
      if (href === path || (href !== '/' && path.startsWith(href))) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  },

  initSearchHandler() {
    const input = document.getElementById('navSearchInput');
    if (!input) return;

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && input.value.trim()) {
        Router.navigate(`/products?search=${encodeURIComponent(input.value.trim())}`);
        Layout.toggleSearch();
        input.value = '';
      }
    });
  }
};

window.Layout = Layout;
