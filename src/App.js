import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './ProductList';
import Filters from './Filters';
import ShoppingCart from './ShoppingCart';
import './App.css';


const App = () => {
    const [cartItems, setCartItems] = useState([]);
    const [filters, setFilters] = useState({ gender: '', color: '', type: '', priceRange: [0, 100] });

    const handleAddToCart = (product) => {
        const existingItem = cartItems.find(item => item.id === product.id);
        if (existingItem) {
            if (existingItem.quantity < product.quantity) {
                setCartItems(cartItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                ));
            } else {
                alert('Cannot add more than available quantity');
            }
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    const handleRemoveFromCart = (product) => {
        setCartItems(cartItems.filter(item => item.id !== product.id));
    };

    const handleIncreaseQuantity = (product) => {
        const existingItem = cartItems.find(item => item.id === product.id);
        if (existingItem.quantity < product.quantity) {
            setCartItems(cartItems.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            alert('Cannot add more than available quantity');
        }
    };

    const handleDecreaseQuantity = (product) => {
        const existingItem = cartItems.find(item => item.id === product.id);
        if (existingItem.quantity > 1) {
            setCartItems(cartItems.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
            ));
        }
    };

    return (
        <Router>
            <div className="container">
                <header className="header">
                    <div className="header-title">
                        <h1>T-Shirt Store</h1>
                    </div>
                    <div className="header-cart">
                        <Link to="/cart">
                            <img src="images\Cart.jpg" alt="Cart" className="cart-icon" />
                        </Link>
                    </div>
                </header>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Filters filters={filters} setFilters={setFilters} />
                            <ProductList onAddToCart={handleAddToCart} filters={filters} />
                        </>
                    } />
                    <Route path="/cart" element={
                        <ShoppingCart
                            cartItems={cartItems}
                            onRemoveFromCart={handleRemoveFromCart}
                            onIncreaseQuantity={handleIncreaseQuantity}
                            onDecreaseQuantity={handleDecreaseQuantity}
                        />
                    } />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
