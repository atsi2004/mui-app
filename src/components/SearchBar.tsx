import React from 'react';
import { TextField, Button, Box } from '@mui/material';
import '../i18n'; 
import { useTranslation } from 'react-i18next';


interface Props { 
  query: string;
  setQuery: (val: string) => void;
  onSearch: () => void;
}

const SearchBar: React.FC<Props> = ({ query, setQuery, onSearch }) => {
  const { t, i18n } = useTranslation();


  return (
    <Box display="flex" gap={2} flexWrap="wrap" justifyContent="center">
      <TextField
        id="filled-basic"
        label={t('searchLabel')}
        variant="filled"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant="contained" onClick={onSearch}>
        {t('movieSearch')}
      </Button>
    </Box>
    // Button to trigger search

  );
};

export default SearchBar;
