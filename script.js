(function() {
    const cartCountEl = document.getElementById("cartCount");
    const yearEl = document.getElementById("year");
    const navToggle = document.getElementById("navToggle");
    const mainNav = document.querySelector(".main-nav");
    const searchInput = document.getElementById("searchInput");
    const productGrid = document.getElementById("productGrid");
    const searchEmpty = document.getElementById("searchEmpty");

    let cartTotal = 0;

    if (yearEl) {
        yearEl.textContent = String(new Date().getFullYear());
    }

    document.querySelectorAll(".add-to-cart").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            cartTotal += 1;
            if (cartCountEl) {
                cartCountEl.textContent = String(cartTotal);
                cartCountEl.classList.toggle("is-zero", cartTotal === 0);
            }
        });
    });

    if (navToggle && mainNav) {
        navToggle.addEventListener("click", () => {
            const open = mainNav.classList.toggle("is-open");
            navToggle.setAttribute("aria-expanded", open ? "true" : "false");
        });
    }

    const mqNav = () => window.matchMedia("(max-width: 900px)").matches;

    document.querySelectorAll(".nav-trigger").forEach((trigger) => {
        trigger.addEventListener("click", (e) => {
            if (!mqNav()) return;
            e.preventDefault();
            const item = trigger.closest(".nav-item");
            if (!item) return;
            const wasOpen = item.classList.contains("is-open");
            document.querySelectorAll(".nav-item.is-open").forEach((i) => {
                i.classList.remove("is-open");
            });
            document.querySelectorAll(".nav-trigger").forEach((t) => {
                t.setAttribute("aria-expanded", "false");
            });
            if (!wasOpen) {
                item.classList.add("is-open");
                trigger.setAttribute("aria-expanded", "true");
            }
        });
    });

    document.addEventListener("click", (e) => {
        if (!mqNav()) return;
        if (e.target.closest(".nav-item") || e.target.closest("#navToggle")) return;
        document.querySelectorAll(".nav-item.is-open").forEach((i) => i.classList.remove("is-open"));
        document.querySelectorAll(".nav-trigger").forEach((t) => t.setAttribute("aria-expanded", "false"));
    });

    function filterProducts() {
        if (!searchInput || !productGrid || !searchEmpty) return;
        const q = searchInput.value.trim().toLowerCase();
        const cards = productGrid.querySelectorAll(".product-card");
        let visible = 0;
        cards.forEach((card) => {
            const name = (card.getAttribute("data-name") || "").toLowerCase();
            const match = !q || name.includes(q);
            card.classList.toggle("hidden", !match);
            if (match) visible += 1;
        });
        const showEmpty = q.length > 0 && visible === 0;
        searchEmpty.classList.toggle("hidden", !showEmpty);
    }

    if (searchInput) {
        searchInput.addEventListener("input", filterProducts);
        document.querySelector(".search-wrap") ? .addEventListener("submit", (e) => {
            e.preventDefault();
            filterProducts();
        });
    }
})();