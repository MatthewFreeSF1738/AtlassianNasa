import React, { useState } from "react";
const searchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return <input
   type="text"
   placeholder="Search rovers here"
   onChange={handleChange}
   value={searchInput} />

};

export default searchBar;