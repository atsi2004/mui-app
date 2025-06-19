// src/pages/FavoritesPage.tsx
import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { useFavorites } from '../hooks/useFavorites';
import type { Movie } from '../data/Movie';
import MovieCard from '../components/MovieCard';

interface Props {
  allMovies: Movie[]; // Pass this in from App or parent
}

const FavoritesPage: React.FC<Props> = ({ allMovies }) => {
  const { favorites } = useFavorites();

  const favoriteMovies = allMovies.filter((movie) =>
    favorites.includes(movie.imdbID)
  );

  return (
    <Box p={2}>
      <Typography variant="h4" gutterBottom>
        ❤️ Your Favorites
      </Typography>

      {favoriteMovies.length === 0 ? (
        <Typography variant="body1">You haven't added any favorites yet.</Typography>
      ) : (
        <Grid container spacing={2}>
          {favoriteMovies.map((movie, idx) => (
            <Grid key={idx} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid> 
      )}
    </Box>
  );
};

export default FavoritesPage;
