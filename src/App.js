import React from 'react';
import ProductList from './components/ProductList';
import './components/index.css';

const App = () => {
    return (
        <div className="App">
            <h1 className="header">Apple</h1>
            <ProductList />
        </div>
    );
};

export default App;
