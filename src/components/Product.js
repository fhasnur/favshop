import React from "react";

function Product(props) {
  const product = props.product;

  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <img src={product.image} alt={product.name} />
      <p>${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;