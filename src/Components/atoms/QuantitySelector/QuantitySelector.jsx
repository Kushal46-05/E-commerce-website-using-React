import { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import styles from './QuantitySelector.module.scss';

const QuantitySelector = ({ min = 1, max = 10, onChange }) => {
  const [quantity, setQuantity] = useState(min);

  const updateQuantity = (value) => {
    const clamped = Math.max(min, Math.min(max, value));
    setQuantity(clamped);
    onChange?.(clamped);
  };

  return (
    <Box className={styles.wrapper}>
      <Typography variant="subtitle2" className={styles.label}>
        Quantity
      </Typography>
      <Box className={styles.controls}>
        <IconButton
          className={styles.button}
          onClick={() => updateQuantity(quantity - 1)}
          disabled={quantity <= min}
        >
          <RemoveIcon />
        </IconButton>
        <Typography className={styles.value}>{quantity}</Typography>
        <IconButton
          className={styles.button}
          onClick={() => updateQuantity(quantity + 1)}
          disabled={quantity >= max}
        >
          <AddIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default QuantitySelector;
