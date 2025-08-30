import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../../Data/Product';
import SidebarFilters from '../../organisms/SidebarFilters/SidebarFilters';
import SortControl from '../../molecules/SortControl/SortControl';
import BreadcrumbTrail from '../../molecules/BreadcrumbTrail/BreadcrumbTrail';
import ProductCard from '../../molecules/ProductCard/ProductCard';
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogContent,
  useTheme,
  useMediaQuery
} from '@mui/material';
import styles from './CategoryDisplay.module.scss';

const CategoryDisplay = () => {
  const { type } = useParams();
  const [filters, setFilters] = useState({
    category: [],
    price: [50, 200],
    color: [],
    size: [],
    dressStyle: [],
  });
  const [sort, setSort] = useState('priceAsc');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);

  const theme = useTheme();
  const isLargeScreen = useMediaQuery('(min-width: 1024px)');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [type]);

  const applyFilters = () => {
    let result = products.filter(p =>
      p.style.toLowerCase() === type.toLowerCase() &&
      parseFloat(p.price.replace('$', '')) >= filters.price[0] &&
      parseFloat(p.price.replace('$', '')) <= filters.price[1] &&
      (filters.category.length === 0 || filters.category.includes(p.subCategory)) &&
      (filters.color.length === 0 || filters.color.includes(p.color)) &&
      (filters.size.length === 0 || filters.size.includes(p.size)) &&
      (filters.dressStyle.length === 0 || filters.dressStyle.includes(p.style))
    );

    if (sort === 'priceAsc') {
      result.sort((a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')));
    } else if (sort === 'priceDesc') {
      result.sort((a, b) => parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', '')));
    } else if (sort === 'ratingDesc') {
      result.sort((a, b) => b.rating - a.rating);
    }

    setFilteredProducts(result);
  };

  useEffect(() => {
    applyFilters();
  }, [type]);

  return (
    <Box className={styles.wrapper}>
      <BreadcrumbTrail />
      <Typography variant="h4" className={styles.heading}>
        {type.charAt(0).toUpperCase() + type.slice(1)} Collection
      </Typography>

      <Box className={styles.contentWrapper}>
        {isLargeScreen ? (
          <Box className={styles.sidebar}>
            <SidebarFilters filters={filters} setFilters={setFilters} />
            <Button
              variant="contained"
              className={styles.applyButton}
              onClick={() => {
                applyFilters();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Apply Filters
            </Button>
          </Box>
        ) : (
          <>
            <Button
              variant="outlined"
              className={styles.mobileFilterButton}
              onClick={() => setFilterOpen(true)}
            >
              Filter
            </Button>
            <Dialog open={filterOpen} onClose={() => setFilterOpen(false)} fullScreen>
              <DialogContent>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                  <Typography variant="h6">Filters</Typography>
                  <Button
                    variant="text"
                    onClick={() => setFilterOpen(false)}
                    sx={{ textTransform: 'none', fontWeight: 600 }}
                  >
                    Close
                  </Button>
                </Box>

                <SidebarFilters filters={filters} setFilters={setFilters} />

                <Box textAlign="right" mt={2}>
                  <Button
                    variant="contained"
                    onClick={() => {
                      applyFilters();
                      setFilterOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    Apply Filters
                  </Button>
                </Box>
              </DialogContent>
            </Dialog>
          </>
        )}

        <Box className={styles.mainContent}>
          <SortControl sort={sort} setSort={setSort} />
          {filteredProducts.length === 0 ? (
            <Typography variant="body1" color="error">
              No products found for style: {type}
            </Typography>
          ) : (
            <Box className={styles.flexWrapper}>
              {filteredProducts.map(product => (
                <Box key={product.id} className={styles.cardWrapper}>
                  <ProductCard {...product} />
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default CategoryDisplay;
