import React from "react";
//search bar and filter dropdown

function Filter({ onCategoryChange, onSearchChange, search }) {

  function handleSearchChange(e){
    console.log(e.target.value)
    onSearchChange(e.target.value)
  }

  return (
    <div className="Filter">
      <input
        type="text" 
        name="search" 
        placeholder="Search..."
        value={search} // must add a search value to all search bars 
        onChange={handleSearchChange} />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
        <option value="Fruit">Fruit</option>
      </select>
    </div>
  );
}

export default Filter;
