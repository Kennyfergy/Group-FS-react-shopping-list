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

  //checking that inputs are not too long and alerting if it is too long
  const maxNameLength = 80;
  const isNameTooLong = newItemName.length > maxNameLength;
  if (isNameTooLong) {
    alert("Name input is too long");
  }
  const maxUnitLength = 20;
  const isUnitTooLong = newItemUnit.length > maxUnitLength;
  if (isUnitTooLong) {
    alert("Unit input is too long");
  }
  const maxQuantityLength = 80;
  const isQuantityTooLong = newItemQuantity.length > maxQuantityLength;
  if (isQuantityTooLong) {
    alert("Quantity input is too long");
  }

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
        required
      />
      <input
        onChange={(event) => setNewItemQuantity(event.target.value)}
        value={newItemQuantity}
        placeholder="Quantity"
        required
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
