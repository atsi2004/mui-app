import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import type { Movie } from '../data/Movie';
import { useFavorites } from '../context/FavoritesContext';

interface Props {
  movie: Movie;
}

const MovieCard: React.FC<Props> = ({ movie }) => {
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    
    <Card sx={{ position: 'relative' }}>
      <Link
        to={`/movie/${movie.imdbID}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
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
      </Link>

      <IconButton
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(movie.imdbID);
        }}
        color="error"
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          bgcolor: 'background.paper',
        }}
      >
        {isFavorite(movie.imdbID) ? <Favorite /> : <FavoriteBorder />}
      </IconButton>
    </Card>
  );
};

export default MovieCard;
