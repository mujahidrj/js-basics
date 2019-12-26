// Performs different operations on the array of movies

const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 }
];

// All the movies in 2018 with rating > 4
// Sort by rating
// Descending Order
// Pick the title

const title = movies
  .filter(m => m.rating >= 4 && m.year === 2018)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map(m => m.title);

console.log(title);
