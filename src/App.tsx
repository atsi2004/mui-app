import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, Skeleton, Pagination } from '@mui/material';
import SearchBar from './components/SearchBar';
import type { Movie } from './data/Movie';
import { getMovies } from './api/omdb';
import MovieGrid from './components/MovieGrid';
import defaultMovies from './data/defaultMovies';






const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const totalPages = Math.ceil(totalResults / 10);  
  

  const loadMovies = async (query: string, pages: number = 1) => {
    setLoading(true);
    try {
      const { movies: fetchedMovies, totalResults } = await getMovies(query, pages);
      setMovies(fetchedMovies);
      setTotalResults(totalResults);
    } catch (error) {
      console.error("❌ Error loading movies:", error);
      alert("❌ Could not load movies, try again later.");
      setMovies([]);
      setTotalResults(0);
    } finally {
      setLoading(false);
    }
  };


  const handleSearch = async () => {
    setPage(1);
    await loadMovies(query, 1);
  };


  

  useEffect(() => {
    if (query) loadMovies(query, page);
  }, [page]);

const filtered = defaultMovies.filter((movie) =>
    movie.Title.toLowerCase().includes(query.toLowerCase())
  );
  const displayMovies = movies.length > 0 ? movies : filtered;

  return (
    <Container sx={{ py: 5 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h2" gutterBottom>
          Movie Search
        </Typography>
      </Box>

      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />

      <MovieGrid movies={displayMovies} loading={loading} />

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

/*
src/
├── components/            # Reusable UI components
│   ├── MovieCard.tsx
│   ├── MovieGrid.tsx
│   └── SearchBar.tsx
│
├── pages/                 # Page-level components
│   └── App.tsx            # Main page or route
│
├── api/                   # API handlers & network utilities
│   └── omdb.ts            # Your `getMovies()` function
│
├── types/                 # TypeScript types/interfaces
│   └── Movie.ts           # Movie type
│
├── hooks/                 # Custom hooks (if needed later)
│   └── useMovies.ts       # e.g., manage movie fetch logic
│
├── assets/                # Static assets (images, icons, etc.)
│
└── index.tsx              # Entry point
*/