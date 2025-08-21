import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import styles from './SizeSelector.module.scss';

const SizeSelector = ({ sizes = [], onSelect }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (size) => {
    setSelected(size);
    onSelect?.(size);
  };

  return (
    <Box className={styles.wrapper}>
      <Typography variant="subtitle2" className={styles.label}>
        Select Size
      </Typography>
      <Box className={styles.grid}>
        {sizes.map((size, index) => (
          <Box
            key={index}
            className={`${styles.option} ${selected === size ? styles.active : ''}`}
            onClick={() => handleSelect(size)}
          >
            {size}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SizeSelector;
