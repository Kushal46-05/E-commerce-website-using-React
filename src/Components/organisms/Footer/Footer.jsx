import { Box, Typography } from '@mui/material';
import styles from './Footer.module.scss';
import Newsletter from './Newsletter';
import FooterColumn from './FooterColumn';
import SocialIcons from './SocialIcons';
import PaymentIcons from './PaymentIcons';

const Footer = () => {
  return (
    <Box component="footer" className={styles.footer}>
      <Newsletter />

      <Box className={styles.columns}>
        <Box className={styles.brand}>
          <Typography variant="h6" component="h2">
            SHOP.CO
          </Typography>
          <Typography variant="body2">
            We have clothes that suit your style and which you're proud to wear. From women to men.
          </Typography>
          <SocialIcons />
        </Box>

        <FooterColumn title="Company" links={['About', 'Features', 'Works', 'Career']} />
        <FooterColumn title="Help" links={['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy']} />
        <FooterColumn title="FAQ" links={['Account', 'Manage Deliveries', 'Orders', 'Payments']} />
        <FooterColumn title="Resources" links={['Free eBooks', 'Development Tutorial', 'How to - Blog', 'Youtube Playlist']} />
      </Box>

      <Box className={styles.bottom}>
        <Typography variant="caption">
          Shop.co © 2000–2023, All Rights Reserved.
        </Typography>
        <PaymentIcons />
      </Box>
    </Box>
  );
};

export default Footer;
