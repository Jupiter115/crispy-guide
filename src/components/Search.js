import React, { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

export default function Search({
  handleSearch,
  searchData,
  getFetch,
  setShowHero,
}) {
  const [searchInput, setSearchInput] = useState("");
  const handleClickClear = function (e) {
    e.preventDefault();
    setShowHero(true);
    setSearchInput("");
    getFetch();
  };

  const handleClick = function (e) {
    e.preventDefault();
    setShowHero(false);
    const searchResult = searchData.filter((product) =>
      product.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    handleSearch(searchResult);
    setSearchInput("");
  };

  return (
    <div className="search_container">
      <form className="search_form">
        <button
          className="search_button search_button-glass"
          onClick={handleClick}
        >
          <SearchIcon className="search_icon" />
        </button>
        <input
          className="search_input"
          type="text"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          value={searchInput}
        />
        <button
          onClick={handleClickClear}
          className="search_button search_button-clear"
        >
          <ClearIcon className="search_clear" />
        </button>
      </form>
    </div>
  );
}
