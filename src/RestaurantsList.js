import React, { Component } from "react";

class RestaurantsList extends Component {
  render() {
    const restaurants = [
      {
        id: 1,
        name: "Food Plaza",
        menu: ["Pizza", "Burger", "Pasta"]
      },
      {
        id: 2,
        name: "Spicy Hub",
        menu: ["Biryani", "Curry", "Naan"]
      }
    ];

    return (
      <div>
        {restaurants.map((res) => (
          <div key={res.id}>
            <h3>{res.name}</h3>
            <ul>
              {res.menu.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default RestaurantsList;
