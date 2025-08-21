import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import styles from './ColorSwatch.module.scss';

const ColorSwatch = ({ colors = [], onSelect }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (color) => {
    setSelected(color);
    onSelect?.(color);
  };

  return (
    <Box className={styles.wrapper}>
      <Typography variant="subtitle2" className={styles.label}>
        Choose Color
      </Typography>
      <Box className={styles.grid}>
        {colors.map((color, index) => (
          <Box
            key={index}
            className={`${styles.swatch} ${selected === color ? styles.active : ''}`}
            style={{ backgroundColor: color }}
            onClick={() => handleSelect(color)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ColorSwatch;
