import React from "react";

function ItemCard({ item }) {


    return (
        <li className="card">
            <img src={item.image} alt={"item name"} />
            <h4>{item.title}</h4>
            <p>Price: ${item.price}</p>
            <p>{item.category}</p>
            <p>* {item.description} *</p>
        </li>
    );
}

export default ItemCard;