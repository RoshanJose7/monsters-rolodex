import React from "react";
import "./search-box.styles.css";

function SearchBox({ setSearchField, placeHolder }) {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeHolder}
      onChange={(e) => {
        setSearchField(e.target.value);
      }}
    />
  );
}

export default SearchBox;
