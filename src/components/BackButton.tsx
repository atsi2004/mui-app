import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Tooltip title="Go Back">
      <IconButton
        onClick={() => navigate(-1)} // Navigate to the previous page
        color="inherit"
        sx={{ bgcolor: 'background.paper' }}
      >
        <ArrowBack />
      </IconButton>
    </Tooltip>
  );
};

export default BackButton;
