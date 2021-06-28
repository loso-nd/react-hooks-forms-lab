import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);


  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  //handler function is passed as props to <Filter />, when submit button is trigger is with execute the code inside
  function handleItemFormSubmit() {

  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;


// 

/**
 * !Import useState
 * *Step 1: Set State which tracks the items and if dark Mode is enabled.
 * 
 * *Step 2: Pass state isDarkMode as props to <Header/> and handleDarkModeClick - once button is triggered in <Header /> it will update the state here in <App/> via handle function
 * 
 * *Step 5: Pass items as props to <ShoppingList/>
 */