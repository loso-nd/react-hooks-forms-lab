import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [name, setName] = useState('')
  const [category, setCategory] = useState("Produce")

  function handleNameChange(e) {
    console.log(e.target.value)
    setName(e.target.value)
  }

  function handleCategoryChange(e) {
    console.log(e.target.value)
    setCategory(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log(e)
    onItmeFormSubmit({
      id: uuid(),
      name,
      category,
    });
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label> Name:
        <input type="text" name="name" value={name} 
          onChange={handleNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={category} 
          onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
          <option value="Fruit">Fruit</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;


  // const [formData, setFormDat] = useState({
  //   name: '',
  //   ...formData,
  //   [e.target.name] : e.target.value,
  // })

  // function handleSubmit(e){
  //   e.preventDefault()
  //   console.log(e)
  //   onItmeFormSubmit({
  //     id: uuid(),
  //     ...formData,
  //     name,
  //     category,
  //   });
  // }
