import React from "react";
import { useState } from "react";

function Filter({ onCategoryChange, onSearchChange }) {
  
  function handleChange(event){
    onSearchChange(event)
  }


  return (
    <div className="Filter">
      <input onChange={handleChange} type="text" name="search" placeholder="Search..." />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
