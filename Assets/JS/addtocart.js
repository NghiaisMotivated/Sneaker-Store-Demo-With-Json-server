

// open and close cart
const cartIcon = document.querySelector('#cart-icon');
const cart = document.querySelector('.cart');
const closeCart = document.querySelector('#cart-close');
console.log(cartIcon, cart, closeCart);


// open 
cartIcon.addEventListener('click', () => {
    cart.classList.add('active'); // add css selector .active for cart 
})

// close
closeCart.addEventListener('click', () => {
    cart.classList.remove('active')
})

// start when the document is ready
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", start);
} else {
    start();
}


// Start
function start() {
    addEvents()
}

// Update and renderer
function update() {
    addEvents()
    updateTotal();
}


// Add event
addEvents = () => {
    // Remove items from cart 
    let cartRemove_btns = document.querySelectorAll('.cart-remove');
    console.log(cartRemove_btns);


    cartRemove_btns.forEach(btn => {
        btn.addEventListener("click", handle_removeCartIem);
    });

    // change item quantity
    let cartQuantity_inputs = document.querySelectorAll('.cart-quantity');
    cartQuantity_inputs.forEach(input => {
        input.addEventListener("change", handle_changeItemQuanity)
    });


    // add item to cart 
    let addCart_btns = document.querySelectorAll(".add-cart");
    console.log(addCart_btns);
    addCart_btns.forEach(btn => {
        btn.addEventListener("click", handle_addItemToCart)
    });


    // Buy order
    const buy_btn = document.querySelector('.btn-buy');
    buy_btn.addEventListener('click', handdle_buyOrder)

};

let itemsAdded = [];
// add product to cart
function handle_addItemToCart() {
    let product = this.parentElement;
    let title = product.querySelector(".product-title").innerHTML;
    let price = product.querySelector(".product-price").innerHTML;
    let imgSRC = product.querySelector(".product-img").src;
    console.log(title, imgSRC, price);


    let newToAdd = {
        title,
        price,
        imgSRC
    }



    // handle item is already exist
    if (itemsAdded.find((element) =>
            element.title == newToAdd.title
        )) {
        alert("This items has already added");
        return
    } else {
        itemsAdded.push(newToAdd)
    }
    // add product 
    let cartBoxElement = cartBoxComponent(title, price, imgSRC);
    let newNode = document.createElement("div");
    newNode.innerHTML = cartBoxElement;
    const cartContent = cart.querySelector(".cart-content");
    cartContent.appendChild(newNode)

    update();
}





// handle remove cart items
function handle_removeCartIem() {
    this.parentElement.remove();

    itemsAdded = itemsAdded.filter(
        element => element.title !=
        this.parentElement.querySelector('.cart-product-title'))

    update();
}




function handle_changeItemQuanity() {
    if (isNaN(this.value) || this.value < 1) { // because quaity have number âm 
        this.value = 1;
    }
    this.value = Math.floor(this.value) // to keep it interger

    update();
}





// update & renderer functions 
function updateTotal() {
    let cartBoxes = document.querySelectorAll('.cart-box');
    const totalElement = cart.querySelector('.total-price');
    let total = 0;
    cartBoxes.forEach(cartBox => {
        let priceElement = cartBox.querySelector(".cart-price");
        let price = parseFloat(priceElement.innerHTML.replace("$", ""));
        let quantity = cartBox.querySelector('.cart-quantity').value;
        total += price * quantity;
    });

    // keep 2 digits after deciaml point 
    total = total.toFixed(2); // Giữ số đuôi của total

    totalElement.innerHTML = "$" + total;
}



// html component
function cartBoxComponent(title, price, imgSRC) {
    return `
    <div class="cart-box">
    <img src="${imgSRC}">
    <div class="detail-box">
        <div class="cart-product-title">${title}</div>
        <div class="cart-price">${price}</div>
        <input style="width: 50px;" type="number" value="1" class="cart-quantity">
    </div>

    <!-- remove cart -->
    <i class="fa-solid fa-trash cart-remove"></i>
</div>`

}


function handdle_buyOrder() {
    if (itemsAdded.length <= 0) {
        alert('Your cart is empty!')
    } else {
        alert('Check your email please!')
    }
}