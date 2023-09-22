import { useState } from "react";

export default function EditForm({ editingItem, editItem }) {
  const [newItemName, setNewItemName] = useState(editingItem.name);
  const [newItemQuantity, setNewItemQuantity] = useState(editingItem.quantity);
  const [newItemUnit, setNewItemUnit] = useState(editingItem.unit);

  const handleSubmit = (event) => {
    editItem(editingItem.id, newItemName, newItemQuantity, newItemUnit);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => setNewItemName(event.target.value)}
          value={newItemName}
          placeholder="Item Name"
          type="text"
          required
        />
        <input
          onChange={(event) => setNewItemQuantity(event.target.value)}
          value={newItemQuantity}
          placeholder="Quantity"
          type="number"
          required
        />
        <input
          onChange={(event) => setNewItemUnit(event.target.value)}
          value={newItemUnit}
          placeholder="Unit"
          type="text"
          required
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
