import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header/Header.jsx";
import "./App.css";
import Form from "../Form/Form.jsx";
import Buttons from "../Buttons/Buttons.jsx";
import EditForm from "../Edit/EditForm.jsx";

import ShoppingList from "../ShoppingList/ShoppingList.jsx";

function App() {
  const [itemList, setItemList] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    // Fetch items from the server here
    getItems();
  }, []);

  function editModeTrue() {
    setEditMode(true);
  }

  // function to get the items from the database and display on DOM
  const getItems = () => {
    axios
      .get("/items")
      .then((response) => {
        setItemList(response.data);
      })
      .catch((err) => {
        alert("Error getting items");
        console.log(err);
      });
  }; //end getItems

  //function to add an item to the shopping list
  const addItem = (newItemName, newItemQuantity, newItemUnit) => {
    axios
      .post("/items", {
        name: newItemName,
        quantity: newItemQuantity,
        unit: newItemUnit,
      })
      .then((response) => {
        console.log("in axios post", response);
        // Clear inputs

        getItems();
      })
      .catch((err) => {
        alert("Error Adding Item");
        console.log(err);
      });
  }; //end addItem

  const editItem = (itemId, name, quantity, unit) => {
    axios
      .put(`/items/edit/${itemId}`, {
        name: name,
        quantity: quantity,
        unit: unit,
      })
      .then((response) => {
        getItems();
      })
      .catch((err) => {
        alert("Error Adding Item");
        console.log(err);
      });
  }; //end addItem

  //function to change purchase state to completed, or Purchased on the DOM
  const markAsPurchased = (id) => {
    axios
      .put(`/items/update/${id}`)
      .then((response) => {
        getItems(); // Refresh the list after updating
      })
      .catch((err) => {
        alert("Error Marking Item as Purchased");
        console.log(err);
      });
  }; //end markAsPurchased

  //function to delete individual item from list
  const deleteItem = (id) => {
    axios
      .delete(`/items/delete/${id}`)
      .then((response) => {
        // Refresh the student list
        getItems();
      })
      .catch((err) => {
        alert("Error deleting items");
        console.log(err);
      });
  }; // end deleteItem

  //function to delete all items in the shopping list, but not delete the database
  const clearTable = () => {
    axios
      .delete(`/items/clear`)
      .then((response) => {
        getItems();
      })
      .catch((err) => {
        console.log("Error in clearing table", err);
      });
  }; // clearTable

  //function to reset the purchased state to false
  const resetItems = () => {
    axios
      .put(`/items/reset`)
      .then((response) => {
        getItems(); // Refresh the list after updating
        console.log("resetItems");
      })
      .catch((err) => {
        alert("Error resetting items");

        alert("Error Marking Item as Purchased");
        console.log(err);
      });
  }; //end resetItems

  return (
    <div className="App">
      <Header />
      <Form addItem={addItem} />
      <main>
        <ShoppingList
          items={itemList}
          markAsPurchased={markAsPurchased}
          deleteItem={deleteItem}
          clearTable={clearTable}
          resetItems={resetItems}
          setEditingItem={setEditingItem}
        />
        {editingItem !== null && (
          <EditForm editingItem={editingItem} editItem={editItem} />
        )}
      </main>
    </div>
  );
}

export default App;
