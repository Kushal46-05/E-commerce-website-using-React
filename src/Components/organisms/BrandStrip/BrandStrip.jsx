import { Box, Typography } from '@mui/material';
import styles from './BrandStrip.module.scss';

const brands = ['Versace', 'Zara', 'Gucci', 'Prada', 'Calvin Klein'];

const BrandStrip = () => (
  <Box id="brand-strip" className={styles.strip}> {/* ✅ Scroll target */}
    {brands.map((brand) => (
      <Typography
        key={brand}
        className={styles.brand}
        variant="body1"
        sx={{ fontFamily: '"Times New Roman", Times, serif' }}
      >
        {brand}
      </Typography>
    ))}
  </Box>
);

export default BrandStrip;
