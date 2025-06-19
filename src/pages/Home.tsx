import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../i18n'; 
import {useTranslation } from 'react-i18next';
import LanguageSelector from '../components/LanguageSelector';
import ThemeToggle from '../components/ThemeToggle'; 

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  return (
    <Box textAlign="center" mt={10}>
      <Typography variant="h2" gutterBottom>
        🎬 {t('welcome')}
      </Typography>
      <Typography variant="h6" gutterBottom>
        {t('searchMovies')}
      </Typography>
      <Button variant="contained" onClick={() => navigate('/search')}>
        {t('getStarted')}
      </Button>
    </Box>
  );
};

export default Home;
