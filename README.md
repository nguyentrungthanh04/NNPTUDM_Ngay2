# 🛍️ Product Catalog - Web Application

A responsive web application that loads and displays product data from a JSON database. Built with vanilla HTML, CSS, and JavaScript.

## 📋 Features

- **Dynamic Product Display**: Loads products from `db.json` and displays them in a beautiful grid layout
- **Search Functionality**: Search products by name or description
- **Category Filtering**: Filter products by category
- **Sorting Options**: Sort by price (low to high, high to low) or name (A to Z)
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Product Details**: Click on any product card to view detailed information
- **Modern UI**: Beautiful gradient background with smooth animations and hover effects

## 🚀 Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional installations required!

### Installation & Usage

1. **Open the application**
   - Double-click `index.html` or
   - Run a local server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (with http-server)
     npx http-server
     ```
   - Open your browser and navigate to `http://localhost:8000`

## 📁 Project Structure

```
product-catalog/
├── index.html          # Main HTML file with styling
├── script.js           # JavaScript logic for functionality
├── db.json             # Product database
└── README.md           # This file
```

## 📦 File Descriptions

### index.html
- Semantic HTML5 structure
- Embedded CSS with responsive grid layout
- Product card components with hover effects
- Filter section with search, category, and sort options

### script.js
- `loadData()`: Fetches products from `db.json`
- `filterAndRender()`: Applies filters and sorting logic
- `renderProducts()`: Dynamically generates product cards
- `showProductDetails()`: Displays product information on click
- Event listeners for real-time filtering

### db.json
- Array of product objects with detailed information including:
  - Product ID, title, slug, and price
  - Description and category information
  - Product images and timestamps
  - Covers multiple categories (Clothes, Electronics, Shoes, etc.)

## 🎨 Features Breakdown

### Search
- Real-time search as you type
- Searches across product titles and descriptions
- Case-insensitive matching

### Filtering
- Filter by product category
- Multiple category support based on data
- Combined with search functionality

### Sorting
- Default: Original order from database
- Price Low to High
- Price High to Low
- Name: Alphabetical (A to Z)

### UI/UX
- Responsive grid layout (auto-fill with minimum 280px columns)
- Smooth card hover animations
- Loading state indicator
- Error handling with user-friendly messages
- Empty state display when no products match filters
- Product count display

## 💻 Browser Compatibility

- ✅ Chrome/Chromium (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🔧 Technical Details

- **Vanilla JavaScript**: No frameworks or libraries required
- **Fetch API**: For loading JSON data
- **CSS Grid**: For responsive product layout
- **ES6+**: Modern JavaScript syntax

## 📊 Data Statistics

- Total Products: 700+
- Multiple Categories: Clothes, Electronics, Shoes, and more
- Price Range: $50 - $1000+
- All products include images, descriptions, and timestamps

## 🐛 Troubleshooting

### "Unable to load data from db.json"
- Ensure `db.json` is in the same directory as `index.html`
- Use a local server instead of opening the file directly
- Check browser console for errors

### Images not loading
- Placeholder images will be used if the original image URL fails
- Check the image URLs in `db.json`

## 👨‍💻 Author

**Nguyễn Trung Thành** - Student ID: 2280602950

---

**Last Updated**: January 29, 2026
