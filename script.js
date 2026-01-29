// Global variables
let allProducts = [];
let filteredProducts = [];

// Initialize the application
async function init() {
    try {
        await loadData();
        populateCategoryFilter();
        setupEventListeners();
        renderProducts(allProducts);
    } catch (error) {
        showError('Failed to load products. Please check the console for details.');
        console.error('Initialization error:', error);
    }
}

// Load data from db.json
async function loadData() {
    try {
        const response = await fetch('db.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        allProducts = await response.json();
        filteredProducts = [...allProducts];
        hideLoading();
    } catch (error) {
        showError('Unable to load data from db.json');
        throw error;
    }
}

// Populate category filter dropdown
function populateCategoryFilter() {
    const categories = [...new Set(allProducts.map(product => product.category.name))];
    const categoryFilter = document.getElementById('categoryFilter');
    
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
}

// Setup event listeners for filters and search
function setupEventListeners() {
    document.getElementById('searchInput').addEventListener('input', filterAndRender);
    document.getElementById('categoryFilter').addEventListener('change', filterAndRender);
    document.getElementById('sortFilter').addEventListener('change', filterAndRender);
}

// Filter and render products based on user input
function filterAndRender() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const selectedCategory = document.getElementById('categoryFilter').value;
    const sortOption = document.getElementById('sortFilter').value;

    // Filter products
    filteredProducts = allProducts.filter(product => {
        const matchesSearch = 
            product.title.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm);
        
        const matchesCategory = 
            selectedCategory === '' || product.category.name === selectedCategory;
        
        return matchesSearch && matchesCategory;
    });

    // Sort products
    switch (sortOption) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
            break;
        default:
            // Keep original order
            break;
    }

    renderProducts(filteredProducts);
}

// Render products to the DOM
function renderProducts(products) {
    const container = document.getElementById('productsContainer');
    const emptyState = document.getElementById('emptyState');
    const table = document.getElementById('productsTable');
    const stats = document.getElementById('productCount');

    if (products.length === 0) {
        container.innerHTML = '';
        table.style.display = 'none';
        emptyState.style.display = 'block';
        stats.textContent = 'No products found';
        return;
    }

    emptyState.style.display = 'none';
    table.style.display = 'table';
    stats.textContent = `Showing ${products.length} product${products.length !== 1 ? 's' : ''} out of ${allProducts.length} total`;

    container.innerHTML = products.map(product => `
        <tr>
            <td>
                <img 
                    src="${product.images[0]}" 
                    alt="${product.title}" 
                    class="product-img"
                    onerror="this.src='https://placehold.co/600x400?text=No+Image'"
                >
            </td>
            <td><strong>${product.title}</strong></td>
            <td><span class="badge-category">${product.category.name}</span></td>
            <td>
                <small class="text-muted">${product.description.substring(0, 50)}...</small>
            </td>
            <td><span class="price-badge">$${product.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span></td>
            <td><span class="text-muted">#${product.id}</span></td>
            <td>
                <button class="action-btn" onclick="showProductDetails(${product.id})">
                    <i class="fas fa-eye"></i> View
                </button>
            </td>
        </tr>
    `).join('');
}

// Show product details in alert
function showProductDetails(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (product) {
        alert(`
📦 Product Details
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${product.title}
Price: $${product.price}
Category: ${product.category.name}
ID: ${product.id}

Description:
${product.description}

Created: ${new Date(product.creationAt).toLocaleDateString()}
        `);
    }
}

// Hide loading indicator
function hideLoading() {
    document.getElementById('loading').style.display = 'none';
}

// Show error message
function showError(message) {
    const errorElement = document.getElementById('error');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    document.getElementById('loading').style.display = 'none';
}

// Start the application when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
