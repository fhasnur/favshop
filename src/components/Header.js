import React from "react";

function Header() {
  return (
    <header>
      <img src="logo.png" alt="Favshop Logo" />
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/cart">Cart</a></li>
          <li><a href="/checkout">Checkout</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;