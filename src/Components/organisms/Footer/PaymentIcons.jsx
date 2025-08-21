import { Box } from '@mui/material';
import styles from './PaymentIcons.module.scss';
import { CreditCard, Payment, AccountBalanceWallet } from '@mui/icons-material';

const PaymentIcons = () => (
  <Box className={styles.payment}>
    <CreditCard className={styles.icon} />
    <Payment className={styles.icon} />
    <AccountBalanceWallet className={styles.icon} />
  </Box>
);

export default PaymentIcons;
