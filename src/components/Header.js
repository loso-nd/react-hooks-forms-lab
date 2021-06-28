import React from "react";

function Header({ isDarkMode, onDarkModeClick }) {
  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}

export default Header;

/**
 * ! Step 3: Deconstruct props
 * * Add onclick event to button with a cb function that will be passed down from <App/> as a prop and triggered to update state 
 * 
 * *Step 4: Write a ternary statement to to change the text if isDarkMode emabled text is "dark" else text should be 'light
 * 
 * 
 */
