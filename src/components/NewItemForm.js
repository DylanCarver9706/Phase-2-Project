import React, {useState} from "react";

function NewItemForm({createItem}) {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  
  function submitHandler(event) {
      event.preventDefault()

      let newItem = {
        title: title,
        price: price,
        category: category,
        description: description
      }
      fetch("https://fakestoreapi.com/products", {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify(newItem)
    })
      .then(resp => resp.json())
      .then(createItem(newItem))

  
    
    createItem(newItem);
    setTitle("")
    setPrice("")
    setCategory("")
    setDescription("")
    setImage("")

  }

  return (
    <div className="new-item-form">
      <h2>New Item</h2>
      <form onSubmit={submitHandler}>
        <div className="inline fields" >
          <input onChange={(e)=>setTitle(e.target.value)} value={title} type="title" name="title" placeholder="Title"/>
          <input onChange={(e)=>setPrice(e.target.value)} value={price} type="number" name="amount" placeholder="price" />
          <input onChange={(e)=>setCategory(e.target.value)} value={category} type="text" name="category" placeholder="Category" />
          <input onChange={(e)=>setDescription(e.target.value)} value={description} type="text" name="description" placeholder="Description" />
          <input type="text" name="image" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
        </div>
        <button className="ui button" type="submit">
          Add Item
        </button>
      </form>
    </div>
  );
}

export default NewItemForm;


