import React, { useState } from "react";

function Filter({ onCategoryChange, onSearchChange }) {

  const [searchText, setSearchText] = useState("");
  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    onSearchChange(event.target.value);
  };


  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={searchText}
        onChange={(event) => onSearchChange(event.target.value)}
      />
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
