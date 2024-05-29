import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const ProductList = ({ onAddToCart, filters }) => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/tshirts')
            .then(response => setProducts(response.data))
            .catch(error => console.error(error));
    }, []);

    const filteredProducts = products.filter(product => {
        return (
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (filters.gender ? product.gender === filters.gender : true) &&
            (filters.color ? product.color === filters.color : true) &&
            (filters.type ? product.type === filters.type : true) &&
            product.price >= filters.priceRange[0] &&
            product.price <= filters.priceRange[1]
        );
    });

    return (
        <div className="container">
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
            />
            <div className="products">
                {filteredProducts.map(product => (
                    <div className="product-card" key={product.id}>
                        <img src={`images/${product.name.replace(' ', '_').toLowerCase()}.jpg`} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>Color: {product.color}</p>
                        <p>Type: {product.type}</p>
                        <p>Gender: {product.gender}</p>
                        <p>${product.price}</p>
                        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
