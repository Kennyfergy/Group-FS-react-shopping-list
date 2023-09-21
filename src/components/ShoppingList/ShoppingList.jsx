import ShoppingListItem from "../ShoppingListItem/ShoppingListItem";

export default function ShoppingList({
  items,
  //   resetItems,
  //   clearTable,
  deleteItem,
  markAsPurchased,
}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Shopping List</th>
          {/* <th> */}
          {/* <button onClick={() => resetItems}>Reset</button> */}
          {/* <button onClick={() => clearTable}>Delete list</button> */}
          {/* </th> */}
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <ShoppingListItem
            key={item.id}
            item={item}
            markAsPurchased={markAsPurchased}
            deleteItem={deleteItem}
          />
        ))}
      </tbody>
    </table>
  );
}
