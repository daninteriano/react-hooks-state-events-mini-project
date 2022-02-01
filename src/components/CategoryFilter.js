import React from "react";

function CategoryFilter({ CATEGORIES, setSelectedCateory, selectedCategory  }) {
  
  function handleClass(event){
    setSelectedCateory(event.target.innerText)
  } 
  return (
    <div className="categories">
      <h5>Category</h5>
      {CATEGORIES.map((category) => (
        <button key={category} onClick={handleClass} className={category === selectedCategory ? "selected" : ""}>{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;
