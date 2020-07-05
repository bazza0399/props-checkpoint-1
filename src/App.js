import React from 'react';
import './App.css';
import './style.css'
import Products from './products';
function App(props) {
  const products = [
    {category:"electronics",name:"laptop",price:"1500"},
    {category:"clothes",name:"shirt",price:"50"},
    {category:"electronics",name:"console",price:"1800"},
]
  return(
    <Products prod={products}/>
  )
}

export default App;
