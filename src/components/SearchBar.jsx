import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/components/SearchBar.module.sass";

const SearchBar = () => {
  const navigate = useNavigate();
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${term}`);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Arama yapın..."
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;