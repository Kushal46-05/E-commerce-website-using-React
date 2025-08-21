import { Box } from '@mui/material';
import styles from './SocialIcons.module.scss';
import { Facebook, Twitter, Instagram, Pinterest } from '@mui/icons-material';

const SocialIcons = () => (
  <Box className={styles.social}>
    <Twitter className={styles.icon} fontSize="small" />
    <Facebook className={styles.icon} fontSize="small" />
    <Instagram className={styles.icon} fontSize="small" />
    <Pinterest className={styles.icon} fontSize="small" />
  </Box>
);

export default SocialIcons;
