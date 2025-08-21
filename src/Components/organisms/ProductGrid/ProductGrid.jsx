import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import ProductCard from '../../molecules/ProductCard/ProductCard';
import styles from './ProductGrid.module.scss';
import Button from '../../atoms/Button/Button';

const ProductGrid = ({ title, products }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleProducts = showAll ? products : products.slice(0, 5);

  const handleToggle = () => setShowAll(prev => !prev);

  return (
    <Box component="section" className={styles.gridSection}>
      <Typography variant="h4" className={styles.heading} sx={{ marginBottom: '2rem' }}>
        {title}
      </Typography>

      <Box className={styles.grid}>
        {visibleProducts.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </Box>

      {products.length > 5 && (
        <Box className={styles.viewMoreWrapper}>
          <Button
            onClick={handleToggle}
            sx={{
              backgroundColor: '#000',
              color: '#fff',
              padding: '0.75rem 2rem',
              borderRadius: '4px',
              fontWeight: 600,
              textTransform: 'none',
              transition: 'background-color 0.3s ease',
              marginTop: '10px',
              '&:hover': {
                backgroundColor: '#fffafaff',
              },
            }}
          >
            {showAll ? 'View Less' : 'View More'}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ProductGrid;
