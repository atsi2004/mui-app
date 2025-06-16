import { Grid, Skeleton, Card, CardContent } from '@mui/material';
import type { Movie } from '../data/Movie';
import MovieCard from './MovieCard';

interface Props {
  movies: Movie[];
  loading: boolean;
}

const MovieGrid: React.FC<Props> = ({ movies, loading }) => {
  const skeletons = Array.from(new Array(6));

  return (
    <Grid container spacing={4} justifyContent="center">
      {loading
        ? skeletons.map((_, idx) => (
            <Grid key={idx} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card>
                <Skeleton variant="rectangular" height={400} />
                <CardContent>
                  <Skeleton width="80%" />
                  <Skeleton width="40%" />
                </CardContent>
              </Card>
            </Grid>
          ))
        : movies.map((movie) => (
            <Grid key={movie.imdbID} size={{ xs: 12, sm: 6, md: 4 }}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
    </Grid>
  );
};

export default MovieGrid;
