import { Box, Typography, Button } from '@mui/material';
import styles from './DressStyleCategories.module.scss';
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
const categories = ['Casual', 'Formal', 'Party', 'Gym'];

const DressStyleCategories = () => (
  <Box component="section" className={styles.section}>
    <Typography variant="h5" component="h2">
      BROWSE BY DRESS STYLE
    </Typography>

    <Box className={styles.grid}>
      
      {categories.map((style) => (
        
        <Button
          key={style}
          variant="contained"
          className={styles.button}
          disableElevation
          onClick={() => navigate(`/category/${style.toLowerCase()}`)}
        >
          {style}
        </Button>
      ))}
    </Box>
  </Box>
);

export default DressStyleCategories;
