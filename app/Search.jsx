import React, { useState, useEffect } from 'react';
import './styles.css';

export default function Search() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=20')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error("Error fetching items:", error);
      });
  }, []);

  const filteredProducts = products
    .filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    
  return (
    <div>
      <input
        type="text"
        className='bar'
        placeholder='Search for...'
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="shop">
        {filteredProducts.map((product) => (
          <div key={product.id} className="item">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
