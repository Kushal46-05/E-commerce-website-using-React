import { Box, Typography } from '@mui/material';
import styles from './SectionWrapper.module.scss';
import Button from '../../atoms/Button/Button';

const SectionWrapper = ({ title, children, onViewMore }) => (
  <Box component="section" className={styles.section}>
    <Typography variant="h4" className={styles.title}>
      {title}
    </Typography>

    <Box className={styles.grid}>
      {children}
    </Box>

    <Button
      variant="outlined"
      onClick={onViewMore}
      sx={{
        marginTop: '2rem',
        textTransform: 'uppercase',
        fontWeight: 500,
        borderColor: '#000',
        color: '#000',
        '&:hover': {
          backgroundColor: '#000',
          color: '#fff',
        },
      }}
    >
      View More
    </Button>
  </Box>
);

export default SectionWrapper;
