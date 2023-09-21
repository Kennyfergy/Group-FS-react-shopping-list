import React from "react";

export default function Form() {
  //const [itemList, setItemList] = useState([]);
  const [newItemName, setNewItemName] = useState("");
  const [newItemQuantity, setNewItemQuantity] = useState("");
  const [newItemUnit, setNewItemUnit] = useState("");

  const clearInputFields = () => {
    setNewItemName({ name: "" });
    setNewItemQuantity({ quantity: "" });
    setNewItemUnit({ unit: "" });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newItemName && newItemQuantity) {
      addItem();
      clearInputFields;
    } else {
      alert("The new item needs both a name and a quantity!");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(event) =>
          setNewItemName({ newItemName: event.target.value })
        }
        value={setNewItemName.name}
        placeholder="Item Name"
      />
      <input
        onChange={(event) =>
          setNewItemQuantity({ newItemQuantity: event.target.value })
        }
        value={setNewItemQuantity.quantity}
        placeholder="Quantity"
      />
      <input
        onChange={(event) =>
          setNewItemUnit({ newItemUnit: event.target.value })
        }
        value={setNewItemUnit.unit}
        placeholder="Price"
      />
      <input type="submit" value="Submit" />
    </form>
  );
}
