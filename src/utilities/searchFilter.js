// import genreList from "./genres";

//search filter
export const searchFilter = (searchKey, data) => {
  let newData;
  if (searchKey) {
    newData = data.filter(
      (each) => each.volumeInfo?.title.toLowerCase().indexOf(searchKey.toLowerCase()) === 0
    );
  } else newData = data;
  return newData;
};

//filter by genre
// function getKeyByValue(object, value) {
//   return Object.keys(object).find((key) => object[key] === value);
// }
// export const genreFilter = (genreFilterKey, data) => {
//   const genreId = getKeyByValue(genreList, genreFilterKey);
//   let newData = [];
//   if (genreFilterKey === "All") return data;
//   for (const movie of data) {
//     if (movie?.genre_ids.includes(parseInt(genreId))) {
//       newData.push(movie);
//     }
//   }
//   return newData;
// };

//filter by release date
export const dateFilter = (releaseDate, data) => {
  if (releaseDate === "All") return data;
  const newData = data.filter(
      (each) => each?.release_date.slice(0, 4) === releaseDate
    );
  return newData;
};
