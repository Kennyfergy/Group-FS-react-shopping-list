import React from "react";
import "./Form.css"
export default function Form({
  //const [itemList, setItemList] = useState([]);
  newItemName,
  setNewItemName,
  newItemQuantity,
  setNewItemQuantity,
  newItemUnit,
  setNewItemUnit,
  handleSubmit,
}) {
  //   //const [itemList, setItemList] = useState([]);
  //   const [newItemName, setNewItemName] = useState("");
  //   const [newItemQuantity, setNewItemQuantity] = useState("");
  //   const [newItemUnit, setNewItemUnit] = useState("");

  const clearInputFields = () => {
    setNewItemName({ name: "" });
    setNewItemQuantity({ quantity: "" });
    setNewItemUnit({ unit: "" });
  };
  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     if (newItemName && newItemQuantity) {
  //       addItem();
  //       clearInputFields;
  //     } else {
  //       alert("The new item needs both a name and a quantity!");
  //     }
  //   };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(event) => setNewItemName({ name: event.target.value })}
        value={newItemName}
        placeholder="Item Name"
      />
      <input
        onChange={(event) =>
          setNewItemQuantity({ quantity: event.target.value })
        }
        value={newItemQuantity}
        placeholder="Quantity"
      />
      <input
        onChange={(event) => setNewItemUnit({ unit: event.target.value })}
        value={newItemUnit}
        placeholder="Unit"
        type="text"
      />
      <input type="submit" value="Submit" />
    </form>
  );
}
