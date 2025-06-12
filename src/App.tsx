import React, { useState } from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, Skeleton, Pagination } from '@mui/material';
import SearchBar from './UI_Components/SearchBar';

interface Movie {
  loading?: boolean;
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}



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

const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]); // State to hold fetched movies
  const [loading, setLoading] = useState(false); // State to manage loading state
  const [page, setPage] = useState(1); // State to manage pagination, default is page 1
  const [totalResults, setTotalResults] = useState(0); // State to hold total results from API
  const totalPages = Math.ceil(totalResults / 10); // Total pages = Total results / 10 (maximum results per page)



  const getMovies = async () => {
    setLoading(true); // Set loading to true when fetching starts
    const url = `https://www.omdbapi.com/?s=${query}&page=${page}&type=movie&apikey=857f82a9`;  // API URL to get movies
    try {
      const response = await fetch(url); // Fetching data from the API
      const movieJSON = await response.json(); // Parsing the response to JSON
      if (movieJSON.Response === "True") {
        setMovies(movieJSON.Search); // Setting the movies state with the fetched data
        setTotalResults(Number(movieJSON.totalResults));
      }
      else {
        setMovies([]); // If no movies found, set to empty array
        console.error("❌ No movies found, please try again");
        alert("❌ No movies found, please try again");
      }
    } catch (error) {
      console.error("❌ Error fetching movies:", error); // Logging any errors that occur during fetch
      alert("❌ Error fetching movies, please try again later");
    } finally {
      setLoading(false); // Set loading to false when fetching is done
    }
  };
  

  React.useEffect(() => { // New trigger when page changes
  if (query) getMovies(); 
}, [page]);

  

    

  const filtered = defaultMovies.filter((movie) =>
    movie.Title.toLowerCase().includes(query.toLowerCase())
  );

  const displayMovies = movies.length > 0 ? movies : filtered; // Use fetched movies if available, otherwise use default movies
  const showSkeletons = loading || displayMovies.length === 0; // Show loading if loading = true or no movies displayed


  const handleSearch = async () => {
    setPage(1); // Default to page to 1 on new search
    await getMovies();
  };

  return (
    <Container sx={{ py: 5 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h2" gutterBottom>
          Movie Search
        </Typography>
      </Box>

      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />

      <Grid container spacing={4} justifyContent="center">
        {showSkeletons
          ? Array.from(new Array(6)).map((_, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card>
                  <Skeleton variant="rectangular" height={400} />
                  <CardContent>
                    <Skeleton width="80%" />
                    <Skeleton width="40%" />
                  </CardContent>
                </Card>
              </Grid>
            ))
          : displayMovies.map((movie) => (
              <Grid key={movie.imdbID} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card>
                  <CardMedia
                    component="img"
                    height="400"
                    image={movie.Poster}
                    alt={movie.Title}
                  />
                  <CardContent>
                    <Typography variant="h6">{movie.Title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {movie.Year}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
      </Grid>
      {movies.length > 0 && totalPages > 1 && (
        <Box display="flex" justifyContent="center" mt={5}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={(_, value) => setPage(value)}
            color="primary"
          />
        </Box>
      )}
    </Container>
  );
};

export default App;
          
