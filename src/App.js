import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App() {
  const products = [
    { id: 1, name: 'Product 1', description: 'This is the first product.', image: 'product1.jpg', price: 10 },
    { id: 2, name: 'Product 2', description: 'This is the second product.', image: 'product2.jpg', price: 20 },
    { id: 3, name: 'Product 3', description: 'This is the third product.', image: 'product3.jpg', price: 30 }
  ];

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Container fixed>
        <main>
          <ProductList products={products} />
        </main>
        <Footer />
      </Container>
    </React.Fragment>
  );
}

export default App;