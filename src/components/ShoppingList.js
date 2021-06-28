import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")

  function handleCategoryChange(event) {
    console.log(event.target.value)
    setSelectedCategory(event.target.value);
  }

  const handleSearchChange = (searchTerm) => {
    console.log("After Update: ", searchTerm)
    setSearch(searchTerm)
    }

  const itemsToDisplay = items
  //category dropdown
  .filter((item) => selectedCategory === "All" || item.category === selectedCategory)

  //search bar
  .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
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
 * ! Step 6: 
 * * Map items passed as props and return a single item into  <Item /> which will be displayed onto the DOM
 * 
 * ! Step 10: 
 * * Define state here for the Filter bc this is where we have access to our items and shopping list. Two separate states to track, search bar and dropdown. 
 *  !Note:
 *  * Init state for search is empty string, becuase the search bar is currently empty until a user types into it. We want to track every letter typed so we pass search as props to <Filter/>
 *  ! > Handler func
 *  ? How can we update the state of the search bar and select dropdown? 
 *  ? GOAL: When the user types in this field, the list of items should be filtered so that only items whose name matches the text are included
 *  ? How: 
 *    * handleCategoryChange (dropdown) will take an event (e.target.value), that will be passed into the cb function as an arg back to the parent from the child which will be used as the values to update the state.
 *    * handleSearchChange will take an arbitrary param inside the parent which will be used to update the state to that particular "search term"
 * 
 *  * We need two handler func that will be passed as props to <Filter /> which will update the state when triggered by user interaction. 
 * 
 * ! Step 12:
 * * Adding the Filter is tricky because both the Search Bar and and Drop down require the items to be filtered. 
 *  ? What are we checking for the filter functionality? 
 *    * Dropdown:
 *    * filter itmes and return selectedCategory === ALL or item.category === selectedCategory
 *    * Search Bar:
 *    * ilter items & return the item name > toLowerCase() > includes search inputs all toLowerCase
 *    
 */