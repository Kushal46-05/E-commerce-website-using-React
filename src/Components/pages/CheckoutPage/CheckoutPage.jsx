import { useState } from 'react';
import { Box, Typography, Divider, TextField } from '@mui/material';
import { useCart } from '../../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/Button/Button';
import styles from './CheckoutPage.module.scss';

const CheckoutPage = () => {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();

  const subtotal = cart.reduce((acc, item) => {
    const price = parseFloat(item.price.replace('$', '').replace('$', ''));
    return acc + price * (item.quantity || 1);
  }, 0);

  const discount = subtotal * 0.2;
  const deliveryFee = cart.length > 0 ? 15 : 0;
  const total = subtotal - discount + deliveryFee;

  const [shipping, setShipping] = useState({
    name: '',
    address: '',
    city: '',
    postal: '',
    phone: '',
  });

  const [payment, setPayment] = useState({
    card: '',
    expiry: '',
    cvv: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // Shipping validation
    if (!shipping.name.trim()) newErrors.name = 'Full Name is required';
    if (!shipping.address.trim()) newErrors.address = 'Address is required';
    if (!shipping.city.trim()) newErrors.city = 'City is required';
    if (!shipping.postal.trim()) newErrors.postal = 'Postal Code is required';
    if (!shipping.phone.trim()) newErrors.phone = 'Phone Number is required';

    // Payment validation
    if (!payment.card.trim()) newErrors.card = 'Card Number is required';
    if (!payment.expiry.trim()) newErrors.expiry = 'Expiry Date is required';
    if (!payment.cvv.trim()) newErrors.cvv = 'CVV is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleConfirmOrder = () => {
    if (!validate()) return;

    alert('Order confirmed!');
    dispatch({ type: 'CLEAR_CART' });
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
          <TextField
            label="Full Name"
            fullWidth
            value={shipping.name}
            onChange={(e) => setShipping({ ...shipping, name: e.target.value })}
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            label="Address"
            fullWidth
            value={shipping.address}
            onChange={(e) => setShipping({ ...shipping, address: e.target.value })}
            error={!!errors.address}
            helperText={errors.address}
          />
          <TextField
            label="City"
            fullWidth
            value={shipping.city}
            onChange={(e) => setShipping({ ...shipping, city: e.target.value })}
            error={!!errors.city}
            helperText={errors.city}
          />
          <TextField
            label="Postal Code"
            fullWidth
            value={shipping.postal}
            onChange={(e) => setShipping({ ...shipping, postal: e.target.value })}
            error={!!errors.postal}
            helperText={errors.postal}
          />
          <TextField
            label="Phone Number"
            fullWidth
            value={shipping.phone}
            onChange={(e) => setShipping({ ...shipping, phone: e.target.value })}
            error={!!errors.phone}
            helperText={errors.phone}
          />
        </Box>
      </Box>

      <Box className={styles.section}>
        <Typography variant="h6">Payment Method</Typography>
        <Box className={styles.formGrid}>
          <TextField
            label="Card Number"
            fullWidth
            value={payment.card}
            onChange={(e) => setPayment({ ...payment, card: e.target.value })}
            error={!!errors.card}
            helperText={errors.card}
          />
          <TextField
            label="Expiry Date"
            fullWidth
            value={payment.expiry}
            onChange={(e) => setPayment({ ...payment, expiry: e.target.value })}
            error={!!errors.expiry}
            helperText={errors.expiry}
          />
          <TextField
            label="CVV"
            fullWidth
            value={payment.cvv}
            onChange={(e) => setPayment({ ...payment, cvv: e.target.value })}
            error={!!errors.cvv}
            helperText={errors.cvv}
          />
        </Box>
      </Box>

      <Box className={styles.section}>
        <Typography variant="h6">Order Summary</Typography>
        <Box className={styles.row}>
          <Typography>Subtotal</Typography>
          <Typography>${subtotal.toFixed(2)}</Typography>
        </Box>
        <Box className={styles.row}>
          <Typography>Discount (20%)</Typography>
          <Typography>–${discount.toFixed(2)}</Typography>
        </Box>
        <Box className={styles.row}>
          <Typography>Delivery Fee</Typography>
          <Typography>${deliveryFee.toFixed(2)}</Typography>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box className={styles.row}>
          <Typography fontWeight={600}>Total</Typography>
          <Typography fontWeight={600}>${total.toFixed(2)}</Typography>
        </Box>
      </Box>

      <Button onClick={handleConfirmOrder} fullWidth>
        Confirm Order
      </Button>
    </Box>
  );
};

export default CheckoutPage;
