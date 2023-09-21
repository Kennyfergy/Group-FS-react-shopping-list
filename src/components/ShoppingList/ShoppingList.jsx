import ShoppingListItem from "../ShoppingListItem/ShoppingListItem";

export default function ShoppingList({ items }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Shopping List</th>
          <th>
            <button type="reset">Reset</button>
            <button type="clear">Clear</button>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <ShoppingListItem key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
}
