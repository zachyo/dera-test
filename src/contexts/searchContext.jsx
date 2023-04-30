import { useState } from "react";
import { createContext } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchKey, setSearchKey] = useState();
  const [genreFilterKey, setGenreFilterKey] = useState();
  const [releaseDate, setReleaseDate] = useState();

  //searching system
  const handleSearch = (event) => {
    setSearchKey(event.target.value);
  };
  const handleGenre = (event) => {
    setGenreFilterKey(event.target.value)
  }
  const handleRelease = (event) => {
    setReleaseDate(event.target.value);
  };
  return (
    <SearchContext.Provider value={{ searchKey, genreFilterKey,releaseDate, handleSearch, handleGenre, handleRelease }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
