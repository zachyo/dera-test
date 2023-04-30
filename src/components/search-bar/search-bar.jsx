import { useContext } from "react";
import SearchContext from "../../contexts/searchContext";

import searchIcon from "../../assets/searchIcon.svg";
import "./search-bar.scss";

const SearchBar = ({ children }) => {
  const { handleSearch } = useContext(SearchContext);

  return (
    <div className="search-bar">
      <img src={searchIcon} alt="" />
      <input type="text" placeholder={children} onChange={handleSearch} />
    </div>
  );
};

export default SearchBar;
