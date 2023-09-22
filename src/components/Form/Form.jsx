import React from "react";
import "./Form.css";
export default function Form({
  newItemName,
  setNewItemName,
  newItemQuantity,
  setNewItemQuantity,
  newItemUnit,
  setNewItemUnit,
  // handleSubmit,
  addItem,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    addItem({ newItemName, newItemQuantity, newItemUnit });

    //ternary check if inputs are empty
    !newItemName || !newItemQuantity || !newItemUnit
      ? alert("Please fill in item name, quantity, and units")
      : alert("Item added");
  };

  //function to clear input fields, being called on submit
  const clearInputFields = () => {
    setNewItemName({ name: "" });
    setNewItemQuantity({ quantity: "" });
    setNewItemUnit({ unit: "" });
  };
  // console.log(newItemName, newItemQuantity, newItemUnit);
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(event) => setNewItemName(event.target.value)}
        value={newItemName}
        placeholder="Item Name"
      />
      <input
        onChange={(event) => setNewItemQuantity(event.target.value)}
        value={newItemQuantity}
        placeholder="Quantity"
      />
      <input
        onChange={(event) => setNewItemUnit(event.target.value)}
        value={newItemUnit}
        placeholder="Unit"
        type="text"
      />
      <input type="submit" value="Submit" />
    </form>
  );
}
