import { Box, Typography, Divider, TextField } from '@mui/material';
import { useCart } from '../../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/Button/Button';
import styles from './CheckoutPage.module.scss';

const CheckoutPage = () => {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();

  const subtotal = cart.reduce((acc, item) => {
    const price = parseFloat(item.price.replace('₹', '').replace('$', ''));
    return acc + price * (item.quantity || 1);
  }, 0);

  const discount = subtotal * 0.2;
  const deliveryFee = cart.length > 0 ? 15 : 0;
  const total = subtotal - discount + deliveryFee;

  const handleConfirmOrder = () => {
    alert('Order confirmed!');
    dispatch({ type: 'CLEAR_CART' }); // Clear cart after checkout
    navigate('/');
  };

  if (cart.length === 0) {
    return (
      <Box className={styles.empty}>
        <Typography variant="h6">Your cart is empty.</Typography>
        <Button onClick={() => navigate('/shop')} fullWidth>
          Continue Shopping
        </Button>
      </Box>
    );
  }

  return (
    <Box className={styles.page}>
      <Typography variant="h4" className={styles.heading}>Checkout</Typography>

      <Box className={styles.section}>
        <Typography variant="h6">Shipping Details</Typography>
        <Box className={styles.formGrid}>
          <TextField label="Full Name" fullWidth />
          <TextField label="Address" fullWidth />
          <TextField label="City" fullWidth />
          <TextField label="Postal Code" fullWidth />
          <TextField label="Phone Number" fullWidth />
        </Box>
      </Box>

      <Box className={styles.section}>
        <Typography variant="h6">Payment Method</Typography>
        <Box className={styles.formGrid}>
          <TextField label="Card Number" fullWidth />
          <TextField label="Expiry Date" fullWidth />
          <TextField label="CVV" fullWidth />
        </Box>
      </Box>

      <Box className={styles.section}>
        <Typography variant="h6">Order Summary</Typography>
        <Box className={styles.row}>
          <Typography>Subtotal</Typography>
          <Typography>₹{subtotal.toFixed(2)}</Typography>
        </Box>
        <Box className={styles.row}>
          <Typography>Discount (20%)</Typography>
          <Typography>–₹{discount.toFixed(2)}</Typography>
        </Box>
        <Box className={styles.row}>
          <Typography>Delivery Fee</Typography>
          <Typography>₹{deliveryFee.toFixed(2)}</Typography>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box className={styles.row}>
          <Typography fontWeight={600}>Total</Typography>
          <Typography fontWeight={600}>₹{total.toFixed(2)}</Typography>
        </Box>
      </Box>

      <Button onClick={handleConfirmOrder} fullWidth>
        Confirm Order
      </Button>
    </Box>
  );
};

export default CheckoutPage;
