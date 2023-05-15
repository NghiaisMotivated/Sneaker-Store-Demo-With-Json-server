// variables and constants
const cartContainer = document.querySelector('.cart-container');
console.log(cartContainer)
const productList = document.querySelector('#row');
console.log(productList)
const cartList = document.querySelector('.cart-list');
console.log(cartList)
const cartTotalValue = document.getElementById('cart-total-value');
console.log(cartTotalValue)
const cartCountInfo = document.getElementById('cart-count-info');
console.log(productList)
let cartItemID = 1;

eventListeners();

// all event listeners
function eventListeners() {
    window.addEventListener('DOMContentLoaded', () => {
        loadJSON();
        loadCart();
    });
    // toggle navbar when toggle button is clicked
    document.querySelector('.navbar-toggler').addEventListener('click', () => {
        document.querySelector('.navbar-collapse').classList.toggle('show-navbar');
    });

    // show/hide cart container
    document.getElementById('cart-btn').addEventListener('click', () => {
        cartContainer.classList.toggle('show-cart-container');
    });

    // add to cart
    productList.addEventListener('click', purchaseProduct);

    // delete from cart
    cartList.addEventListener('click', deleteProduct);
}

// update cart info
function updateCartInfo() {
    let cartInfo = findCartInfo();
    cartCountInfo.textContent = cartInfo.productCount;
    cartTotalValue.textContent = cartInfo.total;
}

// load product items content form JSON file
// Biến để lưu API
var dataStore = 'http://localhost:3000/nikes';

fetch(dataStore)
    .then(function(response) {
        return response.json();
    })
    .then(function(nikes) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = nikes.map(function(nike) {
            return `
            <div class="card" style="width: 16rem; margin-Right: 30px">
            <img src="${nike.img}" class="card-img-top" alt="...">
            <div class="card-body text-center">
              <p class="card-title"><b>${nike.name}</b></p>
              <p class="card-price">${nike.price}</p>
              <a href="#" class="btn btn-dark">Add to cart</a>
            </div>
          </div>`
        })
        var html = htmls.join('');
        document.getElementById('row').innerHTML = html
        console.log(html)
    })


// purchase product
function purchaseProduct(e) {
    if (e.target.classList.contains('add-to-cart-btn')) {
        let product = e.target.parentElement.parentElement;
        getProductInfo(product);
    }
}

// get product info after add to cart button click
function getProductInfo(product) {
    let productInfo = {
        id: cartItemID,
        imgSrc: product.querySelector('.product-img img').src,
        name: product.querySelector('.product-name').textContent,
        category: product.querySelector('.product-category').textContent,
        price: product.querySelector('.product-price').textContent
    }
    cartItemID++;
    addToCartList(productInfo);
    saveProductInStorage(productInfo);
}

// add the selected product to the cart list
function addToCartList(product) {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.setAttribute('data-id', `${product.id}`);
    cartItem.innerHTML = `
        <img src = "${product.imgSrc}" alt = "product image">
        <div class = "cart-item-info">
            <h3 class = "cart-item-name">${product.name}</h3>
            <span class = "cart-item-category">${product.category}</span>
            <span class = "cart-item-price">${product.price}</span>
        </div>

        <button type = "button" class = "cart-item-del-btn">
            <i class = "fas fa-times"></i>
        </button>
    `;
    cartList.appendChild(cartItem);
}

// save the product in the local storage
function saveProductInStorage(item) {
    let products = getProductFromStorage();
    products.push(item);
    localStorage.setItem('products', JSON.stringify(products));
    updateCartInfo();
}

// get all the products info if there is any in the local storage
function getProductFromStorage() {
    return localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
    // returns empty array if there isn't any product info
}

// load carts product
function loadCart() {
    let products = getProductFromStorage();
    if (products.length < 1) {
        cartItemID = 1; // if there is no any product in the local storage
    } else {
        cartItemID = products[products.length - 1].id;
        cartItemID++;
        // else get the id of the last product and increase it by 1
    }
    products.forEach(product => addToCartList(product));

    // calculate and update UI of cart info 
    updateCartInfo();
}

// calculate total price of the cart and other info
function findCartInfo() {
    let products = getProductFromStorage();
    let total = products.reduce((acc, product) => {
        let price = parseFloat(product.price.substr(1)); // removing dollar sign
        return acc += price;
    }, 0); // adding all the prices

    return {
        total: total.toFixed(2),
        productCount: products.length
    }
}

// delete product from cart list and local storage
function deleteProduct(e) {
    let cartItem;
    if (e.target.tagName === "BUTTON") {
        cartItem = e.target.parentElement;
        cartItem.remove(); // this removes from the DOM only
    } else if (e.target.tagName === "I") {
        cartItem = e.target.parentElement.parentElement;
        cartItem.remove(); // this removes from the DOM only
    }

    let products = getProductFromStorage();
    let updatedProducts = products.filter(product => {
        return product.id !== parseInt(cartItem.dataset.id);
    });
    localStorage.setItem('products', JSON.stringify(updatedProducts)); // updating the product list after the deletion
    updateCartInfo();
}