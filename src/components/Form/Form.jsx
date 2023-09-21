import React from "react";

export default function Form() {
  const [item, setItem] = useState({ itemName: "" });
  const handleSubmit = (event) => {
    event.preventDefault();
    addItem(item);
    clearInputFields();
  };

  const clearInputFields = () => {
    setItem({ itemName: "" });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(event) => setItem({ item: event.target.value })}
        value={items.itemName}
        placeholder="Item Name"
      />
      <input type="submit" value="Submit" />
    </form>
  );
}
