import React, { useState, useEffect } from 'react';

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleAddToCart = (product) => {
    const updatedCart = [...cart];
    const existingCartItem = updatedCart.find((item) => item.id === product.id);

    if (existingCartItem) {
      existingCartItem.quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    setCart(updatedCart);
  };

  const handleUpdateCartItem = (productId, quantity) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity } : item
    );
    setCart(updatedCart);
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <div>
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <span>{product.title}</span>
            <span>${product.price}</span>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <h2>Cart</h2>
      <div>
        {cart.map((item) => (
          <div key={item.id}>
            <span>{item.title}</span>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleUpdateCartItem(item.id, parseInt(e.target.value))}
            />
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
