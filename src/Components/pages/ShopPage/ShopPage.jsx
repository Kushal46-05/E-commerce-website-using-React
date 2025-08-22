import { Link as RouterLink } from 'react-router-dom';
import { products } from '../../../Data/Product';
import {
  Box,
  Grid,
  Typography,
  Breadcrumbs,
  Link
} from '@mui/material';

import ProductCard from '../../molecules/ProductCard/ProductCard';
import styles from './ShopPage.module.scss';

const ShopPage = () => {
  return (
    <Box className={styles.page}>
      {/* Breadcrumbs */}
      <Box className={styles.breadcrumbWrapper}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link component={RouterLink} to="/" underline="hover" color="inherit">
            Home
          </Link>
          <Typography color="text.primary">Shop</Typography>
        </Breadcrumbs>
      </Box>

      {/* Title */}
      <Typography variant="h4" className={styles.title}>
        All Products
      </Typography>

      {/* Product Grid */}
      <Grid container spacing={4} className={styles.grid}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard
              id={product.id}
              title={product.title}
              price={product.price}
              rating={product.rating}
              image={product.image}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ShopPage;
