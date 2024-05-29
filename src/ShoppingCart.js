import React from 'react';
import './App.css';

const ShoppingCart = ({ cartItems, onRemoveFromCart, onIncreaseQuantity, onDecreaseQuantity }) => {
    const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            <div>
                {cartItems.map(item => (
                    <div className="cart-item" key={item.id}>
                        <h3>{item.name}</h3>
                        <p>${item.price} x {item.quantity}</p>
                        <div>
                            <button onClick={() => onIncreaseQuantity(item)}>+</button>
                            <button onClick={() => onDecreaseQuantity(item)}>-</button>
                            <button onClick={() => onRemoveFromCart(item)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
            <h3>Total: ${totalAmount.toFixed(2)}</h3>
        </div>
    );
};

export default ShoppingCart;
