import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Pagination } from '@mui/material';
import SearchBar from '../components/SearchBar';
import MovieGrid from '../components/MovieGrid';
import { getMovies } from '../api/omdb';
import type { Movie } from '../data/Movie';

interface Props {
  setAllMovies: (movies: Movie[]) => void;
}

const SearchPage: React.FC<Props> = ({ setAllMovies }) => {
  const [query, setQuery] = useState('');
  const [year, setYear] = useState('');
  const [type, setType] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const totalPages = Math.ceil(totalResults / 10);

  const loadMovies = async (q: string, p = 1) => {
    setLoading(true);
    try {
      const { movies: fetched, totalResults } = await getMovies(q, p, year, type);
      setMovies(fetched);
      setTotalResults(totalResults);
      setAllMovies(fetched);
    } catch {
      setMovies([]);
      setTotalResults(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) loadMovies(query, page);
  }, [page]);

  const handleSearch = () => {
    setPage(1);
    loadMovies(query, 1);
  };

  return (
    <Container sx={{ py: 5 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h2">Movie Search</Typography>
      </Box>
      <SearchBar
        query={query}
        setQuery={setQuery}
        year={year}
        setYear={setYear}
        type={type}
        setType={setType}
        onSearch={handleSearch}
      />
      <MovieGrid movies={movies} loading={loading} />
      {movies.length > 0 && totalPages > 1 && (
        <Box display="flex" justifyContent="center" mt={5}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={(_, v) => setPage(v)}
            color="primary"
          />
        </Box>
      )}
    </Container>
  );
};

export default SearchPage;
