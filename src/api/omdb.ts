import type { Movie } from '../data/Movie';

const API_KEY = '857f82a9';

export const getMovies = async (query: string, page: number = 1): Promise<{
  movies: Movie[];
  totalResults: number;
}> => {
  const url = `https://www.omdbapi.com/?s=${query}&page=${page}&type=movie&apikey=${API_KEY}`;
  const response = await fetch(url);
  const movieJSON = await response.json();

  if (movieJSON.Response === "True") {
    return {
      movies: movieJSON.Search,
      totalResults: Number(movieJSON.totalResults),
    };
  } else {
    throw new Error("No movies found");
  }
};

export const getMovieById = async (id: string) => {
  const API_KEY = '857f82a9';
  const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`);
  const data = await response.json();
  return data;
};

