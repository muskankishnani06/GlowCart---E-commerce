let products = [
  {
    id: 1,
    name: "Vitamin C Face Serum",
    img: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=600",
    price: 499,
  },
  {
    id: 2,
    name: "Hydrating Face Moisturizer",
    img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600",
    price: 399,
  },
  {
    id: 3,
    name: "Gentle Face Cleanser",
    img: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=600",
    price: 299,
  },
  {
    id: 4,
    name: "Sunscreen SPF 50",
    img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600",
    price: 449,
  },
  {
    id: 5,
    name: "Rose Face Toner",
    img: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600",
    price: 349,
  },
  {
    id: 6,
    name: "Nourishing Face Cream",
    img: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=600",
    price: 599,
  },
  {
    id: 7,
    name: "Lip Care Balm",
    img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600",
    price: 199,
  },
  {
    id: 8,
    name: "Matte Lipstick",
    img: "https://images.pexels.com/photos/6527704/pexels-photo-6527704.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 299,
  },
  {
    id: 9,
    name: "Facial Beauty Oil",
    img: "https://images.pexels.com/photos/30595022/pexels-photo-30595022.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 549,
  },
  {
    id: 10,
    name: "Under Eye Cream",
    img: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600",
    price: 399,
  },
  {
    id: 11,
    name: "Clay Face Mask",
    img: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600",
    price: 349,
  },
  {
    id: 12,
    name: "Makeup Brush Set",
    img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600",
    price: 699,
  },
];

let localCartItem = JSON.parse(localStorage.getItem("cart")) || [];

// ADDED: searchText parameter + filtering
function showProduct(searchText = "") {
  const productList = document.getElementById("product-list");

  productList.innerHTML = "";

  // ADDED: keep only products whose name matches the search text
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchText.toLowerCase())
  );

  // ADDED: message when nothing matches
  if (filteredProducts.length === 0) {
    productList.innerHTML = `<h5 class="text-center mt-5">No products found</h5>`;
    return;
  }

  filteredProducts.forEach((p) => {
    productList.innerHTML += `<div class="col-md-4 mt-3">
        
        <div class="card product-card" >
               <img src="${p.img}" class="card-img-top product-img" alt="${p.name}">
                    <div class="card-body">
                        <h5 class="card-title">${p.name}</h5>
                        <h5 class="card-text">₹${p.price}</h5>
                       <button class="btn btn-primary" onclick = "addToCart(${p.id})" >Add to Cart</button>
                       <button class="btn btn-warning text-white" onclick = "updateProduct(${p.id})" >Update</button>

                       <button class="btn btn-danger" onclick = "deleteToCart(${p.id})" >delete</button>   
                    </div>
                </div> 
        </div>`;
  });
}

showProduct();

// search bar
// CHANGED: selects your existing form/input, so no HTML changes are needed
const searchForm = document.querySelector('form[role="search"]');
const searchInput = document.querySelector(".search");

// when Search button is clicked / Enter is pressed
searchForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let searchText = searchInput.value.trim();

  showProduct(searchText);
});

// ADDED: live search while typing
searchInput.addEventListener("input", function () {
  showProduct(searchInput.value.trim());
});

// add to cart

function addToCart(id) {
  try {
    let productItem = localCartItem.find((p) => p.id === id);

    console.log("already product", productItem);

    if (productItem) {
      let productQty = productItem.qty++;
      console.log("productQty", productQty);
    } else {
      productItem = products.find((p) => p.id === id);

      localCartItem.push({ ...productItem, qty: 1 });
    }

    updateLocalStorage();
    alert("item added successfully");
  } catch (error) {
    console.log(error);
  }
}

function updateLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(localCartItem));
  showCartData();
  grandTotal();
}

function showCartItem() {
  const cartModal = document.getElementById("cartModal");
  const modal = new bootstrap.Modal(cartModal);

  modal.show();
  showCartData();
  grandTotal();
}

function showCartData() {
  const tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";

  localCartItem.forEach((p, index) => {
    tableBody.innerHTML += `
        <tr key={index}>
        <td>${index + 1}</td>
        <td><img src=${p.img} class="cartProductImg" alt=${p.name}></img></td>
        <td>${p.name}</td>
        <td>₹${p.price}</td>    
    <td>
    <div class="d-flex justify-content-center align-items-center gap-3" >
     <button class= "btn btn-outline-success" onclick="increaseQty(${p.id})">+</button>
     <h5>${p.qty}</h5>
     <button class= "btn btn-outline-warning" onclick="decreaseQty(${p.id})">-</button>
    </div>
    </td>
    <td>₹${p.qty * p.price}</td>
    <td><button class= "btn btn-outline-danger" onclick="removeProduct(${p.id})">Remove</button></td>
     </tr>`;
  });
}

function increaseQty(id) {
  try {
    const product = localCartItem.find((p) => p.id === id);

    if (product) {
      product.qty++;
    }

    updateLocalStorage();
  } catch (error) {
    console.log(error);
  }
}

function decreaseQty(id) {
  try {
    const index = localCartItem.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new Error("product not found");
    }
    const product = localCartItem.find((p) => p.id === id);

    if (product) {
      product.qty--;
    }

    if (product.qty === 0) {
      localCartItem.splice(index, 1);
    }

    updateLocalStorage();
  } catch (error) {
    console.log(error);
  }
}

function removeProduct(id) {
  const index = localCartItem.findIndex((p) => p.id === id);

  localCartItem.splice(index, 1);

  updateLocalStorage();
}

function grandTotal() {
  const total = document.getElementById("GrandTotal");
  total.innerHTML = "";

  const totalAmounts = localCartItem.reduce((acc, curr) => {
    return (acc += curr.price * curr.qty);
  }, 0);

  total.innerHTML = `Grand Total<h5>₹${totalAmounts}</h5>`;
}

function checkOut() {
  try {
    if (localCartItem.length === 0) {
      alert("your cart is empty please add some product");
    }
    alert("your order placed successfully");

    localCartItem = [];
    updateLocalStorage();

    const cartModal = document.getElementById("cartModal");
    let modal = bootstrap.Modal.getInstance(cartModal);

    if (modal) {
      modal.hide();
    }
  } catch (error) {
    console.log(error);
  }
}

function addProductModalShow() {
  const addProductModal = document.getElementById("addProductModal");

  const modal = new bootstrap.Modal(addProductModal);

  modal.show();
}

function addProduct() {
  const productName = document.getElementById("productName").value.trim();
  const ProductPrice = document.getElementById("ProductPrice").value.trim();
  const ProductImage = document.getElementById("ProductImage").value.trim();

  if (!productName || !ProductPrice || !ProductImage) {
    alert("product details are required");
  }

  const newProduct = {
    id: new Date().getTime(),
    name: productName,
    price: ProductPrice,
    img: ProductImage,
  };

  console.log("new", newProduct);
  products.push(newProduct);

  updateLocalStorage();

  console.log("products", products);

  alert("new product added successfully");

  showProduct();
}

function deleteToCart(id) {
  const deleteProduct = products.find((p) => p.id === id);

  if (!deleteProduct) {
    throw new Error("product not found");
  }
  alert("product deleted successfully");

  products = products.filter((p) => p.id !== id);

  alert("product deleted");

  showProduct();
}

function updateProduct(id) {
  const updateModal = document.getElementById("updateProductModal");

  const modal = new bootstrap.Modal(updateModal);

  modal.show();

  const product = products.find((p) => p.id === id);

  if (!product) {
    alert("product not found");
  }

  document.getElementById("updateProductName").value = product.name;
  document.getElementById("updateProductPrice").value = product.price;
  document.getElementById("updateProductImage").value = product.img;

  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    alert("product not found");
  }
  const form = document.getElementById("updateProductForm");

  form.onsubmit = function (e) {
    e.preventDefault();

    const newName = document.getElementById("updateProductName").value.trim();
    const newprice = document.getElementById("updateProductPrice").value.trim();
    const newimage = document.getElementById("updateProductImage").value.trim();

    products[index] = {
      ...products[index],
      name: newName,
      price: newprice,
      image: newimage,
    };

    alert("product detail updated");

    modal.hide();

    showProduct();
  };
}