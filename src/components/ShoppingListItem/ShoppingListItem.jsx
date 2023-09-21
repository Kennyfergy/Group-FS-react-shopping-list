export default function ShoppingListItem({ item, markAsPurchased, deleteItem }) {
  return (
    <tr>
      <td>{item?.name}</td>
      <td>
        {item?.quantity} {item?.unit}
      </td>
      <td>
        <button onClick={()=> markAsPurchased(item.id)}>Buy</button>
        <button onClick={() => deleteItem(item.id)}>Remove</button>
      </td>
    </tr>
  );
}
