# GlowCart

GlowCart is a simple front-end e-commerce web app for skincare and beauty products. It is built with plain HTML, CSS, JavaScript and Bootstrap 5, and uses the browser's `localStorage` to keep the shopping cart between visits.

## Features

- **Product listing** - responsive grid of 12 skincare and makeup products with image, name and price (in ₹).
- **Add to cart** - add a product; adding the same product again increases its quantity.
- **Cart modal** - view all cart items with image, price, quantity and line total.
- **Quantity controls** - increase (+) or decrease (-) quantity; decreasing to 0 removes the item.
- **Remove item** - remove a product from the cart completely.
- **Grand total** - automatically recalculated whenever the cart changes.
- **Checkout** - places the order and clears the cart.
- **Add product** - add a new product (name, price, image URL) from a modal form.
- **Update product** - edit an existing product's name, price and image.
- **Delete product** - remove a product from the product list.
- **Persistent cart** - cart data is saved in `localStorage` under the key `cart`.
- **Responsive design** - works on desktop, tablet and mobile with a custom pink/purple theme.

## Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Page structure |
| CSS3 | Custom styling and responsive layout |
| JavaScript (ES6) | App logic and DOM manipulation |
| Bootstrap 5.3.8 (CDN) | Layout, navbar, modals, buttons, tables |
| localStorage | Cart persistence |

## Project Structure

```
GlowCart/
├── index.html        # Main page: navbar, product list, cart/add/update modals
├── style.css         # Custom theme and responsive styles
├── script.js         # Product data, cart logic, CRUD operations
├── localStorage.js   # Standalone localStorage practice/demo file (not used by the app)
├── assets/           # Images (e.g. favicon: "Elegant Pink Purple G Logo.png")
└── README.md
```

## Getting Started

No build step or dependencies to install.

1. Download or clone the project.
2. Make sure the `assets/` folder with the favicon image is in the project root (optional, only affects the tab icon).
3. Open `index.html` in any modern browser.

An internet connection is needed for the Bootstrap CDN and the product images (Unsplash / Pexels).

Optionally, run a local server:

```bash
# Python
python -m http.server 8000

# or Node
npx serve .
```

Then visit `http://localhost:8000`.

## How to Use

1. **Browse** products on the home page.
2. Click **Add to Cart** on any product.
3. Open **Cart** in the navbar to adjust quantities, remove items, or **Check Out**.
4. Click **Add product** in the navbar to create a new product by providing a name, price and image URL.
5. Use **Update** or **Delete** on a product card to edit or remove it.

## Known Issues / Future Improvements

These are things in the current code worth fixing:

- **Products are not persisted.** Added, updated or deleted products live only in memory and reset on page refresh. Only the cart is saved. Saving `products` to `localStorage` would fix this.
- **Update bug:** the update handler saves the image as `image` instead of `img`, so image changes don't show up.
- **Price stored as string:** new/updated products store `price` as text, which can break cart totals (string concatenation instead of addition). Convert with `Number()`.
- **Missing validation:** `addProduct()` and `updateProduct()` show an alert for empty fields but continue anyway; add a `return`. The same applies to `checkOut()` with an empty cart, which still shows the success message.
- **Search is not implemented.** The search box in the navbar is UI only.
- **Add-product form** doesn't reset after submitting, and its modal doesn't close automatically.
- **Cart table markup:** `<tbody>` is placed inside `<thead>` in `index.html`.
- **`localStorage.js`** is not linked in `index.html` and would throw an error if used there (the `#localStorage` element is commented out). It can be removed or kept as a practice file.
- **Duplicate alerts** appear when deleting a product.
- Product deletion/cart item references use numeric IDs inline in `onclick`; consider event listeners for cleaner code.

## Author

 Muskan Kishnani

