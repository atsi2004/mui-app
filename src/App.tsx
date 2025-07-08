// src/App.tsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, Box } from '@mui/material';

import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import MovieDetails from './pages/MovieDetails';
import FavoritesPage from './pages/FavoritesPage';
import defaultMovies from './data/defaultMovies';

import ThemeToggle from './components/ThemeToggle';
import LanguageSelector from './components/LanguageSelector';
import ShowFavorites from './components/ShowFavorites';
import { getTheme } from './theme';
import { FavoritesProvider } from './context/FavoritesContext';
import BackButton from './components/BackButton'; 
import type { Movie } from './data/Movie';

const App: React.FC = () => {
  const [mode, setMode] = useState<'light' | 'dark'>(
    (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
  );
  const [allMovies, setAllMovies] = useState<Movie[]>(defaultMovies);

  const theme = getTheme(mode);

  const toggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('theme', newMode);
  };

  return (
    <FavoritesProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ position: 'absolute', top: 16, left: 16, display: 'flex', gap: 1, zIndex: 1000 }}>
          <BackButton />
          <LanguageSelector />
          <ThemeToggle mode={mode} toggleTheme={toggleTheme} />
          <ShowFavorites />
          
        </Box>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage setAllMovies={setAllMovies} />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/favorites" element={<FavoritesPage allMovies={allMovies} />} />
        </Routes>
      </ThemeProvider>
    </FavoritesProvider>
  );
};

export default App;
