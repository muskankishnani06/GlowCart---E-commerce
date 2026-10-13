
# 🌸 GlowCart - E-Commerce Shopping Cart Web Application

GlowCart is an interactive, responsive front-end e-commerce application designed for a beauty and skincare store. Built with modern web standards using **HTML5**, **CSS3**, **Bootstrap 5**, and **Vanilla JavaScript**, it offers complete shopping cart functionality with local browser persistence.

---

## ✨ Features

- **Product Showcase**: Displays a responsive grid of products complete with images, titles, prices, and action buttons.
- **Dynamic Shopping Cart**:
  - Add items to cart with automatic quantity tracking.
  - View cart details in an interactive Bootstrap modal.
  - Increment and decrement product quantities.
  - Automatically calculate item sub-totals and grand totals.
- **Product Management (CRUD)**:
  - **Create**: Add new products dynamically via a modal form.
  - **Read**: Display product catalog stored in JavaScript/Local Storage.
  - **Update**: Edit product name, price, and image details through an update modal.
  - **Delete**: Remove products from the catalog or clear items from the cart.
- **Persistent Storage**: Utilizes browser `localStorage` to save user cart selections across sessions.
- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop viewports.

---

## 🛠️ Tech Stack & Dependencies

- **HTML5**: Semantic document structuring.
- **CSS3 / Bootstrap 5 (v5.3.8)**: Modern layout, components (Modals, Navbar, Cards, Forms), and responsive styling.
- **JavaScript (ES6+)**: Dynamic DOM manipulation, array manipulation, and event handling.
- **Web Storage API**: Browser `localStorage` integration.

---

## 📁 Project Structure

```text
├── assets/
│   └── Elegant Pink Purple G Logo.png   # Application Icon / Favicon
├── index.html                           # Main HTML layout & Bootstrap modal templates
├── style.css                            # Custom CSS styles, theme overrides, and animations
├── script.js                            # Main application logic (Cart & CRUD operations)
├── localStorage.js                      # Example utility helper for LocalStorage testing
└── README.md                            # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

No build tools or command-line dependencies are required to run this project! You only need a modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).

### Running Locally

1. **Clone or Download the Repository**:
   ```bash
   git clone https://github.com/your-username/glowcart.git
   ```
2. **Navigate to the Project Directory**:
   ```bash
   cd glowcart
   ```
3. **Open the Application**:
   - Double-click `index.html` to open it in your default browser.
   - *Alternatively*, run it using a local server extension such as **VS Code Live Server**.

---

## 💡 How It Works

### Local Storage Integration
- **Key**: `"cart"`
- When items are added, updated, or removed, the updated state is serialized using `JSON.stringify()` and written to `localStorage`.
- Upon initial load, the application retrieves data via `JSON.parse(localStorage.getItem("cart"))`.

### Key Functions (`script.js`)

| Function | Description |
| :--- | :--- |
| `showProduct()` | Renders the product list grid dynamically onto the DOM. |
| `addToCart(id)` | Adds selected product to the cart or increments quantity if already present. |
| `showCartItem()` | Opens the cart modal and triggers the table re-render. |
| `increaseQty(id)` / `decreaseQty(id)` | Updates item quantities in real-time within the cart table. |
| `grandTotal()` | Calculates total cart cost using Array `.reduce()`. |
| `addProduct()` | Captures form input and pushes a new product into the catalog. |
| `updateProduct(id)` | Populates update form with existing product values and updates catalog on submission. |
| `deleteToCart(id)` | Removes product entries from the main product list. |

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
