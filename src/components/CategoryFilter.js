import React, { useState } from "react";

function CategoryFilter({ arrayOfCategories }) {
  const [selectedCategory, setSelectedCateory] = useState("All")
  function handleClass(event){
    event.target.className = "selected"
    setSelectedCateory(event.target.innerText)
  } 
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {arrayOfCategories.map((item) => (
        <button key={item} onClick={handleClass}>{item}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;
