import React, { useEffect, useState } from 'react'

const ProductForm = ({ onAddProduct , products}) => {
    const[productId , setProductId] = useState("")
    const[sellingPrice , setSellingPrice] = useState('')
    const[productName , setProductName] = useState('')

    const handleAddProduct = () =>{
        if(productId && sellingPrice && productName){
            const product = {
                id: productId,
                price : parseInt(sellingPrice),
                name : productName
            }
            onAddProduct(product);
            setProductId('');
            setSellingPrice('');
            setProductName('');
        }
    }  
    
  return (
    <div>
      <h2>Add Product</h2>
      <input
        type="text"
        placeholder="Product ID"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <input
        type="number"
        placeholder="Selling Price"
        value={sellingPrice}
        onChange={(e) => setSellingPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  )
}

export default ProductForm;