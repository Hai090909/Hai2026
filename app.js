// --- Products Database ---
const PRODUCTS = [
  {
    id: "lumiere-hydro-cream",
    name: "Lumière Hydro Gel-Cream",
    category: "skincare",
    price: 48.00,
    originalPrice: null,
    rating: 4.8,
    reviewsCount: 124,
    image: "assets/hero_cream.png",
    badge: "Best Seller",
    desc: "A weightless water-gel moisturizer that infuses skin with intense, continuous hydration. Formulated with high-grade Hyaluronic Acid and organic Rose Water to replenish dry skin barriers and unlock a fresh, plump, dewy glow.",
    size: "50ml / 1.7 fl. oz",
    ingredients: "Hyaluronic Acid, Rose Hydrosol, Niacinamide (B3), Organic Aloe Vera Leaf Juice, Squalane."
  },
  {
    id: "aura-glow-serum",
    name: "Aura Cellular Dropper Serum",
    category: "skincare",
    price: 62.00,
    originalPrice: 75.00,
    rating: 4.9,
    reviewsCount: 89,
    image: "assets/serum_bottle.png",
    badge: "15% OFF",
    desc: "An intensive antioxidant facial oil-serum designed to restore glow and counter environmental stressors. High in Vitamin C, Rosehip Oil, and Squalane, this fast-absorbing serum penetrates deeply to boost skin elasticity.",
    size: "30ml / 1.0 fl. oz",
    ingredients: "Organic Rosehip Seed Oil, Vitamin C (Tetrahexyldecyl Ascorbate), Vitamin E, Squalane, Coenzyme Q10."
  },
  {
    id: "satin-rose-lipstick",
    name: "Satin Rosewood Matte Lipstick",
    category: "makeup",
    price: 32.00,
    originalPrice: null,
    rating: 4.7,
    reviewsCount: 156,
    image: "assets/lipstick_luxury.png",
    badge: "New",
    desc: "A velvety matte lipstick that envelopes lips in rich, hydrating pigment. Enriched with botanical oils and Shea Butter to prevent feathering while delivering a long-wearing, weightless rosewood finish.",
    size: "3.5g / 0.12 oz",
    ingredients: "Organic Castor Oil, Shea Butter, Candelilla Wax, Rose Flower Extract, Vitamin E, Mica Colors."
  },
  {
    id: "neutral-shimmer-palette",
    name: "Earthy Gold Eyeshadow Palette",
    category: "makeup",
    price: 54.00,
    originalPrice: 65.00,
    rating: 4.6,
    reviewsCount: 78,
    image: "assets/eyeshadow_palette.png",
    badge: "Limited Edition",
    desc: "An elegant, travel-friendly eyeshadow palette featuring 10 pigment-rich matte and shimmering tones. From champagne gold to rich espresso, create effortless daytime glows and dramatic evening contours.",
    size: "12g / 0.42 oz",
    ingredients: "Mica, Rice Starch, Organic Jojoba Seed Oil, Vitamin E, Zinc Stearate, Iron Oxides."
  },
  {
    id: "restorative-hair-oil",
    name: "Botanical Recovery Hair Oil",
    category: "haircare",
    price: 38.00,
    originalPrice: null,
    rating: 4.8,
    reviewsCount: 92,
    image: "assets/serum_bottle.png",
    badge: "Organic",
    desc: "A nourishing clinical treatment oil designed to revive splitting ends, add brilliant shine, and protect hair fibers from heat damage up to 450°F. Infused with Argan oil and rosemary leaf extract.",
    size: "50ml / 1.7 fl. oz",
    ingredients: "Organic Argan Oil, Jojoba Oil, Rosemary Essential Oil, Avocado Extract, Vitamin E."
  },
  {
    id: "glitz-lip-plumper",
    name: "Glitz Hyaluronic Lip Plumper",
    category: "makeup",
    price: 28.00,
    originalPrice: null,
    rating: 4.5,
    reviewsCount: 112,
    image: "assets/lipstick_luxury.png",
    badge: "Trending",
    desc: "A non-sticky gloss that instantly hydrates and plumps lips. Formulated with micro-encapsulated Hyaluronic Acid and cool mint extract for a natural, immediate fullness and high-shine glass finish.",
    size: "6ml / 0.20 fl. oz",
    ingredients: "Hyaluronic Acid Spheres, Peppermint Extract, Coconut Oil, Vitamin E, Capsicum Extract."
  },
  {
    id: "retinol-renewal-balm",
    name: "Intense Retinol Renewal Balm",
    category: "skincare",
    price: 75.00,
    originalPrice: null,
    rating: 4.9,
    reviewsCount: 65,
    image: "assets/hero_cream.png",
    badge: "Clinical",
    desc: "An advanced night balm that couples micro-encapsulated Retinol with botanical ceramides to promote cell division, smoothing deep lines while preserving skin hydration and elasticity overnight.",
    size: "30ml / 1.0 fl. oz",
    ingredients: "0.5% Encapsulated Retinol, Ceramide NP, Shea Butter, Centella Asiatica (Cica), Niacinamide."
  },
  {
    id: "rosehip-deep-conditioner",
    name: "Rosehip Restorative Hair Mask",
    category: "haircare",
    price: 42.00,
    originalPrice: null,
    rating: 4.7,
    reviewsCount: 84,
    image: "assets/hero_cream.png",
    badge: "Best Seller",
    desc: "A rich, velvety deep-conditioning treatment mask that repairs dry, colored, or damaged hair. Rich rosehip oil replenishes essential lipid structures for standard bounce, luster, and control.",
    size: "200ml / 6.7 fl. oz",
    ingredients: "Rosehip Fruit Oil, Hydrolyzed Wheat Protein, Sweet Almond Oil, Shea Butter, Aloe Vera Juice."
  }
];

// --- Cart and E-Commerce State ---
let cart = [];
let appliedDiscount = 0; // 0.2 for 20%
const VALID_PROMOS = {
  "GLOW20": 0.20,
  "ECOBEAUTY": 0.15
};

// --- Page Initialization & Setup ---
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  renderProducts(PRODUCTS);
  initProductControls();
  initTryOn();
  initSkinQuiz();
  initCartAndCheckout();
  initTestimonials();
  initModalCloseEvents();
});

// --- Header / Navbar Scroll Effects & Mobile Toggle ---
function initNavbar() {
  const header = document.getElementById("mainHeader");
  const menuToggle = document.getElementById("menuToggleBtn");
  const navLinks = document.getElementById("navLinks");
  
  // Scrolled styling
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Mobile menu toggle
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    // Toggle menu icon
    const icon = menuToggle.querySelector("i");
    if (navLinks.classList.contains("active")) {
      icon.className = "fa-solid fa-xmark";
      navLinks.style.display = "flex";
      navLinks.style.flexDirection = "column";
      navLinks.style.position = "absolute";
      navLinks.style.top = "var(--header-height)";
      navLinks.style.left = "0";
      navLinks.style.width = "100%";
      navLinks.style.backgroundColor = "var(--white)";
      navLinks.style.padding = "2rem";
      navLinks.style.boxShadow = "var(--shadow-md)";
    } else {
      icon.className = "fa-solid fa-bars";
      navLinks.removeAttribute("style");
    }
  });

  // Close mobile menu on nav link click
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.querySelector("i").className = "fa-solid fa-bars";
      navLinks.removeAttribute("style");
    });
  });
}

// --- Render Products Catalog ---
function renderProducts(productsList) {
  const productsGrid = document.getElementById("productsGrid");
  productsGrid.innerHTML = "";

  if (productsList.length === 0) {
    productsGrid.innerHTML = `
      <div class="text-center" style="grid-column: 1 / -1; padding: 4rem 0; color: var(--text-muted);">
        <i class="fa-solid fa-magnifying-glass" style="font-size: 2.5rem; margin-bottom: 1rem; color: var(--secondary-dark);"></i>
        <h3>No Products Found</h3>
        <p>Try refining your search terms or choosing a different category.</p>
      </div>
    `;
    return;
  }

  productsList.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.id = `prod-${product.id}`;
    
    const originalPriceHtml = product.originalPrice 
      ? `<span class="original">$${product.originalPrice.toFixed(2)}</span>` 
      : "";
    const badgeHtml = product.badge 
      ? `<span class="product-badge ${product.badge.toLowerCase().includes('off') ? 'sale' : ''}">${product.badge}</span>` 
      : "";

    // Generate stars
    const fullStars = Math.floor(product.rating);
    const halfStar = product.rating % 1 !== 0;
    let starsHtml = "";
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        starsHtml += `<i class="fa-solid fa-star"></i>`;
      } else if (i === fullStars && halfStar) {
        starsHtml += `<i class="fa-solid fa-star-half-stroke"></i>`;
      } else {
        starsHtml += `<i class="fa-regular fa-star"></i>`;
      }
    }

    card.innerHTML = `
      ${badgeHtml}
      <div class="product-img-wrapper">
        <img src="${product.image}" alt="${product.name}" class="product-img">
        <div class="product-actions">
          <button class="prod-action-btn" onclick="openQuickView('${product.id}')" aria-label="Quick View"><i class="fa-solid fa-eye"></i></button>
          <button class="prod-action-btn" onclick="addToCart('${product.id}')" aria-label="Add to Cart"><i class="fa-solid fa-bag-shopping"></i></button>
        </div>
      </div>
      <div class="product-content">
        <span class="product-cat">${product.category}</span>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-rating">
          ${starsHtml}
          <span>(${product.reviewsCount})</span>
        </div>
        <div class="product-price-row">
          <span class="product-price">${originalPriceHtml}$${product.price.toFixed(2)}</span>
          <button class="btn-add-cart-card" onclick="addToCart('${product.id}')" aria-label="Add to Cart"><i class="fa-solid fa-cart-plus"></i></button>
        </div>
      </div>
    `;
    productsGrid.appendChild(card);
  });
}

// --- Product Filters, Search and Sort Logic ---
function initProductControls() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("shopSearchInput");
  const sortSelect = document.getElementById("shopSortSelect");

  let activeCategory = "all";
  let searchQuery = "";
  let activeSort = "default";

  function applyFilters() {
    let filtered = PRODUCTS.filter(p => {
      const matchCat = (activeCategory === "all" || p.category === activeCategory);
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.ingredients.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });

    // Sort
    if (activeSort === "price-low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (activeSort === "price-high") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (activeSort === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    renderProducts(filtered);
  }

  // Filter Categories
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.getAttribute("data-category");
      applyFilters();
    });
  });

  // Search Input
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    applyFilters();
  });

  // Sort Select
  sortSelect.addEventListener("change", (e) => {
    activeSort = e.target.value;
    applyFilters();
  });
}

// --- Virtual Try-On Logic ---
function initTryOn() {
  const intensitySlider = document.getElementById("intensitySlider");
  const intensityVal = document.getElementById("intensityVal");
  
  // SVG Overlay elements
  const lipUpper = document.getElementById("lipUpper");
  const lipLower = document.getElementById("lipLower");
  const shadowLeft = document.getElementById("shadowLeft");
  const shadowRight = document.getElementById("shadowRight");
  const blushLeft = document.getElementById("blushLeft");
  const blushRight = document.getElementById("blushRight");

  // Keep track of current colors
  let makeupColors = {
    lipstick: "transparent",
    eyeshadow: "transparent",
    blush: "transparent"
  };

  // Adjust intensity live
  intensitySlider.addEventListener("input", (e) => {
    const val = e.target.value;
    intensityVal.textContent = `${val}%`;
    updateMakeupIntensity();
  });

  function updateMakeupIntensity() {
    const intensity = intensitySlider.value / 100;
    
    // Lipstick
    if (makeupColors.lipstick === "transparent") {
      lipUpper.style.opacity = "0";
      lipLower.style.opacity = "0";
    } else {
      lipUpper.setAttribute("fill", makeupColors.lipstick);
      lipLower.setAttribute("fill", makeupColors.lipstick);
      lipUpper.style.opacity = (intensity * 0.55).toString(); // Scale upper lip for realism
      lipLower.style.opacity = (intensity * 0.65).toString(); // Scale lower lip
    }

    // Eyeshadow
    if (makeupColors.eyeshadow === "transparent") {
      shadowLeft.style.opacity = "0";
      shadowRight.style.opacity = "0";
    } else {
      shadowLeft.setAttribute("fill", makeupColors.eyeshadow);
      shadowRight.setAttribute("fill", makeupColors.eyeshadow);
      shadowLeft.style.opacity = (intensity * 0.4).toString();
      shadowRight.style.opacity = (intensity * 0.4).toString();
    }

    // Blush
    if (makeupColors.blush === "transparent") {
      blushLeft.style.opacity = "0";
      blushRight.style.opacity = "0";
    } else {
      blushLeft.setAttribute("fill", makeupColors.blush);
      blushRight.setAttribute("fill", makeupColors.blush);
      blushLeft.style.opacity = (intensity * 0.25).toString(); // Keep blush soft
      blushRight.style.opacity = (intensity * 0.25).toString();
    }
  }

  // Handle shade selections
  function setupShadeSelector(selectorId, type) {
    const buttons = document.querySelectorAll(`#${selectorId} .shade-option`);
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        // Toggle active style
        document.querySelectorAll(`#${selectorId} .shade-option`).forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        
        // Update color
        makeupColors[type] = btn.getAttribute("data-color");
        updateMakeupIntensity();
      });
    });
  }

  setupShadeSelector("lipShadeSelector", "lipstick");
  setupShadeSelector("eyeShadeSelector", "eyeshadow");
  setupShadeSelector("blushShadeSelector", "blush");
}

// --- Skincare Routine Finder Quiz ---
function initSkinQuiz() {
  const startBtn = document.getElementById("startQuizBtn");
  const quizModal = document.getElementById("quizModal");
  const quizClose = document.getElementById("quizCloseBtn");
  
  const quizSteps = document.querySelectorAll(".quiz-step");
  const nextBtn = document.getElementById("quizNextBtn");
  const backBtn = document.getElementById("quizBackBtn");
  const progressFill = document.getElementById("quizProgressFill");
  
  let currentStepIndex = 0;
  let quizAnswers = {};

  startBtn.addEventListener("click", () => {
    quizModal.classList.add("active");
    resetQuiz();
  });

  quizClose.addEventListener("click", () => {
    quizModal.classList.remove("active");
  });

  function resetQuiz() {
    currentStepIndex = 0;
    quizAnswers = {};
    showStep(0);
  }

  function showStep(index) {
    quizSteps.forEach((step, i) => {
      step.classList.toggle("active", i === index);
    });

    currentStepIndex = index;
    
    // Update progress bar
    const progress = (index / (quizSteps.length - 1)) * 100;
    progressFill.style.width = `${progress}%`;

    // Toggle Back button
    backBtn.style.visibility = index === 0 ? "hidden" : "visible";

    // Toggle Next button layout or finish
    const activeStep = quizSteps[index];
    const isResultsStep = activeStep.getAttribute("data-step") === "results";

    if (isResultsStep) {
      nextBtn.textContent = "Finish & Close";
      nextBtn.disabled = false;
      backBtn.style.visibility = "hidden";
      generateQuizRecommendations();
    } else {
      nextBtn.innerHTML = `Next Step <i class="fa-solid fa-angle-right"></i>`;
      // Check if current step has selection
      const hasSelection = activeStep.querySelector(".quiz-answer-card.selected") !== null;
      nextBtn.disabled = !hasSelection;
    }
  }

  // Answer Card click handler
  quizSteps.forEach(step => {
    const cards = step.querySelectorAll(".quiz-answer-card");
    cards.forEach(card => {
      card.addEventListener("click", () => {
        cards.forEach(c => c.classList.remove("selected"));
        card.classList.add("selected");
        
        // Store answer
        const stepNum = step.getAttribute("data-step");
        const answer = card.getAttribute("data-answer");
        quizAnswers[stepNum] = answer;
        
        nextBtn.disabled = false;
      });
    });
  });

  // Next / Back events
  nextBtn.addEventListener("click", () => {
    const isResultsStep = quizSteps[currentStepIndex].getAttribute("data-step") === "results";
    
    if (isResultsStep) {
      quizModal.classList.remove("active");
    } else {
      showStep(currentStepIndex + 1);
    }
  });

  backBtn.addEventListener("click", () => {
    if (currentStepIndex > 0) {
      showStep(currentStepIndex - 1);
    }
  });

  function generateQuizRecommendations() {
    const container = document.getElementById("quizRecommendations");
    container.innerHTML = "";

    const type = quizAnswers["1"];    // dry, oily, combination, sensitive
    const concern = quizAnswers["2"]; // hydration, aging, pores, barrier
    
    let matches = [];

    if (concern === "hydration" || type === "dry") {
      matches.push("lumiere-hydro-cream", "aura-glow-serum");
    } else if (concern === "aging" || type === "combination") {
      matches.push("retinol-renewal-balm", "aura-glow-serum");
    } else if (concern === "pores" || type === "oily") {
      matches.push("aura-glow-serum", "restorative-hair-oil");
    } else {
      matches.push("lumiere-hydro-cream", "retinol-renewal-balm");
    }

    // Pull matching product records
    const recommendedProds = PRODUCTS.filter(p => matches.includes(p.id));

    recommendedProds.forEach(prod => {
      const card = document.createElement("div");
      card.className = "recommended-card";
      card.innerHTML = `
        <img src="${prod.image}" alt="${prod.name}">
        <div class="recommended-info" style="flex-grow: 1;">
          <h4>${prod.name}</h4>
          <span class="price">$${prod.price.toFixed(2)}</span>
        </div>
        <button class="prod-action-btn" onclick="addToCart('${prod.id}'); document.getElementById('quizModal').classList.remove('active');" aria-label="Add recommendation to cart" style="width:36px; height:36px; background-color: var(--black); color: var(--white);">
          <i class="fa-solid fa-cart-plus"></i>
        </button>
      `;
      container.appendChild(card);
    });
  }
}

// --- Cart and Checkout System ---
function initCartAndCheckout() {
  const cartToggleBtn = document.getElementById("cartToggleBtn");
  const cartDrawer = document.getElementById("cartDrawer");
  const cartCloseBtn = document.getElementById("cartCloseBtn");
  const checkoutBtn = document.getElementById("checkoutBtn");
  const checkoutModal = document.getElementById("checkoutModal");
  const checkoutCloseBtn = document.getElementById("checkoutCloseBtn");
  const promoApplyBtn = document.getElementById("promoApplyBtn");

  // Toggle Cart Drawer
  cartToggleBtn.addEventListener("click", () => cartDrawer.classList.add("active"));
  cartCloseBtn.addEventListener("click", () => cartDrawer.classList.remove("active"));

  // Toggle Checkout Modal
  checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Your cart is currently empty.");
      return;
    }
    cartDrawer.classList.remove("active");
    checkoutModal.classList.add("active");
    renderCheckoutSummary();
  });
  checkoutCloseBtn.addEventListener("click", () => checkoutModal.classList.remove("active"));

  // Apply promo codes
  promoApplyBtn.addEventListener("click", () => {
    const promoInput = document.getElementById("promoInput").value.trim().toUpperCase();
    const promoStatus = document.getElementById("promoStatus");

    if (VALID_PROMOS.hasOwnProperty(promoInput)) {
      appliedDiscount = VALID_PROMOS[promoInput];
      promoStatus.textContent = `Promo code "${promoInput}" applied successfully! (20% OFF)`;
      promoStatus.className = "promo-status success";
    } else {
      appliedDiscount = 0;
      promoStatus.textContent = "Invalid promotion code.";
      promoStatus.className = "promo-status error";
    }
    updateCartUI();
  });
}

// --- Add to Cart Logic ---
window.addToCart = function(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: prod.id,
      name: prod.name,
      price: prod.price,
      image: prod.image,
      quantity: 1
    });
  }

  // Visual shake animation on cart button
  const cartBtn = document.getElementById("cartToggleBtn");
  cartBtn.classList.add("animate-shake");
  setTimeout(() => cartBtn.classList.remove("animate-shake"), 500);

  updateCartUI();
  // Auto open cart drawer
  document.getElementById("cartDrawer").classList.add("active");
};

// --- Update Cart UI Elements ---
function updateCartUI() {
  const cartBody = document.getElementById("cartBody");
  const cartCount = document.getElementById("cartCount");
  const cartHeaderCount = document.getElementById("cartHeaderCount");
  const cartSubtotal = document.getElementById("cartSubtotal");
  const cartDiscount = document.getElementById("cartDiscount");
  const cartDiscountRow = document.getElementById("cartDiscountRow");
  const cartTotal = document.getElementById("cartTotal");

  // Counts
  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalQty;
  cartHeaderCount.textContent = totalQty;

  // Empty state
  if (cart.length === 0) {
    cartBody.innerHTML = `
      <div class="cart-empty-state">
        <i class="fa-solid fa-bag-shopping"></i>
        <p style="font-size:1.1rem; color:var(--black); font-weight:600; margin-bottom:0.5rem;">Your Cart is Empty</p>
        <p>Browse our collections and add products to start your beauty routine.</p>
      </div>
    `;
    cartSubtotal.textContent = "$0.00";
    cartDiscountRow.style.display = "none";
    cartTotal.textContent = "$0.00";
    return;
  }

  // Populate Items
  cartBody.innerHTML = "";
  let subtotal = 0;

  cart.forEach(item => {
    subtotal += item.price * item.quantity;
    
    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-info">
        <h4 class="cart-item-name">${item.name}</h4>
        <div class="cart-item-meta">$${item.price.toFixed(2)}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="adjustQty('${item.id}', -1)" aria-label="Decrease quantity"><i class="fa-solid fa-minus"></i></button>
          <span class="qty-val">${item.quantity}</span>
          <button class="qty-btn" onclick="adjustQty('${item.id}', 1)" aria-label="Increase quantity"><i class="fa-solid fa-plus"></i></button>
        </div>
      </div>
      <div class="cart-item-right">
        <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
        <button class="cart-item-remove" onclick="removeCartItem('${item.id}')" aria-label="Remove item"><i class="fa-solid fa-trash-can"></i></button>
      </div>
    `;
    cartBody.appendChild(row);
  });

  // Calculate pricing
  cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
  
  if (appliedDiscount > 0) {
    const discountVal = subtotal * appliedDiscount;
    cartDiscount.textContent = `-$${discountVal.toFixed(2)}`;
    cartDiscountRow.style.display = "flex";
    cartTotal.textContent = `$${(subtotal - discountVal).toFixed(2)}`;
  } else {
    cartDiscountRow.style.display = "none";
    cartTotal.textContent = `$${subtotal.toFixed(2)}`;
  }
}

// Adjust Cart quantity
window.adjustQty = function(productId, change) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) {
    removeCartItem(productId);
  } else {
    updateCartUI();
  }
};

// Remove item
window.removeCartItem = function(productId) {
  cart = cart.filter(i => i.id !== productId);
  updateCartUI();
};

// --- Checkout Modal Summary rendering ---
function renderCheckoutSummary() {
  const summaryList = document.getElementById("checkoutSummaryList");
  const checkoutSubtotal = document.getElementById("checkoutSubtotal");
  const checkoutDiscount = document.getElementById("checkoutDiscount");
  const checkoutDiscountRow = document.getElementById("checkoutDiscountRow");
  const checkoutTotal = document.getElementById("checkoutTotal");

  summaryList.innerHTML = "";
  let subtotal = 0;

  cart.forEach(item => {
    subtotal += item.price * item.quantity;
    
    const row = document.createElement("div");
    row.className = "checkout-summary-item";
    row.innerHTML = `
      <span class="checkout-summary-item-name">${item.name} <span>x${item.quantity}</span></span>
      <span class="checkout-summary-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
    `;
    summaryList.appendChild(row);
  });

  checkoutSubtotal.textContent = `$${subtotal.toFixed(2)}`;

  if (appliedDiscount > 0) {
    const discountVal = subtotal * appliedDiscount;
    checkoutDiscount.textContent = `-$${discountVal.toFixed(2)}`;
    checkoutDiscountRow.style.display = "flex";
    checkoutTotal.textContent = `$${(subtotal - discountVal).toFixed(2)}`;
  } else {
    checkoutDiscountRow.style.display = "none";
    checkoutTotal.textContent = `$${subtotal.toFixed(2)}`;
  }
}

// --- Submit Purchase ---
window.handleCheckoutSubmit = function() {
  const modalBody = document.getElementById("checkoutModalBody");
  
  // Retrieve names
  const firstName = document.getElementById("shipFirst").value;
  const lastName = document.getElementById("shipLast").value;

  // Render animated success panel
  modalBody.innerHTML = `
    <div class="success-screen">
      <div class="success-icon"><i class="fa-solid fa-check"></i></div>
      <h3 class="font-serif" style="font-size: 2.2rem; color: var(--black); margin-bottom: 1rem;">Order Placed!</h3>
      <p style="color: var(--text-muted); margin-bottom: 2rem; max-width: 500px; margin-left: auto; margin-right: auto;">
        Thank you for purchasing, ${firstName} ${lastName}! Your order has been securely processed. A confirmation email with package tracking coordinates is heading your way.
      </p>
      <button class="btn btn-primary" onclick="closeCheckoutModal()">Continue Shopping</button>
    </div>
  `;

  // Reset e-commerce state
  cart = [];
  appliedDiscount = 0;
  document.getElementById("promoInput").value = "";
  document.getElementById("promoStatus").style.display = "none";
  updateCartUI();
};

window.closeCheckoutModal = function() {
  document.getElementById("checkoutModal").classList.remove("active");
  // Restore checkout screen body structure in case they place another order later
  setTimeout(() => {
    location.reload(); // Quick refresh is cleanest to restore original modal template structures
  }, 300);
};

// --- Product Quick View Modal Loader ---
window.openQuickView = function(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  const grid = document.getElementById("quickviewGrid");
  
  grid.innerHTML = `
    <div class="quickview-visual">
      <img src="${prod.image}" alt="${prod.name}" class="quickview-img">
    </div>
    <div class="quickview-info">
      <h3 class="quickview-name font-serif">${prod.name}</h3>
      <span class="quickview-price">$${prod.price.toFixed(2)}</span>
      <p class="quickview-desc">${prod.desc}</p>
      
      <div class="quickview-meta-row">
        <span class="quickview-meta-label">Category:</span>
        <span>${prod.category}</span>
      </div>
      <div class="quickview-meta-row">
        <span class="quickview-meta-label">Size/Weight:</span>
        <span>${prod.size}</span>
      </div>
      <div class="quickview-meta-row">
        <span class="quickview-meta-label">Key Actives:</span>
        <span>${prod.ingredients}</span>
      </div>

      <div class="quickview-actions">
        <button class="btn btn-primary" onclick="addToCart('${prod.id}'); document.getElementById('quickviewModal').classList.remove('active');" style="flex-grow: 1;">
          Add To Shopping Cart <i class="fa-solid fa-cart-plus"></i>
        </button>
      </div>
    </div>
  `;

  document.getElementById("quickviewModal").classList.add("active");
};

// --- Testimonials Slider Logic ---
function initTestimonials() {
  const track = document.getElementById("testimonialTrack");
  const slides = document.querySelectorAll(".testimonial-slide");
  const prevBtn = document.getElementById("prevTestBtn");
  const nextBtn = document.getElementById("nextTestBtn");

  let currentIndex = 0;
  let autoplay = setInterval(nextSlide, 7000);

  function updateSlider() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
  }

  nextBtn.addEventListener("click", () => {
    clearInterval(autoplay);
    nextSlide();
    autoplay = setInterval(nextSlide, 7000);
  });

  prevBtn.addEventListener("click", () => {
    clearInterval(autoplay);
    prevSlide();
    autoplay = setInterval(nextSlide, 7000);
  });
}

// --- Close Modals clicking overlay backgrounds ---
function initModalCloseEvents() {
  const overlays = document.querySelectorAll(".modal-overlay");
  overlays.forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      // Close only if click is directly on overlay, not card itself
      if (e.target === overlay) {
        overlay.classList.remove("active");
      }
    });
  });

  // Esc key closes modals
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("active"));
      document.getElementById("cartDrawer").classList.remove("active");
    }
  });

  // Close Quick view button
  document.getElementById("quickviewCloseBtn").addEventListener("click", () => {
    document.getElementById("quickviewModal").classList.remove("active");
  });
}
