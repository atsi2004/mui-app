import React from 'react';
import { TextField, Button, Box, MenuItem } from '@mui/material';
import '../i18n';
import { useTranslation } from 'react-i18next';

interface Props {
  query: string;
  setQuery: (val: string) => void;
  year: string;
  setYear: (val: string) => void;
  type: string;
  setType: (val: string) => void;
  onSearch: () => void;
}

const SearchBar: React.FC<Props> = ({
  query,
  setQuery,
  year,
  setYear,
  type,
  setType,
  onSearch,
}) => {
  const { t } = useTranslation();

  return (
    <Box display="flex" gap={2} flexWrap="wrap" justifyContent="center" mb={4}>
      <TextField
        label={t('searchLabel')}
        variant="filled"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <TextField
        label={t('year')}
        type="number"
        variant="filled"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <TextField
        label={t('type')}
        select 
        variant="filled"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <MenuItem value="">{t('all')}</MenuItem>
        <MenuItem value="movie">{t('movie')}</MenuItem>
        <MenuItem value="series">{t('series')}</MenuItem>
        <MenuItem value="episode">{t('episode')}</MenuItem>
      </TextField>
      <Button variant="contained" onClick={onSearch}>
        {t('movieSearch')}
      </Button>
    </Box>
  );
};

export default SearchBar;
