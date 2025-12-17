// ===================== LOGIN + SESSION LOGIC =====================

// Static demo credentials
const DEMO_EMAIL = "user@example.com";
const DEMO_PASSWORD = "password123";

// Keys for sessionStorage
const STORAGE_KEY_LOGGED_IN = "fk_logged_in";
const STORAGE_KEY_USER = "fk_user";

// Called from login.html
function initLoginPage() {
    // Clear previous login state when coming to login page
    sessionStorage.removeItem(STORAGE_KEY_LOGGED_IN);
    sessionStorage.removeItem(STORAGE_KEY_USER);

    const form = document.getElementById("loginForm");
    const errorBox = document.getElementById("errorBox");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (email === "" || password === "") {
            showError("Please enter both email/username and password.");
            return;
        }

        // Accept user@example.com or admin with same password
        if ((email === DEMO_EMAIL || email.toLowerCase() === "admin") &&
            password === DEMO_PASSWORD) {

            sessionStorage.setItem(STORAGE_KEY_LOGGED_IN, "true");
            sessionStorage.setItem(STORAGE_KEY_USER, email);

            window.location.href = "products.html";
        } else {
            showError("Invalid email/username or password.");
        }

        function showError(msg) {
            errorBox.textContent = msg;
            errorBox.classList.remove("d-none");
        }
    });
}

// Guard: only allow access if logged in
function requireLogin() {
    const loggedIn = sessionStorage.getItem(STORAGE_KEY_LOGGED_IN);
    if (loggedIn !== "true") {
        window.location.href = "login.html";
        return false;
    }
    return true;
}

// ===================== PRODUCT DATA =====================

const PRODUCTS = [
    // Toys – Kinder Joy first if you want it at top
    {
        id: 1,
        category: "Toys",
        name: "Kinder Joy (DC Version)",
        price: 60,
        description: "Chocolate treat egg with surprise DC character toy inside.",
        image: "https://prithvienterprises.co.in/cdn/shop/files/Kinder-Joy-DC-Pack.webp?v=1759157210&width=1920"
    },

    // Electronics
    {
        id: 2,
        category: "Electronics",
        name: "HP Ryzen 5 Laptop",
        price: 62999,
        description: "Ryzen 5, 8GB RAM, 512GB SSD, 15.6\" FHD display.",
        image: "https://static.digit.in/NPN_hp-notebook-14-dk0093au-7qz52pa-laptop-ryzen-5-quad-core-8gb-1tb-256gb-ssd-win10-1752535606.webp?tr=w-1200"
    },
    {
        id: 3,
        category: "Electronics",
        name: "Sony Wireless Headphones",
        price: 8999,
        description: "Noise cancelling over-ear Bluetooth headphones.",
        image: "https://images.jdmagicbox.com/quickquotes/images_main/sony_over_the_ear_wired_headphone_pink_mdr_100aap_p__11673322_0.jpg"
    },
    {
        id: 4,
        category: "Accessories",
        name: "Mi 20000mAh Power Bank",
        price: 1899,
        description: "High capacity power bank with 18W fast charging.",
        image: "https://5.imimg.com/data5/AQ/CP/MY-20343569/power-banks.png"
    },
    {
        id: 15,
        category: "Electronics",
        name: "Samsung 55\" 4K Smart TV",
        price: 55999,
        description: "Crystal 4K UHD Smart TV with HDR and OTT apps.",
        image: "https://images.samsung.com/is/image/samsung/p6pim/in/ua55cue70aklxl/gallery/in-crystal-uhd-cu7000-471711-ua55cue70aklxl-537527832"
    },

    // Mobiles
    {
        id: 5,
        category: "Mobiles",
        name: "Redmi Note 13 Pro 5G",
        price: 24999,
        description: "5G smartphone, 8GB RAM, 256GB storage, AMOLED display.",
        image: "https://m.media-amazon.com/images/I/41slvj1GZvL._SY300_SX300_QL70_FMwebp_.jpg"
    },
    {
        id: 6,
        category: "Mobiles",
        name: "Realme Narzo 70 5G",
        price: 17999,
        description: "6.72\" 120Hz display, 5000mAh battery, 5G ready.",
        image: "https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/g/w/j/narzo-70-5g-rmx3869-realme-original-imahyau4betfvw9j.jpeg?q=90"
    },
    {
        id: 7,
        category: "Mobiles",
        name: "iPhone 15",
        price: 79999,
        description: "A16 Bionic chip, Super Retina XDR display, USB‑C.",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-model-unselect-gallery-1-202309?wid=512&hei=512&fmt=jpeg&qlt=90&.v=1693081542337"
    },
    {
        id: 8,
        category: "Mobiles",
        name: "Samsung Galaxy S24",
        price: 72999,
        description: "Flagship camera, powerful processor, 5G, 6.7\" display.",
        image: "https://m.media-amazon.com/images/I/41Vc86yXS3L._SY300_SX300_QL70_FMwebp_.jpg"
    },

    // Books
    {
        id: 9,
        category: "Books",
        name: "Complete Physics for JEE (Set of 3)",
        price: 1999,
        description: "Comprehensive physics preparation set for JEE aspirants.",
        image: "https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/7b9901bd-a5a5-4813-a7a2-b563d368d801.png"
    },

    // Fashion
    {
        id: 10,
        category: "Fashion",
        name: "Nike Running Shoes",
        price: 3499,
        description: "Lightweight and comfortable running shoes.",
        image: "https://m.media-amazon.com/images/I/71D--klWO-L._AC_UY1000_.jpg"
    },

    // Toys
    {
        id: 11,
        category: "Toys",
        name: "Remote Control Racing Car",
        price: 1499,
        description: "Fast RC car with rechargeable battery and LED lights.",
        image: "https://m.media-amazon.com/images/I/71Z5AAbcYfL.jpg"
    },
    {
        id: 12,
        category: "Toys",
        name: "Building Blocks Set (120 Pieces)",
        price: 799,
        description: "Colorful blocks to improve creativity for kids 3+.",
        image: "https://m.media-amazon.com/images/I/41rOkw6bHDL._SX300_SY300_QL70_FMwebp_.jpg"
    },
    {
        id: 13,
        category: "Toys",
        name: "Soft Teddy Bear 3 Ft",
        price: 1299,
        description: "Premium soft toy, perfect gift for kids and friends.",
        image: "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/647f4969f71113b054a1f5d3/1.jpeg"
    },
    {
        id: 14,
        category: "Toys",
        name: "Educational Puzzle Set",
        price: 499,
        description: "Alphabet and numbers puzzle for early learning.",
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRBpiqpBsC3SdnW7Bqf0O7DY_qeXh5qSACjQuaGzEfBU3yqEX5S1DG1pf_QZ20lek4IAdfN1dN4jpB15XdfY7yLRs6VopwzresfOL7iLZGxQ-9UJdp-k6ct8Q"
    }
];

// Price formatting
function formatPrice(amount) {
    return "₹" + amount.toLocaleString("en-IN");
}

// ===================== PRODUCTS PAGE LOGIC =====================

function initProductsPage() {
    if (!requireLogin()) return;

    const username = sessionStorage.getItem(STORAGE_KEY_USER) || "User";
    document.getElementById("welcomeText").textContent = "Welcome, " + username + "!";

    document.getElementById("logoutBtn").addEventListener("click", function () {
        sessionStorage.clear();
        window.location.href = "login.html";
    });

    renderProducts(PRODUCTS);

    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInput");
    const searchFormMobile = document.getElementById("searchFormMobile");
    const searchInputMobile = document.getElementById("searchInputMobile");

    if (searchForm) {
        searchForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const term = (searchInput.value || "").trim().toLowerCase();
            handleSearch(term);
        });
    }

    if (searchFormMobile) {
        searchFormMobile.addEventListener("submit", function (e) {
            e.preventDefault();
            const term = (searchInputMobile.value || "").trim().toLowerCase();
            handleSearch(term);
        });
    }

    function handleSearch(term) {
        if (!term) {
            renderProducts(PRODUCTS);
            return;
        }
        const filtered = PRODUCTS.filter(p =>
            p.name.toLowerCase().includes(term) ||
            p.description.toLowerCase().includes(term)
        );
        renderProducts(filtered);
    }
}

// Render product cards
function renderProducts(list) {
    const grid = document.getElementById("productGrid");
    grid.innerHTML = "";

    if (!list || list.length === 0) {
        grid.innerHTML = "<p class='text-muted'>No products found.</p>";
        return;
    }

    list.forEach(prod => {
        const col = document.createElement("div");
        col.className = "col-sm-6 col-md-4 col-lg-3 mb-4";

        col.innerHTML = `
            <div class="card product-card h-100">
                <img src="${prod.image}" class="card-img-top product-img" alt="${prod.name}">
                <div class="card-body d-flex flex-column">
                    ${prod.category ? `<span class="badge-category">${prod.category}</span>` : ""}
                    <h5 class="card-title">${prod.name}</h5>
                    <p class="price mb-1">${formatPrice(prod.price)}</p>
                    <p class="description mb-2">${prod.description}</p>
                    <button class="btn btn-primary mt-auto" disabled>
                        Add to Cart (Demo)
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(col);
    });
}
