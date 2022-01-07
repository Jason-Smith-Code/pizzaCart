import React from 'react';
import Filter from './Filter';

// write out the array of categories here
const categories = [
  'All',
  'Margarita', 
  'Funghi', 
  'Pepperoni', 
  'Polo', 
  'Salami', 
  'Ham', 
  'Prawn', 
  'Milanese', 
  'Carribean', 
  'Pazza', 
  'Bolognese', 
  'Special Polo',
  'Vegetarian',
  'Venisera',
  'Valentina',
  'Toscana',
  'Quindici',
  'Quattro',
  'Neptune',
  'Pescatore',
  'Meat Feast'
];

// Sort the array alphabetically so users can find their category faster
categories.sort();

// Return a map of categories, supply 2 props to the Filter

const Filters = () => {
    return (
        <div className="filterContainer">
          {categories.map(category =>
            <Filter 
              category={category}
              key={category}
            />)}
        </div>
    );
}

export default Filters;
