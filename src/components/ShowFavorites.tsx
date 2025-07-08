import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';

const ShowFavorites: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Tooltip title="Show Favorites">
      <IconButton
        onClick={() => navigate('/favorites')}
        color="inherit"
        sx={{ bgcolor: 'background.paper' }}
      >
        <FavoriteIcon />
      </IconButton>
    </Tooltip>
  );
};

export default ShowFavorites;
