import React, {useState, useEffect} from "react";
import ItemContainer from "./ItemContainer";

function App() {
  const [items,setItems] = useState([])
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then(response=>response.json())
    .then(data=>setItems(data))
  },[])
  return (
    <main>
      <ItemContainer items={items}/>
    </main>
  );
}
export default App;