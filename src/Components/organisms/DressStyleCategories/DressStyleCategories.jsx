// src/organisms/DressStyleCategories/DressStyleCategories.jsx
import { Box, Typography, Button } from '@mui/material';
import styles from './DressStyleCategories.module.scss';
import { useNavigate } from 'react-router-dom';

const DressStyleCategories = () => {
  const navigate = useNavigate();
  const categories = ['street', 'techwear', 'utility', 'sport'];


  return (
    <Box component="section" className={styles.section}>
      <Typography variant="h5" component="h2" className={styles.heading}>
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
};

export default DressStyleCategories;
