import Item from "../Item/Item"

function ItemList ({items}) {
    return (
        <div>
        <h2>Productos</h2>
            <div className="items">
                {items.map(item => (
                    <Item item={item} key={item.id}/>
                ))}
            </div>
        </div>
    )
}

export default ItemList