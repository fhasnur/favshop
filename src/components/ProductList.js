import React from "react";
import Product from "./Product";

function ProductList(props) {
  const products = props.products;

  return (
    <section>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Product product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProductList;