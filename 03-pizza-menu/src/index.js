// Import React so we can write JSX and create components
import React from "react";

// Import ReactDOM to show our app on the webpage
import ReactDOM from "react-dom/client";

// Import our CSS file
import "./index.css";

// ======================
// 🍕 Pizza data (list of pizzas)
// ======================
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true, // this pizza is sold out
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

// ======================
// 🌟 Main App Component
// ======================
function App() {
  return (
    <div className="container">
      {/* Top heading */}
      <Header />

      {/* Pizza list */}
      <Menu />

      {/* Footer */}
      <Footer />
    </div>
  );
}

// ======================
// 🏷️ Header Component
// ======================
function Header() {
  return (
    <header className="header">
      {/* Website name */}
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

// ======================
// 📋 Menu Component
// ======================
function Menu() {
  return (
    <main className="menu">
      {/* Small heading */}
      <h2>Our Menu</h2>

      {/* Loop through all pizzas and show them one by one */}
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>
    </main>
  );
}

// ======================
// 🍕 Single Pizza Component
// ======================
function Pizza(props) {
  // Get pizza details from props
  const { pizzaObj } = props;

  return (
    // Add "sold-out" class if pizza is sold out
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      {/* Pizza image */}
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />

      <div>
        {/* Pizza name */}
        <h3>{pizzaObj.name}</h3>

        {/* Pizza ingredients */}
        <p>{pizzaObj.ingredients}</p>

        {/* Show price OR sold out message */}
        <span>{pizzaObj.soldOut ? "SOLD OUT" : `${pizzaObj.price}`}</span>
      </div>
    </li>
  );
}

// ======================
// ⏳ Footer Component
// ======================
function Footer() {
  // Get current time hour
  const hour = new Date().getHours();

  // Shop open and close timing
  const openHour = 8;
  const closeHour = 22;

  // Check if shop is open
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>We're open until {closeHour}:00. Come visit us or order online.</p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          We’re happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

// ======================
// 🚀 Render App on Screen
// ======================
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
