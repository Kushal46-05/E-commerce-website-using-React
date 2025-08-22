import { useEffect, useState } from 'react';
import { products } from '../../../Data/Product';
import { getFilterOptions } from '../../../utils/getFilterOptions';
import { Box, Typography, FormGroup, FormControlLabel, Checkbox, Slider } from '@mui/material';
import styles from './SidebarFilters.module.scss';

const SidebarFilters = ({ filters, setFilters }) => {
  const [options, setOptions] = useState({
    categories: [],
    colors: [],
    sizes: [],
    styles: []
  });

  useEffect(() => {
    setOptions(getFilterOptions(products));
  }, []);

  const handleCheckboxChange = (key, value) => {
    setFilters(prev => {
      const current = prev[key];
      const updated = current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value];
      return { ...prev, [key]: updated };
    });
  };

  const handlePriceChange = (_, newValue) => {
    setFilters(prev => ({ ...prev, price: newValue }));
  };

  const renderCheckboxGroup = (label, key, values) => (
    <Box className={styles.filterGroup}>
      <Typography variant="subtitle1">{label}</Typography>
      <FormGroup>
        {values.map(val => (
          <FormControlLabel
            key={val}
            control={
              <Checkbox
                checked={filters[key].includes(val)}
                onChange={() => handleCheckboxChange(key, val)}
              />
            }
            label={val}
          />
        ))}
      </FormGroup>
    </Box>
  );

  return (
    <Box className={styles.sidebar}>
      <Typography variant="h6" className={styles.title}>Filters</Typography>

      <Box className={styles.filterGroup}>
        <Typography variant="subtitle1">Price Range</Typography>
        <Slider
          value={filters.price}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          min={0}
          max={200}
        />
      </Box>

      {renderCheckboxGroup("Category", "category", options.categories)}
      {renderCheckboxGroup("Color", "color", options.colors)}
      {renderCheckboxGroup("Size", "size", options.sizes)}
      {renderCheckboxGroup("Style", "dressStyle", options.styles)}
    </Box>
  );
};

export default SidebarFilters;
