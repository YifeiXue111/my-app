// components/ProductList.js
import React, { useState } from 'react';

const ProductList = ({ products, addToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const filteredProducts = products.filter(product => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
           product.category.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name or category"
        className="form-control mb-3"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredProducts.map(product => (
        <div key={product.id} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">Category: {product.category}</p>
            <button
              className="btn btn-primary"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
