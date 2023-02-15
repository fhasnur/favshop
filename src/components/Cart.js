import React from "react";

function Cart(props) {
  const cartItems = props.cartItems;

  return (
    <section>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price}</p>
          </li>
        ))}
      </ul>
      <p>Total: ${props.totalPrice}</p>
      <button>Checkout</button>
    </section>
  );
}

export default Cart;