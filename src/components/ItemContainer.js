import React from "react";
import ItemCard from "./ItemCard";

function ItemContainer({ items }) {
    return (
        <ul className="cards">{items.map(item => <ItemCard item={item} key={item.id} />)}</ul>
    );
}

export default ItemContainer;