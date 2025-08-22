import { FormControl, Select, MenuItem } from '@mui/material';

const SortControl = ({ sort, setSort }) => (
  <FormControl fullWidth>
    <Select value={sort} onChange={e => setSort(e.target.value)}>
      <MenuItem value="priceAsc">Price: Low to High</MenuItem>
      <MenuItem value="priceDesc">Price: High to Low</MenuItem>
      <MenuItem value="ratingDesc">Rating: High to Low</MenuItem>
    </Select>
  </FormControl>
);

export default SortControl;
