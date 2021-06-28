import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  function handleAddToCartClick() {
    setIsInCart((isInCart) => !isInCart);
  }

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className={isInCart ? "remove" : "add"}
        onClick={handleAddToCartClick}
      >
        {isInCart ? "Remove From" : "Add to"} Cart
      </button>
    </li>
  );
}

export default Item;

/**
 * !Deconstruct props
 * * Step 8: Props that have be passed can be used to display details onto the DOM
 * 
 * *Step 9: We want to check if the ADD to Cart has be selected. Create a state which will tract the state of our click button 
 *  * > Add onClick to the button with a handdle function, when triggered will change the state
 *  *  > Add ternary to the button if isInCart is enabled text will be changed to 'Remove from Cart' 
 *  *  > className on button will have a tenary which will control the css style to remove or add 
 *  *  > className on li will have a ternary which will control the rule for if isInCart is enabbled or removed from cart. 
 * 
 */
