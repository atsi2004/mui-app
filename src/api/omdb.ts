import type { Movie } from '../data/Movie';

const API_KEY = '857f82a9'; // or your own API key

export const getMovies = async (
  query: string,
  page = 1,
  year = '',
  type = ''
): Promise<{ movies: Movie[]; totalResults: number }> => {
  let url = `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&page=${page}&apikey=${API_KEY}&plot=full`;

  if (year) url += `&y=${year}`;
  if (type) url += `&type=${type}`;

  const res = await fetch(url);
  const data = await res.json();

  return {
    movies: data.Search || [],
    totalResults: parseInt(data.totalResults) || 0,
  };
};
