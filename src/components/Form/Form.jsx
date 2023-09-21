import React from "react";

export default function Form({
  newItemName,
  setNewItemName,
  newItemQuantity,
  setNewItemQuantity,
  newItemUnit,
  setNewItemUnit,
  addItem,
  //   handleSubmit,
}) {
  const clearInputFields = () => {
    setNewItemName({ name: "" });
    setNewItemQuantity({ quantity: "" });
    setNewItemUnit({ unit: "" });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newItemName && newItemQuantity) {
      addItem();
    } else {
      alert("The new item needs a name, quantity, and price!");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(event) => setNewItemName(event.target.value)}
        value={newItemName}
        placeholder="Item Name"
        type="text"
      />
      <input
        onChange={(event) => setNewItemQuantity(event.target.value)}
        value={newItemQuantity}
        placeholder="Quantity"
        type="number"
      />
      <input
        onChange={(event) => setNewItemUnit(event.target.value)}
        value={newItemUnit}
        placeholder="Price"
        type="number"
      />
      <input type="submit" value="Submit" />
    </form>
  );
}
