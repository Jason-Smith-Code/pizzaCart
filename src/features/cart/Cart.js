import React from 'react';

export function Cart() {

    // write out the array of items here
    const initalCart = [
      {
        category: 'Pizza',
        title: 'Margarita',
        subtitle: 'Mozarella Cheese',
        size: '8"',
        price: 3.5,
        key: 1
      }
    ];

  let printCart = initalCart.map(function(product){
    return (
            <div className="productContainer" key={product.key}>
                <p>{product.category}</p>
                <h2>{product.title}</h2>
                <p>{product.subtitle}</p>
                <p>{product.size}</p>
                <p className="price">{product.price}</p>    
                <button>Remove from Cart</button>
            </div>
    );
  })

  return (
    <ul className="">
      {printCart}
    </ul>
  );
}

    
