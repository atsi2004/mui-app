import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Pagination } from '@mui/material';
import SearchBar from '../components/SearchBar';
import MovieGrid from '../components/MovieGrid';
import defaultMovies from '../data/defaultMovies';
import { getMovies } from '../api/omdb';
import type { Movie } from '../data/Movie';
import '../i18n'; // Import i18n for translations
import { useTranslation } from 'react-i18next';



const SearchResults: React.FC = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const totalPages = Math.ceil(totalResults / 10);
  const { t, i18n } = useTranslation();


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
        <Typography variant="h2" gutterBottom>{t('movieSearch')}</Typography>
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

export default SearchResults;
