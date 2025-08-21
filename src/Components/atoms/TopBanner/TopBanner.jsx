import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, IconButton, Link } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styles from './TopBanner.module.scss';

const TopBannerComp = () => {
  const [visible, setVisible] = useState(true);
  const [closing, setClosing] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => setVisible(false), 300);
  };

  const handleSignupClick = (e) => {
    e.preventDefault();
    navigate('/signup');
  };

  if (!visible) return null;

  return (
    <Box
      className={`${styles.banner} ${closing ? styles.closing : ''}`}
      component="section"
    >
      <Typography variant="body2" component="span">
        Sign up and get 20% off your first order.{' '}
        <Link
          href="#"
          onClick={handleSignupClick}
          className={styles.link}
          underline="none"
          sx={{ color: '#fff', fontWeight: 'bold' }} // override MUI default
        >
          Sign Up Now
        </Link>
      </Typography>

      <IconButton
        size="small"
        onClick={handleClose}
        className={styles.closeBtn}
        aria-label="Close banner"
        sx={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: '1rem', color: '#fff' }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default TopBannerComp;
