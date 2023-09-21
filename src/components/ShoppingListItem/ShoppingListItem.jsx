export default function ShoppingListItem({ item }) {
    return(
        <tr>
            <td>{item.name}</td>
            <td>{item.qunatity} {item.unit}</td>
            <td><button type="buy">Buy</button><button type="delete">Remove</button></td>
        </tr>
    )
}