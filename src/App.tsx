import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import MovieDetails from './pages/MovieDetails';
import './i18n';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './components/LanguageSelector';
import ThemeToggle from './components/ThemeToggle';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { getTheme } from './theme';


const App: React.FC = () => {
  const { i18n } = useTranslation();
  const [ready, setReady] = useState(false);

  const [mode, setMode] = useState<'light' | 'dark'>(
    (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
  );

  const theme = getTheme(mode);

  const toggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('theme', newMode);
  };

  useEffect(() => {
    i18n.changeLanguage(navigator.language).then(() => {
      setReady(true);
    });
  }, [i18n]);

  if (!ready) return null;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ position: 'relative', minHeight: '100vh' }}>
        {/* Top-left controls: Language Selector + Theme Toggle */}
        <Box sx={{ position: 'absolute', top: 16, left: 16, display: 'flex', gap: 2, zIndex: 1000 }}>
          <LanguageSelector />
          <ThemeToggle mode={mode} toggleTheme={toggleTheme} />
        </Box>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
};

export default App;
