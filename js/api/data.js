/* ============================================================
   DTS CHOCOLATE — PRODUCT DATABASE
   Seed data from the actual DTS Chocolate menu
   ============================================================ */

window.DB = {
  categories: [
    {
      id: 'cat_chocolates',
      name: 'Chocolates',
      slug: 'chocolates',
      description: 'Premium handcrafted chocolates made with the finest cocoa',
      image: 'assets/images/dark-chocolate.png',
      sortOrder: 1
    },
    {
      id: 'cat_cookies',
      name: 'Cookies',
      slug: 'cookies',
      description: 'Freshly baked cookies with love and premium ingredients',
      image: 'assets/images/cookies-assorted.png',
      sortOrder: 2
    },
    {
      id: 'cat_donuts',
      name: 'Donuts',
      slug: 'donuts',
      description: 'Gourmet chocolate donuts with artisan toppings',
      image: 'assets/images/chocolate-donuts.png',
      sortOrder: 3
    }
  ],

  products: [
    // === CHOCOLATES ===
    {
      id: 'prod_1',
      name: 'Dark Chocolate',
      slug: 'dark-chocolate',
      description: 'Rich and intense dark chocolate crafted from premium single-origin cocoa beans. With a deep, complex flavor profile and velvety smooth texture, this is the perfect choice for true chocolate connoisseurs.',
      price: 299,
      compareAtPrice: 399,
      stock: 50,
      categoryId: 'cat_chocolates',
      category: 'Chocolates',
      allergens: ['Milk', 'Soy'],
      ingredients: ['Cocoa Mass', 'Cocoa Butter', 'Sugar', 'Soy Lecithin', 'Vanilla'],
      shelfLife: '6 months',
      isActive: true,
      isFeatured: true,
      avgRating: 4.8,
      reviewCount: 124,
      images: ['assets/images/dark-chocolate.png'],
      variants: [
        { id: 'v1_sm', name: '100g Box', price: 299, stock: 50 },
        { id: 'v1_md', name: '250g Box', price: 599, stock: 30 },
        { id: 'v1_lg', name: '500g Gift Box', price: 999, stock: 15 }
      ],
      tags: ['bestseller', 'premium']
    },
    {
      id: 'prod_2',
      name: 'White Chocolate',
      slug: 'white-chocolate',
      description: 'Silky smooth white chocolate made from the finest cocoa butter. Creamy, sweet, and utterly indulgent — perfect for those who love a delicate, milky sweetness.',
      price: 249,
      compareAtPrice: null,
      stock: 40,
      categoryId: 'cat_chocolates',
      category: 'Chocolates',
      allergens: ['Milk', 'Soy'],
      ingredients: ['Cocoa Butter', 'Sugar', 'Whole Milk Powder', 'Soy Lecithin', 'Vanilla'],
      shelfLife: '6 months',
      isActive: true,
      isFeatured: false,
      avgRating: 4.5,
      reviewCount: 87,
      images: ['assets/images/white-chocolate.png'],
      variants: [
        { id: 'v2_sm', name: '100g Box', price: 249, stock: 40 },
        { id: 'v2_md', name: '250g Box', price: 499, stock: 25 },
        { id: 'v2_lg', name: '500g Gift Box', price: 899, stock: 10 }
      ],
      tags: ['popular']
    },
    {
      id: 'prod_3',
      name: 'Dry Fruit Chocolate',
      slug: 'dry-fruit-chocolate',
      description: 'A luxurious blend of premium dark chocolate studded with roasted almonds, cashews, and pistachios. Each bite delivers a perfect balance of rich chocolate and crunchy dry fruits.',
      price: 449,
      compareAtPrice: 549,
      stock: 35,
      categoryId: 'cat_chocolates',
      category: 'Chocolates',
      allergens: ['Milk', 'Tree Nuts', 'Soy'],
      ingredients: ['Cocoa Mass', 'Cocoa Butter', 'Sugar', 'Almonds', 'Cashews', 'Pistachios', 'Soy Lecithin'],
      shelfLife: '4 months',
      isActive: true,
      isFeatured: true,
      avgRating: 4.9,
      reviewCount: 156,
      images: ['assets/images/dry-fruit-chocolate.png'],
      variants: [
        { id: 'v3_sm', name: '100g Box', price: 449, stock: 35 },
        { id: 'v3_md', name: '250g Box', price: 849, stock: 20 },
        { id: 'v3_lg', name: '500g Premium Box', price: 1499, stock: 8 }
      ],
      tags: ['bestseller', 'premium', 'gift']
    },
    {
      id: 'prod_4',
      name: 'Kunafa Chocolate',
      slug: 'kunafa-chocolate',
      description: 'An exotic fusion of Middle Eastern kunafa pastry and premium chocolate. Crispy golden shredded phyllo encasing a molten chocolate center, topped with pistachio crumbs.',
      price: 399,
      compareAtPrice: null,
      stock: 20,
      categoryId: 'cat_chocolates',
      category: 'Chocolates',
      allergens: ['Milk', 'Wheat', 'Tree Nuts'],
      ingredients: ['Chocolate', 'Phyllo Dough', 'Butter', 'Sugar', 'Pistachios', 'Rose Water'],
      shelfLife: '2 weeks',
      isActive: true,
      isFeatured: true,
      avgRating: 4.7,
      reviewCount: 93,
      images: ['assets/images/kunafa-chocolate.png'],
      variants: [
        { id: 'v4_sm', name: '4 Pieces', price: 399, stock: 20 },
        { id: 'v4_md', name: '8 Pieces', price: 749, stock: 12 }
      ],
      tags: ['trending', 'limited']
    },
    {
      id: 'prod_5',
      name: 'Coconut Bouncy Chocolate',
      slug: 'coconut-bouncy-chocolate',
      description: 'Inspired by the classic bounty bar — a luscious coconut filling encased in smooth milk chocolate. Tropical, chewy, and irresistibly bouncy.',
      price: 279,
      compareAtPrice: null,
      stock: 45,
      categoryId: 'cat_chocolates',
      category: 'Chocolates',
      allergens: ['Milk', 'Coconut'],
      ingredients: ['Milk Chocolate', 'Desiccated Coconut', 'Sugar', 'Coconut Oil', 'Vanilla'],
      shelfLife: '5 months',
      isActive: true,
      isFeatured: false,
      avgRating: 4.4,
      reviewCount: 67,
      images: ['assets/images/white-chocolate.png'],
      variants: [
        { id: 'v5_sm', name: '100g Box', price: 279, stock: 45 },
        { id: 'v5_md', name: '250g Box', price: 549, stock: 20 }
      ],
      tags: ['popular']
    },
    {
      id: 'prod_6',
      name: 'Dryfruits Laddu',
      slug: 'dryfruits-laddu',
      description: 'Traditional Indian laddu reimagined with a chocolate twist. Made with premium dry fruits, ghee, and coated in fine milk chocolate — a fusion of Indian heritage and chocolate craftsmanship.',
      price: 499,
      compareAtPrice: 599,
      stock: 25,
      categoryId: 'cat_chocolates',
      category: 'Chocolates',
      allergens: ['Milk', 'Tree Nuts', 'Ghee'],
      ingredients: ['Mixed Dry Fruits', 'Dates', 'Ghee', 'Jaggery', 'Milk Chocolate Coating'],
      shelfLife: '3 months',
      isActive: true,
      isFeatured: true,
      avgRating: 4.6,
      reviewCount: 78,
      images: ['assets/images/dry-fruit-chocolate.png'],
      variants: [
        { id: 'v6_sm', name: '6 Pieces', price: 499, stock: 25 },
        { id: 'v6_lg', name: '12 Pieces Gift Box', price: 899, stock: 10 }
      ],
      tags: ['festive', 'gift', 'indian']
    },
    {
      id: 'prod_7',
      name: 'Customized Chocolates',
      slug: 'customized-chocolates',
      description: 'Create your dream chocolate gift! Choose your flavors, fillings, and packaging. Perfect for weddings, birthdays, corporate gifts, and festive occasions. Minimum order of 25 pieces.',
      price: 799,
      compareAtPrice: null,
      stock: 100,
      categoryId: 'cat_chocolates',
      category: 'Chocolates',
      allergens: ['Milk', 'Soy', 'May contain nuts'],
      ingredients: ['Custom — varies by selection'],
      shelfLife: 'Varies',
      isActive: true,
      isFeatured: false,
      avgRating: 4.9,
      reviewCount: 201,
      images: ['assets/images/dark-chocolate.png'],
      variants: [
        { id: 'v7_sm', name: '25 Pieces', price: 799, stock: 100 },
        { id: 'v7_md', name: '50 Pieces', price: 1399, stock: 100 },
        { id: 'v7_lg', name: '100 Pieces', price: 2499, stock: 100 }
      ],
      tags: ['custom', 'gift', 'wedding']
    },

    // === COOKIES ===
    {
      id: 'prod_8',
      name: 'Plain Cookies',
      slug: 'plain-cookies',
      description: 'Classic butter cookies baked to golden perfection. Simple, wholesome, and comforting — just like grandma used to make. Perfect with a cup of chai.',
      price: 149,
      compareAtPrice: null,
      stock: 60,
      categoryId: 'cat_cookies',
      category: 'Cookies',
      allergens: ['Wheat', 'Milk', 'Eggs'],
      ingredients: ['Refined Flour', 'Butter', 'Sugar', 'Eggs', 'Vanilla Extract', 'Baking Powder'],
      shelfLife: '1 month',
      isActive: true,
      isFeatured: false,
      avgRating: 4.3,
      reviewCount: 45,
      images: ['assets/images/cookies-assorted.png'],
      variants: [
        { id: 'v8_sm', name: '200g Pack', price: 149, stock: 60 },
        { id: 'v8_md', name: '500g Jar', price: 349, stock: 30 }
      ],
      tags: []
    },
    {
      id: 'prod_9',
      name: 'Almond Cookies',
      slug: 'almond-cookies',
      description: 'Crunchy almond cookies loaded with roasted California almonds. Each bite delivers a satisfying nutty crunch paired with buttery sweetness.',
      price: 199,
      compareAtPrice: null,
      stock: 40,
      categoryId: 'cat_cookies',
      category: 'Cookies',
      allergens: ['Wheat', 'Milk', 'Eggs', 'Tree Nuts'],
      ingredients: ['Refined Flour', 'Butter', 'Almonds', 'Sugar', 'Eggs', 'Vanilla'],
      shelfLife: '1 month',
      isActive: true,
      isFeatured: true,
      avgRating: 4.6,
      reviewCount: 89,
      images: ['assets/images/cookies-assorted.png'],
      variants: [
        { id: 'v9_sm', name: '200g Pack', price: 199, stock: 40 },
        { id: 'v9_md', name: '500g Jar', price: 449, stock: 20 }
      ],
      tags: ['bestseller']
    },
    {
      id: 'prod_10',
      name: 'Coco Cookies',
      slug: 'coco-cookies',
      description: 'Tropical coconut cookies with toasted coconut flakes. Light, crispy, and packed with natural coconut flavor. A tropical escape in every bite.',
      price: 179,
      compareAtPrice: null,
      stock: 35,
      categoryId: 'cat_cookies',
      category: 'Cookies',
      allergens: ['Wheat', 'Milk', 'Eggs', 'Coconut'],
      ingredients: ['Refined Flour', 'Butter', 'Desiccated Coconut', 'Sugar', 'Eggs'],
      shelfLife: '1 month',
      isActive: true,
      isFeatured: false,
      avgRating: 4.4,
      reviewCount: 56,
      images: ['assets/images/cookies-assorted.png'],
      variants: [
        { id: 'v10_sm', name: '200g Pack', price: 179, stock: 35 },
        { id: 'v10_md', name: '500g Jar', price: 399, stock: 18 }
      ],
      tags: []
    },
    {
      id: 'prod_11',
      name: 'Chocolate Cookies',
      slug: 'chocolate-cookies',
      description: 'Double chocolate chip cookies — rich cocoa dough loaded with premium dark and milk chocolate chips. Chewy inside, crispy outside. Chocolate lover\'s dream.',
      price: 219,
      compareAtPrice: 269,
      stock: 55,
      categoryId: 'cat_cookies',
      category: 'Cookies',
      allergens: ['Wheat', 'Milk', 'Eggs', 'Soy'],
      ingredients: ['Refined Flour', 'Cocoa Powder', 'Chocolate Chips', 'Butter', 'Sugar', 'Eggs'],
      shelfLife: '1 month',
      isActive: true,
      isFeatured: true,
      avgRating: 4.7,
      reviewCount: 112,
      images: ['assets/images/cookies-assorted.png'],
      variants: [
        { id: 'v11_sm', name: '200g Pack', price: 219, stock: 55 },
        { id: 'v11_md', name: '500g Jar', price: 499, stock: 25 }
      ],
      tags: ['bestseller', 'popular']
    },
    {
      id: 'prod_12',
      name: 'Jeera Cookies',
      slug: 'jeera-cookies',
      description: 'A savory twist on classic cookies — aromatic cumin seeds blended into buttery cookie dough. A unique Indian-inspired flavor that pairs perfectly with evening tea.',
      price: 159,
      compareAtPrice: null,
      stock: 30,
      categoryId: 'cat_cookies',
      category: 'Cookies',
      allergens: ['Wheat', 'Milk', 'Eggs'],
      ingredients: ['Refined Flour', 'Butter', 'Cumin Seeds', 'Sugar', 'Salt', 'Baking Powder'],
      shelfLife: '1 month',
      isActive: true,
      isFeatured: false,
      avgRating: 4.2,
      reviewCount: 34,
      images: ['assets/images/cookies-assorted.png'],
      variants: [
        { id: 'v12_sm', name: '200g Pack', price: 159, stock: 30 },
        { id: 'v12_md', name: '500g Jar', price: 349, stock: 15 }
      ],
      tags: ['indian']
    },

    // === DONUTS ===
    {
      id: 'prod_13',
      name: 'Chocolate Donuts',
      slug: 'chocolate-donuts',
      description: 'Freshly made gourmet donuts dipped in rich chocolate glaze. Available in 4 irresistible varieties: Classic Dark, White Chocolate Drizzle, Chocolate Crunch, and Sprinkle Party.',
      price: 349,
      compareAtPrice: 399,
      stock: 30,
      categoryId: 'cat_donuts',
      category: 'Donuts',
      allergens: ['Wheat', 'Milk', 'Eggs', 'Soy'],
      ingredients: ['Flour', 'Sugar', 'Eggs', 'Butter', 'Yeast', 'Dark Chocolate Glaze', 'Sprinkles'],
      shelfLife: '2 days (best consumed fresh)',
      isActive: true,
      isFeatured: true,
      avgRating: 4.8,
      reviewCount: 167,
      images: ['assets/images/chocolate-donuts.png'],
      variants: [
        { id: 'v13_sm', name: '4 Donuts Assorted', price: 349, stock: 30 },
        { id: 'v13_md', name: '6 Donuts Assorted', price: 499, stock: 20 },
        { id: 'v13_lg', name: '12 Donuts Party Box', price: 899, stock: 10 }
      ],
      tags: ['bestseller', 'trending', 'fresh']
    }
  ],

  reviews: [
    {
      id: 'rev_1',
      userId: 'user_1',
      userName: 'Priya S.',
      productId: 'prod_3',
      rating: 5,
      comment: 'Absolutely loved the dry fruit chocolate! The quality is exceptional and packaging was beautiful. Ordered for Diwali gifts and everyone was impressed.',
      photos: [],
      isVerifiedPurchase: true,
      createdAt: '2026-06-15'
    },
    {
      id: 'rev_2',
      userId: 'user_2',
      userName: 'Rahul M.',
      productId: 'prod_1',
      rating: 5,
      comment: 'Best dark chocolate I have ever tasted in Hyderabad. Rich, smooth, and not too sweet. Will definitely order again!',
      photos: [],
      isVerifiedPurchase: true,
      createdAt: '2026-06-10'
    },
    {
      id: 'rev_3',
      userId: 'user_3',
      userName: 'Ananya K.',
      productId: 'prod_13',
      rating: 4,
      comment: 'The chocolate donuts are amazing! Super fresh and the chocolate glaze is heavenly. Only wish they had a bigger box option. Delivery was on time.',
      photos: [],
      isVerifiedPurchase: true,
      createdAt: '2026-06-08'
    },
    {
      id: 'rev_4',
      userId: 'user_4',
      userName: 'Vikram T.',
      productId: 'prod_4',
      rating: 5,
      comment: 'Kunafa chocolate is a game changer! The fusion of crispy kunafa with chocolate is genius. Best dessert I have had in a long time.',
      photos: [],
      isVerifiedPurchase: true,
      createdAt: '2026-06-05'
    },
    {
      id: 'rev_5',
      userId: 'user_5',
      userName: 'Meera R.',
      productId: 'prod_11',
      rating: 5,
      comment: 'These chocolate cookies are addictive! Perfect with coffee. The chocolate chips are generous and the texture is just right — crispy outside, chewy inside.',
      photos: [],
      isVerifiedPurchase: true,
      createdAt: '2026-06-01'
    }
  ],

  testimonials: [
    {
      name: 'Sneha Reddy',
      role: 'Regular Customer',
      text: 'DTS Chocolate has completely changed my gifting game! Their customized chocolates are always a hit at weddings and festivals. Exceptional quality every single time.',
      rating: 5,
      avatar: null
    },
    {
      name: 'Arjun Patel',
      role: 'Corporate Client',
      text: 'We ordered 500 custom chocolates for our company event. The team was professional, pricing was fair, and the chocolates were absolutely stunning. Highly recommended!',
      rating: 5,
      avatar: null
    },
    {
      name: 'Deepika Sharma',
      role: 'Food Blogger',
      text: 'As a food blogger, I am very picky about chocolates. DTS exceeded my expectations — the kunafa chocolate is unlike anything I have tried. Truly artisanal quality.',
      rating: 5,
      avatar: null
    }
  ],

  orders: []
};

/* === HELPER METHODS === */
window.DBHelpers = {
  getProduct(id) {
    return DB.products.find(p => p.id === id);
  },

  getProductBySlug(slug) {
    return DB.products.find(p => p.slug === slug);
  },

  getCategory(id) {
    return DB.categories.find(c => c.id === id);
  },

  getProductsByCategory(categoryId) {
    return DB.products.filter(p => p.categoryId === categoryId && p.isActive);
  },

  getFeaturedProducts() {
    return DB.products.filter(p => p.isFeatured && p.isActive);
  },

  searchProducts(query) {
    const q = query.toLowerCase();
    return DB.products.filter(p =>
      p.isActive && (
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags.some(t => t.includes(q))
      )
    );
  },

  getProductReviews(productId) {
    return DB.reviews.filter(r => r.productId === productId);
  },

  filterProducts({ category, minPrice, maxPrice, minRating, sort, search } = {}) {
    let results = DB.products.filter(p => p.isActive);

    if (category && category !== 'all') {
      results = results.filter(p => p.categoryId === category);
    }

    if (minPrice !== undefined) {
      results = results.filter(p => p.price >= minPrice);
    }

    if (maxPrice !== undefined) {
      results = results.filter(p => p.price <= maxPrice);
    }

    if (minRating) {
      results = results.filter(p => p.avgRating >= minRating);
    }

    if (search) {
      const q = search.toLowerCase();
      results = results.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      );
    }

    switch (sort) {
      case 'price-low':
        results.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        results.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        results.sort((a, b) => b.avgRating - a.avgRating);
        break;
      case 'newest':
        results.sort((a, b) => b.id.localeCompare(a.id));
        break;
      case 'popular':
      default:
        results.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
    }

    return results;
  },

  formatPrice(price) {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  },

  generateOrderNumber() {
    const prefix = 'DTS';
    const num = Math.floor(100000 + Math.random() * 900000);
    return `${prefix}-${num}`;
  }
};
