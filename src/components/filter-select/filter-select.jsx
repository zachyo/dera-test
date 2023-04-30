import { useContext } from "react";
import SearchContext from "../../contexts/searchContext";
// import genreList from "../../utilities/genres";

import './filter-select.scss'

const FilterSelect = () => {
  const { handleGenre, handleRelease } = useContext(SearchContext);

  // const genres = Object.keys(genreList).map((genre, i) => {
  //   return (
  //     <option value={genreList[genre]} key={i}>
  //       {genreList[genre]}
  //     </option>
  //   );
  // });

  return (
    <div className="filter-select">
      <select onChange={handleGenre}>
        <option value="All">Filter by Genre</option>
      </select>
      <select onChange={handleRelease}>
        <option value="All">Filter by Release date</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
};

export default FilterSelect;
