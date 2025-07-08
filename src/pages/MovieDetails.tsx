import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Container, Chip, CircularProgress, Button, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid';
import LaunchIcon from '@mui/icons-material/Launch';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShowFavorites from '../components/ShowFavorites';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import type { Movie } from '../data/Movie';
import { useFavorites } from '../context/FavoritesContext';

interface MovieDetailsData { // Details that will be shown
    Title: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Plot: string;
    Director: string;
    Actors: string;
    Language: string;
    Ratings: { Source: string; Value: string }[]; // Ratings from different sources
    Country: string;
    Awards: string;
    Poster: string;
    BoxOffice: string;
    imdbRating: string;
    Metascore: string;
    imdbID: string;
}

const MovieDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = useState<MovieDetailsData | null>(null);
    const [loading, setLoading] = useState(true);
    const { isFavorite, toggleFavorite } = useFavorites();

    useEffect(() => {
        const fetchMovie = async () => {
            setLoading(true);
            const API_KEY = '857f82a9';
            const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`);
            const data = await res.json();
            setMovie(data);
            setLoading(false);
        };
        fetchMovie();
    }, [id]);

    if (loading) return <CircularProgress />;
    if (!movie) return <Typography>Movie not found.</Typography>;

    const getRating = (source: string) =>
        movie.Ratings.find(r => r.Source === source)?.Value || 'N/A';


    return (
        <Container maxWidth="md" sx={{ mt: 4, pt: 10 }}>
            <Typography variant="h3" gutterBottom>{movie.Title}</Typography>
            <Typography variant="subtitle1" gutterBottom>
                {movie.Runtime} • {movie.Released}
            </Typography>

            <Box mb={2}>
                {movie.Genre.split(', ').map(genre => (
                    <Chip label={genre} key={genre} sx={{ mr: 1 }} />
                ))}
            </Box>

            <Grid container spacing={4}>
                <Grid size={{ xs: 12, sm: 5 }}>
                    <img src={movie.Poster} alt={movie.Title} style={{ width: '100%', borderRadius: 8 }} />
                </Grid>

                <Grid size={{ xs: 12, sm: 7 }}>
                    <Typography variant="h6">Box Office Collection:</Typography>
                    <Typography gutterBottom>{movie.BoxOffice || 'N/A'}</Typography>

                    <Typography variant="h6" mt={2}>Director:</Typography>
                    <Typography gutterBottom>{movie.Director}</Typography>

                    <Typography variant="h6" mt={2}>Cast:</Typography>
                    <Typography gutterBottom>{movie.Actors}</Typography>

                    <Typography variant="h6" mt={2}>Awards:</Typography>
                    <Typography gutterBottom>{movie.Awards || 'N/A'}</Typography>

                    <Typography variant="h6" mt={2}>Languages:</Typography>
                    <Typography gutterBottom>{movie.Language}</Typography>
                </Grid>
            </Grid>

            <Typography variant="h5" mt={4}>Plot</Typography>
            <Typography>{movie.Plot}</Typography>
            <Box mt={4}>
                <Button
                    variant="contained"
                    color="secondary"
                    href={`https://www.imdb.com/title/${movie.imdbID}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<LaunchIcon />}>
                    Open on IMDb
                </Button>

                <IconButton
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(movie.imdbID);
                        }}
                        color="error"
                        sx={{
                          right: -10,
                          bgcolor: 'background.paper',
                        }}
                      >
                        {isFavorite(movie.imdbID) ? <Favorite /> : <FavoriteBorder />}
                      </IconButton>
                
            </Box>
            <Typography variant="h6" mt={3}>Ratings</Typography>
            <Typography>IMDb: {movie.imdbRating}/10</Typography>
            <Typography>Rotten Tomatoes: {getRating('Rotten Tomatoes')}</Typography>
            <Typography>Metacritic: {movie.Metascore}/100</Typography>
            <Typography variant="h6" mt={2}>Country:</Typography>
            <Typography gutterBottom>{movie.Country}</Typography>
            <Typography variant="h6" mt={2}>Rated:</Typography>
            <Typography gutterBottom>{movie.Rated}</Typography>



        </Container>
    );
};

export default MovieDetails;
