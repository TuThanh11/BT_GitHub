// Sample Products Data
const products = [
    {
        id: 1,
        name: "iPhone 15 Pro Max",
        category: "electronics",
        price: 29990000,
        description: "Điện thoại cao cấp với chip A17 Pro, camera 48MP",
        image: "https://images.unsplash.com/photo-1696446702052-454771f6bd6f?w=500&h=500&fit=crop"
    },
    {
        id: 2,
        name: "MacBook Pro M3",
        category: "electronics",
        price: 45990000,
        description: "Laptop mạnh mẽ với chip M3, màn hình Retina",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop"
    },
    {
        id: 3,
        name: "Samsung Galaxy S24",
        category: "electronics",
        price: 22990000,
        description: "Smartphone flagship với AI tiên tiến",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&h=500&fit=crop"
    },
    {
        id: 4,
        name: "Áo khoác da nam",
        category: "fashion",
        price: 2490000,
        description: "Áo khoác da cao cấp, phong cách Hàn Quốc",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop"
    },
    {
        id: 5,
        name: "Váy dạ hội nữ",
        category: "fashion",
        price: 3990000,
        description: "Váy dạ hội sang trọng, thiết kế tinh tế",
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=500&fit=crop"
    },
    {
        id: 6,
        name: "Giày thể thao Nike",
        category: "sports",
        price: 3290000,
        description: "Giày chạy bộ Nike Air Zoom Pegasus",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop"
    },
    {
        id: 7,
        name: "Nồi cơm điện cao tần",
        category: "home",
        price: 4590000,
        description: "Nồi cơm công nghệ Nhật Bản, dung tích 1.8L",
        image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=500&h=500&fit=crop"
    },
    {
        id: 8,
        name: "Máy hút bụi Dyson",
        category: "home",
        price: 12990000,
        description: "Máy hút bụi không dây, công suất mạnh",
        image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=500&h=500&fit=crop"
    },
    {
        id: 9,
        name: "Tai nghe AirPods Pro",
        category: "electronics",
        price: 6490000,
        description: "Tai nghe không dây, chống ồn chủ động",
        image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500&h=500&fit=crop"
    },
    {
        id: 10,
        name: "Quần jean nam",
        category: "fashion",
        price: 890000,
        description: "Quần jean slim fit, chất liệu cotton cao cấp",
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop"
    },
    {
        id: 11,
        name: "Bàn làm việc gỗ",
        category: "home",
        price: 5990000,
        description: "Bàn làm việc gỗ sồi tự nhiên, thiết kế hiện đại",
        image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=500&h=500&fit=crop"
    },
    {
        id: 12,
        name: "Đồng hồ thông minh",
        category: "electronics",
        price: 8990000,
        description: "Apple Watch Series 9, theo dõi sức khỏe",
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&h=500&fit=crop"
    },
    {
        id: 13,
        name: "Balo laptop",
        category: "fashion",
        price: 1290000,
        description: "Balo chống nước, ngăn laptop 15.6 inch",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop"
    },
    {
        id: 14,
        name: "Tủ lạnh inverter",
        category: "home",
        price: 15990000,
        description: "Tủ lạnh 2 cửa, dung tích 420L, tiết kiệm điện",
        image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=500&h=500&fit=crop"
    },
    {
        id: 15,
        name: "Xe đạp thể thao",
        category: "sports",
        price: 7990000,
        description: "Xe đạp địa hình 24 tốc độ, khung nhôm",
        image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=500&h=500&fit=crop"
    }
];

// Cart array to store items
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Current filtered products
let filteredProducts = [...products];

// Initialize the page
function init() {
    updateCartCount();
    displayProducts(products);
    setupEventListeners();
}

// Setup event listeners
function setupEventListeners() {
    // Cart icon click
    const cartIcon = document.getElementById('cartIcon');
    cartIcon.addEventListener('click', viewCart);

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        filterProducts();
    });

    // Category filter
    const categoryFilter = document.getElementById('categoryFilter');
    categoryFilter.addEventListener('change', (e) => {
        filterProducts();
    });

    // Sort filter
    const sortFilter = document.getElementById('sortFilter');
    sortFilter.addEventListener('change', (e) => {
        sortProducts();
    });
}

// Display products
function displayProducts(productsToDisplay) {
    const productsGrid = document.getElementById('productsGrid');
    const productsCount = document.getElementById('productsCount');

    if (productsToDisplay.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products">
                <h3>😔 Không tìm thấy sản phẩm nào</h3>
                <p>Vui lòng thử tìm kiếm với từ khóa khác</p>
            </div>
        `;
        productsCount.textContent = 'Không có sản phẩm';
        return;
    }

    productsCount.textContent = `Hiển thị ${productsToDisplay.length} sản phẩm`;

    productsGrid.innerHTML = productsToDisplay.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image" 
                 onerror="this.src='https://via.placeholder.com/500?text=No+Image'">
            <div class="product-info">
                <div class="product-category">${getCategoryName(product.category)}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <div class="product-price">${formatPrice(product.price)}</div>
                    <button class="add-to-cart-btn" data-product-id="${product.id}">
                        Thêm vào giỏ
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // Add event listeners to all add-to-cart buttons
    const addToCartButtons = productsGrid.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-product-id'));
            addToCart(productId);
        });
    });
}

// Filter products
function filterProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const categoryFilter = document.getElementById('categoryFilter').value;

    filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) || 
                            product.description.toLowerCase().includes(searchTerm);
        const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;

        return matchesSearch && matchesCategory;
    });

    // Apply current sort after filtering
    sortProducts();
}

// Sort products
function sortProducts() {
    const sortValue = document.getElementById('sortFilter').value;
    let sortedProducts = [...filteredProducts];

    switch(sortValue) {
        case 'price-asc':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name-asc':
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
            break;
        default:
            // Keep original order
            break;
    }

    displayProducts(sortedProducts);
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    
    if (!product) return;

    // Check if product already exists in cart
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update cart count
    updateCartCount();

    // Show notification
    showToast(`✅ Đã thêm "${product.name}" vào giỏ hàng`);
}

// Update cart count
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// View cart (navigate to cart page)
function viewCart() {
    // You can create a cart.html page and navigate to it
    // For now, let's show an alert with cart info
    if (cart.length === 0) {
        showToast('🛒 Giỏ hàng của bạn đang trống');
        return;
    }

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    alert(`🛒 Giỏ hàng của bạn:\n\nSố lượng: ${totalItems} sản phẩm\nTổng tiền: ${formatPrice(totalPrice)}\n\n(Bạn có thể tạo trang cart.html để hiển thị chi tiết)`);
}

// Show toast notification
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Format price to VND
function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(price);
}

// Get category name in Vietnamese
function getCategoryName(category) {
    const categories = {
        electronics: 'Điện tử',
        fashion: 'Thời trang',
        home: 'Gia dụng',
        sports: 'Thể thao'
    };
    return categories[category] || category;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);