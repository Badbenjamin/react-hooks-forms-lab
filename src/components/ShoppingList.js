import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")

  // const itemsFromSearch = items.filter(item => {
  //   return item.name === search;
  // })

  // console.log(items[0].name)

  function onItemFormSubmit(newItem){
    // make sure you are updating the type of data 
   setItems([...items,newItem])
  }

  function onSearchChange(event){
    setSearch(event.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    // if (selectedCategory === "All") return true;

    // return item.category === selectedCategory;
    if (search === "") {
      return true;
    } else {
      return item.name.includes(search)
    }
    
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
