import React, { useState } from "react";
import ShoppingListItem from "../ShoppingListItem/ShoppingListItem";
import "./ShoppingList.css";

export default function ShoppingList({
  items,
  deleteItem,
  markAsPurchased,
  clearTable,
  resetItems,
}) {
  const [confirmationBox, setConfirmationBox] = useState("");

  function displayResetConfirmation() {
    setConfirmationBox(
      <div className="confirmationBox">
        <h1>Do you want to reset the list?</h1>
        <button className="confirm-btn" onClick={() => { resetItems(); setConfirmationBox(""); }}>YES</button>
        <button className="cancel-btn" onClick={() => setConfirmationBox("")}>NO</button>
      </div>
    );
  }

  function displayDeleteConfirmation() {
    setConfirmationBox(
      <div className="confirmationBox">
        <h1>Do you want to delete the entire list?</h1>
        <button className="confirm-btn" onClick={() => { clearTable(); setConfirmationBox(""); }}>YES</button>
        <button className="cancel-btn" onClick={() => setConfirmationBox("")}>NO</button>
      </div>
    );
  }

  return (
    <div className="shopping-list-container">
      <div className="shopping-list-header">
        <h2>Shopping List</h2>
        <div className="actions-column">
          <button className="reset-btn" onClick={displayResetConfirmation}>Reset</button>
          <button className="clear-btn" onClick={displayDeleteConfirmation}>Clear</button>
        </div>
      </div>
      <div className="shopping-list">
        {items.map((item) => (
          <ShoppingListItem
            key={item.id}
            item={item}
            markAsPurchased={markAsPurchased}
            deleteItem={deleteItem}
          />
        ))}
      </div>
      {confirmationBox && (
        <div className="confirmationContainer">
            {confirmationBox}
        </div>
)}

    </div>
  );
}

