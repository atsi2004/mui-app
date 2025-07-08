import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface Props {
  movieId: string;
  onToggle: (id: string) => void;
}

const AddFavorite: React.FC<Props> = ({ movieId, onToggle: onFavorited }) => {

  return (
    <Tooltip title="Add to Favorites">
      <IconButton
        onClick={(e) => {
          e.stopPropagation();
          console.log(' AddFavorite clicked for movieId:', movieId);
          onFavorited(movieId);
        }}
        color="error"
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          bgcolor: 'background.paper',
        }}
      >
        <FavoriteIcon />
      </IconButton>
    </Tooltip>
  );
}

export default AddFavorite;
