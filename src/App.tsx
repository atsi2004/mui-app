import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import SearchBar from './UI_Components/SearchBar';
import ItemList from './UI_Components/ItemList';
import itemsData from './Data/items.json';

interface Item {
  id: number;
  name: string;
  color: string;
  year: string;
}

const rawData = itemsData as Item[];

const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState<Item[]>(rawData); 

  const handleSearch = () => { // Search functionality
    const lowerQuery = query.toLowerCase(); // Helps with case-insensitive search
    const result = rawData.filter((item) => // Filtering items 
      item.name.toLowerCase().includes(lowerQuery) 
    );
    setFiltered(result); // Updating state with filtered results
  };

  return (
    <Container sx={{ py: 5 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h2" gutterBottom>
          Welcome to MUI Search Page
        </Typography>
      </Box>

      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />

      <Box mt={4}>
        <ItemList items={filtered} />
      </Box>
    </Container>
  );
};

export default App;
