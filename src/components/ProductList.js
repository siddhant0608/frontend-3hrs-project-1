import React from 'react';

const ProductList = ({ products, onDeleteProduct }) => {
  const totalPrice = products.reduce((total, product) => total + product.price, 0);
console.log(products);
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.length > 0 && products?.map((product) => (
          <li key={product.id}>
            {product.name} - ${product?.price?.toFixed(2)}
            <button onClick={() => onDeleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default ProductList;