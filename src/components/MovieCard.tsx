// src/components/MovieCard.tsx
import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Box,
} from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useFavorites } from '../hooks/useFavorites';
import type { Movie } from '../data/Movie';

interface Props {
  movie: Movie;
}

const MovieCard: React.FC<Props> = ({ movie }) => {
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <IconButton
        onClick={(e) => {
          e.preventDefault(); // prevent card click from navigating
          toggleFavorite(movie.imdbID);
        }}
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          zIndex: 10,
          bgcolor: 'background.paper',
          borderRadius: '50%',
          color: isFavorite(movie.imdbID) ? 'red' : 'grey.500',
        }}
      >
        {isFavorite(movie.imdbID) ? <Favorite /> : <FavoriteBorder />}
      </IconButton>

      <Link
        to={`/movie/${movie.imdbID}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
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
      </Link>
    </Box>
  );
};

export default MovieCard;
