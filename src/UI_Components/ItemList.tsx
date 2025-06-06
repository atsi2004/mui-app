import React from 'react';
import Grid from '@mui/material/Grid';
import { Card, CardContent, Typography } from '@mui/material';

interface Item {
  id: number;
  name: string;
  color: string;
  year: string;
}

interface Props {
  items: Item[];
}

const ItemList: React.FC<Props> = ({ items }) => { // Will receive array of items as props
  return (
    <Grid container spacing={2} columns={12} justifyContent="center"> 
      {items.map((item) => ( // Mapping items of the array to make grid of cards
        <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}> 
          <Card sx = {{ border: `2px solid ${item.color}` }}>
            <CardContent>
              <Typography variant="h6">{item.name}</Typography> 
              <Typography variant="body2">Founded: {item.year}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemList;
