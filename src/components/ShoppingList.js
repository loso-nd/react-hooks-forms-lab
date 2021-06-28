import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  //State for category dropdown
  //State for filter search is set here bc filter is a child component
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")

  function handleCategoryChange(event) {
    console.log(event.target.value)
    setSelectedCategory(event.target.value);
  }

  //Since both the filter and the search functionality require the items array we can define its execute in one function
  const itemsToDisplay = items
  //category dropdown
  .filter((item) => selectedCategory === "All" || item.category === selectedCategory)

  //search bar
  .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  const handleSearchChange = (searchTerm) => {
   //console.log(e.target.value)
   setSearch(searchTerm)

   }


  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter 
        search={search}
        onCategoryChange={handleCategoryChange} 
        onSearchChange={handleSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;


/**
 * !Deconstruct props
 * * Step 6: Map items passed as props and return a single item into  <Item /> which will be displayed onto the DOM
 * 
 * 
 */