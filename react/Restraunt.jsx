import React, { Component } from "react";
import "./Restraunt.css"; 

class RestaurantList extends Component {
  render() {
    const restaurants = [
      {
        id: 1,
        name: "The Italian Bistro",
        menu: [
          { id: 101, name: "Pizza Margherita", price: "$12.99" },
          { id: 102, name: "Spaghetti Carbonara", price: "$14.99" },
        ],
      },
      {
        id: 2,
        name: "Burger Haven",
        menu: [
          { id: 301, name: "Cheeseburger", price: "$10.99" },
          { id: 302, name: "Veggie Burger", price: "$9.99" },
        ],
      },
    ];

    return (
      <div className="restaurant-container">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="restaurant-card">
            <div className="restaurant-name">{restaurant.name}</div>
            <ul className="menu-list">
              {restaurant.menu.map((item) => (
                <li key={item.id} className="menu-item">
                  {item.name} = {item.price}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default RestaurantList;
