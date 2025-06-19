import React from 'react';
import { Select, MenuItem, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FaLanguage } from 'react-icons/fa';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const handleChange = (event: any) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Select
      value={currentLang}
      onChange={handleChange}
      variant="outlined"
      size="small"
      displayEmpty
      renderValue={(selected) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <FaLanguage style={{ marginRight: 8 }} />
          {selected === 'en'
            ? 'English'
            : selected === 'hi'
            ? 'हिंदी'
            : selected === 'es'
            ? 'Español'
            : selected === 'pt'
            ? 'Português'
            : selected}
        </Box>
      )}
      sx={{
        bgcolor: 'background.paper',
        color: 'text.primary',
        borderRadius: 1,
        minWidth: 130,
        boxShadow: 1,
        px: 1,
        py: 0.5,
        '& .MuiSelect-icon': {
          color: 'text.primary',
        },
      }}
    >
      <MenuItem value="en">English</MenuItem>
      <MenuItem value="hi">हिंदी</MenuItem>
      <MenuItem value="es">Español</MenuItem>
      <MenuItem value="pt">Português</MenuItem>
    </Select>
  );
};

export default LanguageSelector;
