import "./ShoppingListItem.css";

export default function ShoppingListItem({
  item,
  markAsPurchased,
  deleteItem,
}) {
  return (
    <div className="item-card">
      <h3 className="item-name">{item?.name}</h3>
      <div className="item-details">
        <span>{item?.quantity}</span>
        <span className="item-unit">{item?.unit}</span>
      </div>
      <div className="item-actions">
        {item.completed ? (
          <span className="purchased-label">Purchased</span>
        ) : (
          <button className="purchase-btn" onClick={() => markAsPurchased(item.id)}>Purchase</button>
        )}
        <button className="delete-btn" onClick={() => deleteItem(item.id)}>Remove</button>
      </div>
    </div>
  );
}



