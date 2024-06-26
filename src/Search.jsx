import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "./context/SearchContext";
import "./responsive/headerr.scss"

const Search = () => {
  const { getData } = useContext(SearchContext);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search`);
    getData(e.target.search.value);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        className="h-[50px] px-[20px] border-[#e31e24] border-[1px] rounded-md w-[400px]"
        type="text"
        placeholder="chakanadan qidiring..."
        name="search"
        id="s3"
      />
    </form>
  );
};

export default Search;
