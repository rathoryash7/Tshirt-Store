import React from 'react';
import './App.css';

const Filters = ({ filters, setFilters }) => {
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value
        }));
    };

    const handlePriceChange = (e) => {
        const value = e.target.value.split(',').map(Number);
        setFilters(prevFilters => ({
            ...prevFilters,
            priceRange: value
        }));
    };

    return (
        <div className="filters container">
            <select name="gender" onChange={handleFilterChange} value={filters.gender}>
                <option value="">All Genders</option>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
            </select>
            <select name="color" onChange={handleFilterChange} value={filters.color}>
                <option value="">All Colors</option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
                <option value="Yellow">Yellow</option>
            </select>
            <select name="type" onChange={handleFilterChange} value={filters.type}>
                <option value="">All Types</option>
                <option value="Polo">Polo</option>
                <option value="T-shirt">T-shirt</option>
            </select>
            <input type="range" name="priceRange" min="0" max="100" step="1" value={filters.priceRange.join(',')} onChange={handlePriceChange} />
        </div>
    );
};

export default Filters;
