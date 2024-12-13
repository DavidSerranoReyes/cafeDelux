let cart = [];

function addToCart(productName, price, quantity) {
  // Verifica si el producto ya está en el carrito
  let found = false;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === productName) {
      cart[i].quantity += parseInt(quantity); // Si ya existe, aumentamos la cantidad
      found = true;
      break;
    }
  }

  if (!found) {
    // Si el producto no está en el carrito, lo agregamos
    cart.push({
      name: productName,
      price: price,
      quantity: parseInt(quantity),
    });
  }

  updateCart();
}

function updateCart() {
  // Limpiar la lista actual
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';

  let total = 0;

  // Actualizamos la lista de productos en el carrito
  cart.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
    cartItems.appendChild(li);

    total += item.price * item.quantity;
  });

  // Actualizamos el total del carrito
  document.getElementById('cart-total').textContent =
    `Total: $${total.toFixed(2)}`;
}

document
  .getElementById('checkout-form')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Aquí podrías manejar el envío del pedido (por ejemplo, enviarlo a un servidor)
    alert('Pedido realizado con éxito');
  });
