import React, {useState, useEffect} from "react";
import ItemContainer from "./ItemContainer";
import NewItemForm from "./NewItemForm"
import Search from "./Search";
import Header from "./Header";

function App() {

  const [items, setItems] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const createItem = (newItem) => {
    setItems([...items, newItem])
  }

  
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then(response=>response.json())
    .then(data=>setItems(data))
  },[])

  let filteredItems = items.filter(item => {
    return item.title.toLowerCase().includes(searchTerm)
  })

  return (
    <main>
      <Header />
      <NewItemForm createItem={createItem}/>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <ItemContainer items={filteredItems}/>
    </main>
  );
}
export default App;