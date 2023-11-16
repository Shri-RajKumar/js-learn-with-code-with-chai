// app.js
const cartItems = [];
const totalAmount = document.getElementById("total-amount");
const orderSummary = document.getElementById("order-summary");

function addToCart(itemName, itemPrice) {
    const quantity = parseInt(prompt("Enter the quantity:", 1));

    if (quantity <= 0) return;

    const totalPrice = itemPrice * quantity;
    cartItems.push({ name: itemName, price: totalPrice, quantity: quantity });
    updateCart();
}

function updateCart() {
    orderSummary.innerHTML = "";
    let total = 0;

    cartItems.forEach(item => {
        total += item.price;
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} x ${item.quantity} - $${item.price.toFixed(2)}`;
        orderSummary.appendChild(listItem);
    });

    totalAmount.textContent = `$${total.toFixed(2)}`;
}

function placeOrder() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (cartItems.length === 0) {
        alert("Your cart is empty. Add items to the cart before placing the order.");
        return;
    }

    alert(`Thank you, ${name}! Your order has been placed.\nTotal: ${totalAmount.textContent}\nCheck your email (${email}) for further details.`);

    // Clear the cart and form
    cartItems.length = 0;
    updateCart();
    document.getElementById("order-form").reset();
}
