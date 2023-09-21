import ShoppingListItem from "../ShoppingListItem/ShoppingListItem"

export default function ShoppingList({items, resetItems, clearTable}) {
    return(
        <table>
            <thead>
                <tr>
                    <th>Shopping List</th>
                    <th><button onClick={()=> resetItems}>Reset</button>
                    <button onClick={()=> clearTable}>Clear</button></th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => (
                <ShoppingListItem key={item.id} item={item} />
))}
            </tbody>
        </table>
            
        
    )
}