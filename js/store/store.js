/* ============================================================
   DTS CHOCOLATE — STATE STORE (Zustand-inspired)
   Reactive state management with localStorage persistence
   ============================================================ */

class Store {
  constructor(name, initialState = {}, options = {}) {
    this.name = name;
    this.state = { ...initialState };
    this.listeners = new Set();
    this.persist = options.persist || false;

    if (this.persist) {
      this.hydrate();
    }
  }

  hydrate() {
    try {
      const saved = localStorage.getItem(`dts_${this.name}`);
      if (saved) {
        const parsed = JSON.parse(saved);
        this.state = { ...this.state, ...parsed };
      }
    } catch (e) {
      console.warn(`Failed to hydrate store "${this.name}":`, e);
    }
  }

  save() {
    if (this.persist) {
      try {
        localStorage.setItem(`dts_${this.name}`, JSON.stringify(this.state));
      } catch (e) {
        console.warn(`Failed to persist store "${this.name}":`, e);
      }
    }
  }

  getState() {
    return { ...this.state };
  }

  setState(updater) {
    const prev = { ...this.state };
    if (typeof updater === 'function') {
      this.state = { ...this.state, ...updater(this.state) };
    } else {
      this.state = { ...this.state, ...updater };
    }
    this.save();
    this.notify(prev);
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify(prevState) {
    this.listeners.forEach(listener => {
      try {
        listener(this.state, prevState);
      } catch (e) {
        console.error('Store listener error:', e);
      }
    });
  }

  reset(initialState) {
    this.state = { ...initialState };
    this.save();
    this.notify({});
  }
}

/* === CART STORE === */
window.CartStore = new Store('cart', {
  items: [],
  isDrawerOpen: false
}, { persist: true });

// Cart actions
window.CartActions = {
  addItem(product, quantity = 1, variant = null) {
    const state = CartStore.getState();
    const existingIndex = state.items.findIndex(
      item => item.id === product.id && item.variant === variant
    );

    let newItems;
    if (existingIndex >= 0) {
      newItems = [...state.items];
      newItems[existingIndex] = {
        ...newItems[existingIndex],
        quantity: newItems[existingIndex].quantity + quantity
      };
    } else {
      newItems = [...state.items, {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        category: product.category,
        variant,
        quantity,
        addedAt: Date.now()
      }];
    }

    CartStore.setState({ items: newItems });
    Toast.show(`${product.name} added to cart`, 'success');
  },

  removeItem(productId, variant = null) {
    const state = CartStore.getState();
    const newItems = state.items.filter(
      item => !(item.id === productId && item.variant === variant)
    );
    CartStore.setState({ items: newItems });
  },

  updateQuantity(productId, quantity, variant = null) {
    if (quantity <= 0) {
      this.removeItem(productId, variant);
      return;
    }

    const state = CartStore.getState();
    const newItems = state.items.map(item => {
      if (item.id === productId && item.variant === variant) {
        return { ...item, quantity };
      }
      return item;
    });
    CartStore.setState({ items: newItems });
  },

  getTotal() {
    const state = CartStore.getState();
    return state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  },

  getCount() {
    const state = CartStore.getState();
    return state.items.reduce((sum, item) => sum + item.quantity, 0);
  },

  clear() {
    CartStore.setState({ items: [] });
  },

  toggleDrawer(open) {
    const state = CartStore.getState();
    CartStore.setState({ isDrawerOpen: open ?? !state.isDrawerOpen });
  }
};

/* === AUTH STORE === */
window.AuthStore = new Store('auth', {
  user: null,
  isAuthenticated: false,
  isLoading: false
}, { persist: true });

window.AuthActions = {
  login(email, password) {
    // Simulate auth
    AuthStore.setState({
      user: {
        id: 'user_1',
        name: email.split('@')[0],
        email,
        phone: '+91 93916 95574',
        role: 'CUSTOMER',
        avatar: null,
        addresses: [
          {
            id: 'addr_1',
            label: 'Home',
            fullName: 'Customer',
            line1: 'Kukatpally',
            city: 'Hyderabad',
            state: 'Telangana',
            pincode: '500072',
            phone: '+91 93916 95574',
            isDefault: true
          }
        ]
      },
      isAuthenticated: true,
      isLoading: false
    });
    Toast.show('Welcome back!', 'success');
    Router.navigate('/');
  },

  register(name, email, password) {
    AuthStore.setState({
      user: {
        id: 'user_' + Date.now(),
        name,
        email,
        phone: '',
        role: 'CUSTOMER',
        avatar: null,
        addresses: []
      },
      isAuthenticated: true,
      isLoading: false
    });
    Toast.show('Account created successfully!', 'success');
    Router.navigate('/');
  },

  logout() {
    AuthStore.setState({
      user: null,
      isAuthenticated: false
    });
    Toast.show('Logged out', 'success');
    Router.navigate('/');
  }
};

/* === UI STORE === */
window.UIStore = new Store('ui', {
  isMobileMenuOpen: false,
  isSearchExpanded: false,
  toasts: []
});
