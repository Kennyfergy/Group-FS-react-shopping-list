import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header/Header.jsx";
import "./App.css";

function App() {
  const [itemList, setItemList] = useState([]);
  const [newItemName, setNewItemName] = useState('');
  const [newItemQuantity, setNewItemQuantity] = useState('');
  const [newItemUnit, setNewItemUnit] = useState('');
  // const [newItem, setNewItem] = useState({ name: "", quantity: 0, unit: "" });

  useEffect(() => {
    // Fetch items from the server here
    getItems();
  }, []);


  const getItems = () => {
    axios.get('/items')
      .then(response => {
        setItemList(response.data);
      })
      .catch(err => {
        alert('Error getting items');
        console.log(err);
      });
  };

  const addItem = () => {
    axios.post('/items', { name: newItemName, quantity: newItemQuantity, unit: newItemUnit })
      .then(response => {
        // Clear inputs
        setNewItemName('');
        setNewItemQuantity('');
        setNewItemUnit('');
        
        getItems();
      })
      .catch(err => {
        alert('Error Adding Item');
        console.log(err);
      });
  };

  const markAsPurchased = (id) => {
    axios.put(`/items/${id}`)
      .then(response => {
        getItems(); // Refresh the list after updating
      })
      .catch(err => {
        alert('Error Marking Item as Purchased');
        console.log(err);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newItemName && newItemQuantity) {
      addItem();
    } else {
      alert('The new item needs both a name and a quantity!');
    }
  };

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
