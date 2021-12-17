import React from 'react';
import './productList.css';

export function ProductList() {

    // write out the array of items here
    const products = [
        {
            category: 'Pizza',
            title: 'Margarita',
            subtitle: 'Mozarella Cheese',
            size: '8"',
            price: 3.5,
            key: 1
        },
        {
            category: 'Pizza',
            title: 'Margarita',
            subtitle: 'Mozarella Cheese',
            size: '10"',
            price: 3.5,
            key: 2
        },
        {
            category: 'Pizza',
            title: 'Margarita',
            subtitle: 'Mozarella Cheese',
            size: '12"',
            price: 3.5,
            key: 3
        },
        {
            category: 'Pizza',
            title: 'Margarita',
            subtitle: 'Mozarella Cheese',
            size: '14"',
            price: 3.5,
            key: 4
        },
        {
            category: 'Chips',
            title: 'Chips',
            price:1,
            key: 5
        }
    ];  

    let printProducts = products.map(function(product){
        return (
                <div className="productContainer" key={product.key}>
                    <p>{product.category}</p>
                    <h2>{product.title}</h2>
                    <p>{product.subtitle}</p>
                    <p>{product.size}</p>
                    <p className="price">{product.price}</p>    
                    <button>Add to Cart</button>
                </div>
        );
    })

    return (
        <ul className="">
          {printProducts}
        </ul>
    );
}