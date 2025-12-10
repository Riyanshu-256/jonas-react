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
  // Getting all pizzas from pizzaData array
  const pizzas = pizzaData;

  // You can also try with an empty array to test "no pizzas" condition
  // const pizzas = [];

  // Counting how many pizzas are available
  const numPizzas = pizzas.length;

  return (
    // Main container for the menu section
    <main className="menu">
      {/* Heading for the menu */}
      <h2>Our menu</h2>

      {/* If numPizzas > 0 then show paragraph + pizza list, else show nothing */}
      {numPizzas > 0 ? (
        <>
          {/* Description text */}
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          {/* List of pizzas */}
          <ul className="pizzas">
            {/* Loop through each pizza and render a Pizza component */}
            {pizzas.map((pizza) => (
              // Passing each pizza object as a prop + adding a unique key
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later</p>
      )}
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
  const openHour = 7;
  const closeHour = 22;

  // Check if shop is open
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {/* If restaurant is open → show Order component
        Else → show timing message */}
      {isOpen ? (
        // Passing closeHour as a prop to Order component
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        // Message shown when restaurant is closed
        <p>
          We’re happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

// Order component (child component)
function Order({ openHour, closeHour }) {
  return (
    <div className="order">
      {/* Showing closing time using props from parent */}
      <p>
        We're open from {openHour}:00. to {closeHour}:00. Come visit us or order
        online.
      </p>

      {/* Order button */}
      <button className="btn">Order</button>
    </div>
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

//==========================================================================================================================//
