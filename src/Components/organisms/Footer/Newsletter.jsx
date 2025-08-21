import { Box, Typography } from '@mui/material';
import styles from './Newsletter.module.scss';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';

const Newsletter = () => (
  <Box className={styles.banner}>
    <Typography variant="h6" className={styles.text}>
      STAY UP TO DATE ABOUT OUR LATEST OFFERS.
    </Typography>

    <Box className={styles.form}>
      <Input
        type="email"
        placeholder="Enter your email address"
        sx={{
          backgroundColor: '#fff',
          borderRadius: '4px',
          fontSize: '0.9rem',
          color: '#000',
          '&::placeholder': {
            color: '#666',
          },
        }}
      />

      <Button
        sx={{
          backgroundColor: '#000',
          color: '#fff',
          border: '1px solid #fff',
          padding: '0.6rem 1rem',
          fontSize: '0.9rem',
          borderRadius: '4px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
          '&:hover': {
            backgroundColor: '#fff',
            color: '#000',
          },
        }}
      >
        Subscribe to Newsletter
      </Button>
    </Box>
  </Box>
);

export default Newsletter;
