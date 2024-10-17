import React from 'react';
import './index.css';

const ProductCard = ({ product, onSelect, isSelected }) => {
    const { name, price, description, image } = product;

    const cardClass = isSelected ? 'selected card' : 'card';

    return (
        <div className={cardClass} onClick={onSelect}>
            <img src={image} alt={name} className="image" />
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Price: ${price}</p>
        </div>
    );
};

export default ProductCard;
