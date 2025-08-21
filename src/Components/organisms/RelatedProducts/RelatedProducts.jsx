import { Typography, Grid, Box } from '@mui/material';
import ProductCard from '../../molecules/ProductCard/ProductCard';
import styles from './RelatedProducts.module.scss';
import { products } from '../../../Data/Product';

const RelatedProducts = ({ ids = [2, 4, 6] }) => {
  const suggested = products.filter(p => ids.includes(p.id));

  if (suggested.length === 0) return null;

  return (
    <Box className={styles.section}>
      <Box className={styles.container}>
        <Typography variant="h6" className={styles.heading}>
          You Might Also Like
        </Typography>
        <Grid container spacing={3} justifyContent="space-around" sx={{mt:'50px'}}>
          {suggested.map(product => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <ProductCard {...product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default RelatedProducts;
