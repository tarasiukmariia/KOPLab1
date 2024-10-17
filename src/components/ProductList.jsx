import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './index.css';

const ProductList = () => {
    const [selectedProductId, setSelectedProductId] = useState(null);

    const products = [
        { id: 1, name: 'Iphone 15 Pro', price: 999, description: 'iPhone 15 Pro, titanium color, premium design.', image: 'https://i.pinimg.com/control/564x/9d/04/8e/9d048e028a5535a4cdc0ae0d05f3eacf.jpg' },
        { id: 2, name: 'iPhone 12', price: 599, description: 'iPhone 12, black color, sleek design.', image: 'https://i.pinimg.com/474x/1b/59/5f/1b595f74d2a60f3cb8f594ea35372e0d.jpg' },
        { id: 3, name: 'Iphone 13', price: 649, description: 'iPhone 13, pink color, elegant finish.', image: 'https://i.pinimg.com/control/564x/d5/e3/4d/d5e34d4acc6d7afa24025049cfc463f5.jpg' },
        { id: 4, name: 'Iphone 16', price: 799, description: 'Phone 16, blue color, modern aesthetic design.', image: 'https://i.pinimg.com/564x/70/80/b4/7080b4d8e62a2df1d972539bd0718dd3.jpg' },
        { id: 5, name: 'Iphone 16 Pro', price: 1099, description: 'iPhone 16 Pro, gold color, luxurious premium design.', image: 'https://i.pinimg.com/564x/48/b1/41/48b14183af4904217e8a0faeba0ad5ab.jpg' },
    ];

    const handleSelectProduct = (id) => {
        setSelectedProductId(id);
    };

    return (
        <div className="productList">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onSelect={() => handleSelectProduct(product.id)}
                    isSelected={product.id === selectedProductId}
                />
            ))}
        </div>
    );
};

export default ProductList;
