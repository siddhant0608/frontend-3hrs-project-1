import React, { useState, useEffect } from 'react';
import './App.css';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
const oldProducts = JSON.parse(localStorage.getItem('products')) || [];

function App() {
  const [products, setProducts] = useState(oldProducts);
  

  const handleAddProduct = (product) => {
    const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const newProducts = [...savedProducts, product];
    localStorage.setItem('products', JSON.stringify(newProducts));
    setProducts([...products, product]);
  };


  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    localStorage.setItem('products', JSON.stringify(updatedProducts));

    setProducts(updatedProducts);
  };

  
  return (
    <div className="App">
    <h1>Seller Admin Page</h1>
    <ProductForm  products={products} onAddProduct={handleAddProduct} />
    <ProductList products={products} onDeleteProduct={handleDeleteProduct} />
  </div>
  );
}

export default App;
