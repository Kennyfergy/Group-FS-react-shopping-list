import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header/Header.jsx";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", quantity: 0, unit: "" });

  useEffect(() => {
    // Fetch items from the server here
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <p>Under Construction...</p>
      </main>
    </div>
  );
}

export default App;
