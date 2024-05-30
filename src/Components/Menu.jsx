// src/components/Menu.js
import React from 'react';
import '../Styles/Menu.css';
import eggImage from './assets/egg.png';
import pizzaImage from './assets/pizza.png';
import cocktailImage from './assets/cocktail.png';
import cakeImage from './assets/cake.png';

const MenuItems = [
  {
    id: 1,
    image: eggImage,
    price: '$ 9.99',
    title: 'Fried Eggs',
    description: 'Made with eggs, lettuce, salt, oil and other ingredients.'
  },
  {
    id: 2,
    image: pizzaImage,
    price: '$ 15.99',
    title: 'Hawaiian Pizza',
    description: 'Made with eggs, lettuce, salt, oil and other ingredients.'
  },
  {
    id: 3,
    image: cocktailImage,
    price: '$ 7.25',
    title: 'Martinez Cocktail',
    description: 'Made with eggs, lettuce, salt, oil and other ingredients.'
  },
  {
    id: 4,
    image: cakeImage,
    price: '$ 20.99',
    title: 'Butterscotch Cake',
    description: 'Made with eggs, lettuce, salt, oil and other ingredients.'
  },
  // Add more items as per your need
];

const Menu = () => {
  return (
    <section className="menu">
      <h2>Our Menu</h2>
      <p>
        We consider all the drivers of change gives you the components you need to change to create a truly happens.
      </p>
      <div className="menu-buttons">
        <button className="active">All</button>
        <button>Breakfast</button>
        <button>Main Dishes</button>
        <button>Drinks</button>
        <button>Desserts</button>
      </div>
      <div className="menu-items">
        {MenuItems.map(item => (
          <div className="menu-item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h3>{item.price}</h3>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
