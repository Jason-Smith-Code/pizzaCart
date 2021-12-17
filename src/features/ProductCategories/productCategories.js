import React from 'react';
import './productCategories.css';

export function ProductCategories() {

    // write out the array of items here
    const categories = ['Pizza', 'Kebab', 'Wraps', 'Peri Peri Chicken', 'Burgers', 'Fajitas', 'Chips', 'Sides', 'Dips', 'Drinks', 'Desserts', 'Alcohol' ];

    return (
        <ul className="">
          {categories.map(category => (
            <li className="categoryItem" key={category}>
                <p>{category}</p>
            </li>
          ))}
        </ul>
    );
}
