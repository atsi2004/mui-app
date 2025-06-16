import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import type { Movie } from '../data/Movie';

interface Props {
  movie: Movie;
}

const MovieCard: React.FC<Props> = ({ movie }) => (
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
);

export default MovieCard;
