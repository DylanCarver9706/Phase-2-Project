import React, { useState } from "react";

function ItemCard({ item }) {

    const [addToCart, setAddToCart] = useState(true)

  const handleAddToCart = () => {
    setAddToCart(addToCart => !addToCart)
  }

    return (
        <li className="card">
            <img src={item.image} alt={"item name"} />
            <h4>{item.title}</h4>
            <p>Price: ${item.price}</p>
            <p>{item.category}</p>
            <p>* {item.description} *</p>
            {addToCart ? (
        <button className="primary" onClick={handleAddToCart}>Add To Cart</button>
      ) : (
        <button onClick={handleAddToCart}>Remove From Cart</button>
      )}
        </li>
    );
}

export default ItemCard;