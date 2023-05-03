import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  //"All" default data setting  
  function categoryChange(e) {
    setSelectedCategory(prevCategory => e.target.value)
  }
  // prevCategory can be any input stil using useState value regardless
  //.filter works on arrays and passes a function and all elements that are true for filter are returned
  function getFilteredItems() {
    if(selectedCategory === "All") {
      return items
    } else {
      return items.filter((item) => item.category === selectedCategory)
    }
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onClick={categoryChange}>
          <option value="All">Filter by category</option>
          {/* grabbed the value defined, if wasnt defined by calue it would have broken app */}
          {/* "All"default value in dropdown  */}
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {/* runs if ststaement from function, you invoke it here so it runs all data from array and returns data from if and else statement as opposed to having a variable set  */}
        {getFilteredItems().map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}
export default ShoppingList;
