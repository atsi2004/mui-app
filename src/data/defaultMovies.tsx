import type { Movie } from './Movie';

const defaultMovies: Movie[] = [
  {
    Title: "Cars",
    Year: "2006",
    imdbID: "tt0317219",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTg5NzY0MzA2MV5BMl5BanBnXkFtZTYwNDc3NTc2._V1_SX300.jpg",
  },
  {
    Title: "Cars 2",
    Year: "2011",
    imdbID: "tt1216475",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTUzNTc3MTU3M15BMl5BanBnXkFtZTcwMzIxNTc3NA@@._V1_SX300.jpg",
  },
  {
    Title: "Cars 3",
    Year: "2017",
    imdbID: "tt3606752",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc0NzU2OTYyN15BMl5BanBnXkFtZTgwMTkwOTg2MTI@._V1_SX300.jpg",
  },
];

export default defaultMovies;
