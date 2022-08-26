import React, {useState} from "react";

function AddItemForm({createItem}) {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState(0)
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  
  function submitHandler(event) {
      const requestConfig = {
        headers: {"Content-Type": "application/json"},
        method: "POST",
        body: JSON.stringify({})
      }
    fetch("https://fakestoreapi.com/products", requestConfig)
      .then(resp => resp.json())
      .then(newData => createItem(newData))
      
      

    event.preventDefault()
    const newItem = {
      title: title,
      price: price,
      category: category,
      description: description
    }
    createItem(newItem);
    setTitle("")
    setPrice("")
    setCategory("")
    setDescription("")

  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={submitHandler}>
        <div className="inline fields" >
          <input onChange={(e)=>setTitle(e.target.value)} value={title} type="title" name="title" />
          <input onChange={(e)=>setPrice(e.target.value)} value={price} type="number" name="amount" placeholder="price" />
          <input onChange={(e)=>setCategory(e.target.value)} value={category} type="text" name="category" placeholder="Category" />
          <input onChange={(e)=>setDescription(e.target.value)} value={description} type="text" name="description" placeholder="Description" />
        </div>
        <button className="ui button" type="submit">
          Add Item
        </button>
      </form>
    </div>
  );
}

export default AddItemForm;
