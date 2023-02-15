import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  const products = [
    { id: 1, name: 'Product 1', description: 'This is the first product.', image: 'product1.jpg', price: 10 },
    { id: 2, name: 'Product 2', description: 'This is the second product.', image: 'product2.jpg', price: 20 },
    { id: 3, name: 'Product 3', description: 'This is the third product.', image: 'product3.jpg', price: 30 }
  ];

  const cartItems = [
    { id: 1, name: 'Product 1', price: 10, quantity: 2 },
    { id: 2, name: 'Product 2', price: 20, quantity: 1 }
  ];

  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="container">
      <Header />
      <main>
        <ProductList products={products} />
        <Cart cartItems={cartItems} totalPrice={totalPrice} />
      </main>
      <Footer />
    </div>
  );
}

export default App;