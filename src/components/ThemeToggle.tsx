import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

interface Props {
  mode: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<Props> = ({ mode, toggleTheme }) => {
  return (
    <Tooltip title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}>
      <IconButton onClick={toggleTheme} color="inherit" sx={{ bgcolor: 'background.paper' }}>
        {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;
