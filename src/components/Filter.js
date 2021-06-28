import React from "react";
//search bar and filter dropdown

function Filter({ onCategoryChange, onSearchChange, search }) {

  function handleSearchChange(e){
    console.log("Triggered: ", e.target.value)
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


/**
 * !Deconstruct props
 *  ! > Step 11: 
 *    * Add onChange to Input for search bar and another on select dropdown
 *    ! NOTE: We do not necessarily need to invoke an anonymous func for a search bar or select dropdowm. 
 *    * Select Dropdown
 *    !  > We can pass the cb function prop direcly into the onChange for a select dropdown. 
 *   * Search Bar
 *    !  > We will always pass a cb function as a prop to our { comp } and create a search handler function that will invoke our cb function with an (e.target.value). In addition, be sure to add a value attribute to the search bar input set equal to {search} which is the name of our init state we are tracking.
 *    * > The search value is what we will use to track the letters typed into our input field. We can console.log(e.targe.value ) inside our handler function along with the cb function which will be invoked and sent back to the parent, to updated the state with that e.target.value or arbitrary param. 
 */