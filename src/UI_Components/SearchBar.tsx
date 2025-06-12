import React from 'react';
import { TextField, Button, Box } from '@mui/material';

interface Props { // Props for SearchBar component
  query: string;
  setQuery: (val: string) => void;
  onSearch: () => void;
}

const SearchBar: React.FC<Props> = ({ query, setQuery, onSearch }) => {
  return (
    <Box display="flex" gap={2} flexWrap="wrap" justifyContent="center">
      <TextField
        id="filled-basic"
        label="Movie Title"
        variant="filled"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant="contained" onClick={onSearch}>
        Search
      </Button> 
    </Box>
    // Button to trigger search

  );
};

export default SearchBar;
