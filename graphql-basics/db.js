export let movies = [
  {
    id: 0,
    name: "The Dark Knight",
    year: 2008,
  },
  {
    id: 1,
    name: "Inception",
    year: 2010,
  },
  {
    id: 2,
    name: "Interstellar",
    year: 2014,
  },
  {
    id: 3,
    name: "Dunkirk",
    year: 2017,
  },
  {
    id: 4,
    name: "Tenet",
    year: 2020,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter((movie) => movie.id === id);
  return filteredMovies[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, year) => {
  const newMovie = {
    id: movies.length + 1,
    name,
    year,
  };
  movies.push(newMovie);
  return newMovie;
};
