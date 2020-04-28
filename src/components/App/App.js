import React from "react";

import "./App.css";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

import icon from "../../images/ravenous_favicon.ico";

const business = {
  imageSrc:
    "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
  name: "Valentino Pizzeria",
  address: "1010 Paddington Way",
  city: "Flavortown",
  state: "NY",
  zipCode: "10101",
  category: "Zhytomyr",
  rating: 4.5,
  reviewCount: 90,
};

const businesses = [business, business, business, business, business, business];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList businesses={businesses} />
      </div>
    );
  }
}

export default App;
