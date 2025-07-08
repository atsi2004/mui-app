import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import MovieCard from '../components/MovieCard';
import { useFavorites } from '../context/FavoritesContext';
import type { Movie } from '../data/Movie';

interface Props {
  allMovies: Movie[];
}

const FavoritesPage: React.FC<Props> = ({ allMovies }) => {
  const { favorites } = useFavorites();
  const favoriteMovies = allMovies.filter((movie) =>
    favorites.includes(movie.imdbID)
  );

  return (
    <Box p={3} textAlign="center">
      <Typography variant="h4" gutterBottom>
        ❤️ Your Favorites
      </Typography>

      {favoriteMovies.length === 0 ? (
        <Typography>No favorites added yet.</Typography>
      ) : (
        <Grid container spacing={4} justifyContent="center">
          {favoriteMovies.map((movie) => (
            <Grid key={movie.imdbID} size={{ xs: 12, sm: 6, md: 4 }}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default FavoritesPage;
