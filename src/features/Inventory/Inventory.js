// this file will act as the main product database
// I will export it for use in other components
// It would be useful to allow an admin user view this and change it, but I haven't covered that at this stage of learning

// create a function that returns a number, incrememnting it by one each time it is called
let productID = 0;
const incrementID = () => {
    productID ++;
    return productID;
}

const inventory = [
    {
        id: incrementID(),
        category: 'Margarita',
        title: 'Margarita',
        subtitle: 'Mozarella Cheese',
        size: '8',
        price: 3.5,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Margarita',
        title: 'Margarita',
        subtitle: 'Mozarella Cheese',
        size: '10',
        price: 5.1,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Margarita',
        title: 'Margarita',
        subtitle: 'Mozarella Cheese',
        size: '12',
        price: 6.8,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Margarita',
        title: 'Margarita',
        subtitle: 'Mozarella Cheese',
        size: '14',
        price: 9,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Funghi',
        title: 'Funghi',
        subtitle: 'Mushroom',
        size: '8',
        price: 4,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Funghi',
        title: 'Funghi',
        subtitle: 'Mushroom',
        size: '10',
        price: 5.7,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Funghi',
        title: 'Funghi',
        subtitle: 'Mushroom',
        size: '12',
        price: 7.5,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Funghi',
        title: 'Funghi',
        subtitle: 'Mushroom',
        size: '14',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Pepperoni',
        title: 'Pepperoni',
        subtitle: 'Pepperoni',
        size: '8',
        price: 4,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Pepperoni',
        title: 'Pepperoni',
        subtitle: 'Pepperoni',
        size: '10',
        price: 5.7,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Pepperoni',
        title: 'Pepperoni',
        subtitle: 'Pepperoni',
        size: '12',
        price: 7.5,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Pepperoni',
        title: 'Pepperoni',
        subtitle: 'Pepperoni',
        size: '14',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Polo',
        title: 'Polo',
        subtitle: 'Chicken',
        size: '8',
        price: 4,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Polo',
        title: 'Polo',
        subtitle: 'Chicken',
        size: '10',
        price: 5.7,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Polo',
        title: 'Polo',
        subtitle: 'Chicken',
        size: '12',
        price: 7.5,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Polo',
        title: 'Polo',
        subtitle: 'Chicken',
        size: '14',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Salami',
        title: 'Salami',
        subtitle: 'Salami',
        size: '8',
        price: 4,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Salami',
        title: 'Salami',
        subtitle: 'Salami',
        size: '10',
        price: 5.7,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Salami',
        title: 'Salami',
        subtitle: 'Salami',
        size: '12',
        price: 7.5,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Salami',
        title: 'Salami',
        subtitle: 'Salami',
        size: '14',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Ham',
        title: 'Ham',
        subtitle: 'Ham',
        size: '8',
        price: 4,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Ham',
        title: 'Ham',
        subtitle: 'Ham',
        size: '10',
        price: 5.7,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Ham',
        title: 'Ham',
        subtitle: 'Ham',
        size: '12',
        price: 7.5,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Ham',
        title: 'Ham',
        subtitle: 'Ham',
        size: '14',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Prawn',
        title: 'Prawn',
        subtitle: 'Prawn',
        size: '8',
        price: 4,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Prawn',
        title: 'Prawn',
        subtitle: 'Prawn',
        size: '10',
        price: 5.7,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Prawn',
        title: 'Prawn',
        subtitle: 'Prawn',
        size: '12',
        price: 7.5,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Prawn',
        title: 'Prawn',
        subtitle: 'Prawn',
        size: '14',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Milanese',
        title: 'Milanese',
        subtitle: 'Ham and Mushroom',
        size: '8',
        price: 4,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Milanese',
        title: 'Milanese',
        subtitle: 'Ham and Mushroom',
        size: '10',
        price: 5.7,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Milanese',
        title: 'Milanese',
        subtitle: 'Ham and Mushroom',
        size: '12',
        price: 7.5,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Milanese',
        title: 'Milanese',
        subtitle: 'Ham and Mushroom',
        size: '14',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Carribean',
        title: 'Carribean',
        subtitle: 'Ham and Pineapple',
        size: '8',
        price: 4,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Carribean',
        title: 'Carribean',
        subtitle: 'Ham and Pineapple',
        size: '10',
        price: 5.7,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Carribean',
        title: 'Carribean',
        subtitle: 'Ham and Pineapple',
        size: '12',
        price: 7.5,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Carribean',
        title: 'Carribean',
        subtitle: 'Ham and Pineapple',
        size: '14',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Pazza',
        title: 'Pazza',
        subtitle: 'Ham and Salami',
        size: '8',
        price: 4,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Pazza',
        title: 'Pazza',
        subtitle: 'Ham and Salami',
        size: '10',
        price: 5.7,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Pazza',
        title: 'Pazza',
        subtitle: 'Ham and Salami',
        size: '12',
        price: 7.5,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Pazza',
        title: 'Pazza',
        subtitle: 'Ham and Salami',
        size: '14',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Bolognese',
        title: 'Bolognese',
        subtitle: 'Bolognese and Onion',
        size: '8',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Bolognese',
        title: 'Bolognese',
        subtitle: 'Bolognese and Onion',
        size: '10',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Bolognese',
        title: 'Bolognese',
        subtitle: 'Bolognese and Onion',
        size: '12',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Bolognese',
        title: 'Bolognese',
        subtitle: 'Bolognese and Onion',
        size: '14',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Special Polo',
        title: 'Special Polo',
        subtitle: 'Mushroom, Chicken and Sweetcorn',
        size: '8',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Special Polo',
        title: 'Special Polo',
        subtitle: 'Mushroom, Chicken and Sweetcorn',
        size: '10',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Special Polo',
        title: 'Special Polo',
        subtitle: 'Mushroom, Chicken and Sweetcorn',
        size: '12',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Special Polo',
        title: 'Special Polo',
        subtitle: 'Mushroom, Chicken and Sweetcorn',
        size: '14',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Vegetarian',
        title: 'Vegetarian',
        subtitle: 'Mushroom, Onion, Green Peppers and Sweetcorn',
        size: '8',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Vegetarian',
        title: 'Vegetarian',
        subtitle: 'Mushroom, Onion, Green Peppers and Sweetcorn',
        size: '10',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Vegetarian',
        title: 'Vegetarian',
        subtitle: 'Mushroom, Onion, Green Peppers and Sweetcorn',
        size: '12',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Vegetarian',
        title: 'Vegetarian',
        subtitle: 'Mushroom, Onion, Green Peppers and Sweetcorn',
        size: '14',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Venisera',
        title: 'Venisera',
        subtitle: 'Mushroom, Ham and Salami',
        size: '8',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Venisera',
        title: 'Venisera',
        subtitle: 'Mushroom, Ham and Salami',
        size: '10',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Venisera',
        title: 'Venisera',
        subtitle: 'Mushroom, Ham and Salami',
        size: '12',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Venisera',
        title: 'Venisera',
        subtitle: 'Mushroom, Ham and Salami',
        size: '14',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Valentina',
        title: 'Valentina',
        subtitle: 'Mushroom, Ham and Pineapple',
        size: '8',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Valentina',
        title: 'Valentina',
        subtitle: 'Mushroom, Ham and Pineapple',
        size: '10',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Valentina',
        title: 'Valentina',
        subtitle: 'Mushroom, Ham and Pineapple',
        size: '12',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Valentina',
        title: 'Valentina',
        subtitle: 'Mushroom, Ham and Pineapple',
        size: '14',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Toscana',
        title: 'Toscana',
        subtitle: 'Mushroom, Pepperoni and Salami',
        size: '8',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Toscana',
        title: 'Toscana',
        subtitle: 'Mushroom, Pepperoni and Salami',
        size: '10',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Toscana',
        title: 'Toscana',
        subtitle: 'Mushroom, Pepperoni and Salami',
        size: '12',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Toscana',
        title: 'Toscana',
        subtitle: 'Mushroom, Pepperoni and Salami',
        size: '14',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Quindici',
        title: 'Quindici',
        subtitle: 'Spicy Beef, Pepperoni, Chilli, Onion and Green Peppers',
        size: '8',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Quindici',
        title: 'Quindici',
        subtitle: 'Spicy Beef, Pepperoni, Chilli, Onion and Green Peppers',
        size: '10',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Quindici',
        title: 'Quindici',
        subtitle: 'Spicy Beef, Pepperoni, Chilli, Onion and Green Peppers',
        size: '12',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Quindici',
        title: 'Quindici',
        subtitle: 'Spicy Beef, Pepperoni, Chilli, Onion and Green Peppers',
        size: '14',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Quattro',
        title: 'Quattro',
        subtitle: 'Mushroom, Ham, Salami and Green Peppers',
        size: '8',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Quattro',
        title: 'Quattro',
        subtitle: 'Mushroom, Ham, Salami and Green Peppers',
        size: '10',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Quattro',
        title: 'Quattro',
        subtitle: 'Mushroom, Ham, Salami and Green Peppers',
        size: '12',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Quattro',
        title: 'Quattro',
        subtitle: 'Mushroom, Ham, Salami and Green Peppers',
        size: '14',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Neptune',
        title: 'Neptune',
        subtitle: 'Tuna and Onion',
        size: '8',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Neptune',
        title: 'Neptune',
        subtitle: 'Tuna and Onion',
        size: '10',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Neptune',
        title: 'Neptune',
        subtitle: 'Tuna and Onion',
        size: '12',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Neptune',
        title: 'Neptune',
        subtitle: 'Tuna and Onion',
        size: '14',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Pescatore',
        title: 'Pescatore',
        subtitle: 'Tuna, Prawn and Anchovies',
        size: '8',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Pescatore',
        title: 'Pescatore',
        subtitle: 'Tuna, Prawn and Anchovies',
        size: '10',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Pescatore',
        title: 'Pescatore',
        subtitle: 'Tuna, Prawn and Anchovies',
        size: '12',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Pescatore',
        title: 'Pescatore',
        subtitle: 'Tuna, Prawn and Anchovies',
        size: '14',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Meat Feast',
        title: 'Meat Feast',
        subtitle: 'Spicy Beef, Ham, Salami and Green Peppers',
        size: '8',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Meat Feast',
        title: 'Meat Feast',
        subtitle: 'Spicy Beef, Ham, Salami and Green Peppers',
        size: '10',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Meat Feast',
        title: 'Meat Feast',
        subtitle: 'Spicy Beef, Ham, Salami and Green Peppers',
        size: '12',
        price: 10,
        image: 'pizzaDefault'
    },
    {
        id: incrementID(),
        category: 'Meat Feast',
        title: 'Meat Feast',
        subtitle: 'Spicy Beef, Ham, Salami and Green Peppers',
        size: '14',
        price: 10,
        image: 'pizzaDefault'
    },
]

export default inventory;