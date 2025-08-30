import { Box, Typography, Divider, TextField, IconButton } from '@mui/material';
import { useCart } from '../../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import BreadcrumbTrail from '../../molecules/BreadcrumbTrail/BreadcrumbTrail';
import Button from '../../atoms/Button/Button';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import styles from './CartPage.module.scss';

const CartPage = () => {
    const { cart, dispatch } = useCart();
    const navigate = useNavigate();

    const subtotal = cart.reduce((acc, item) => {
        const price = parseFloat(item.price.replace('$', ''));
        return acc + price * (item.quantity || 1);
    }, 0);

    const discount = subtotal * 0.2;
    const deliveryFee = cart.length > 0 ? 15 : 0;
    const total = subtotal - discount + deliveryFee;

    const handleClearCart = () => {
        if (window.confirm('Are you sure you want to clear your cart?')) {
            dispatch({ type: 'CLEAR_CART' });
        }
    };

    return (
        <Box className={ styles.wrapper }>
            <BreadcrumbTrail />
            <Typography variant="h4" className={ styles.heading }>Your Shopping Cart</Typography>

            <Box className={ styles.content }>
                {/* Cart Items Section */ }
                <Box className={ styles.cartItems }>
                    { cart.length > 0 ? (
                        <Box>
                            { cart.map(item => (
                                <Box key={ item.id } className={ styles.cartItem }>
                                    <img src={ item.image } alt={ item.title } className={ styles.image } />
                                    <Box className={ styles.details }>
                                        <Typography variant="h6">{ item.title }</Typography>
                                        <Typography variant="body2">Size: { item.size }</Typography>
                                        <Typography variant="body2">Color: { item.color }</Typography>
                                        <Typography variant="body2">Qty: { item.quantity }</Typography>
                                    </Box>
                                    <Typography variant="body1" className={ styles.price }>{ item.price }</Typography>
                                    <IconButton
                                        onClick={ () => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id }) }
                                        className={ styles.removeButton }
                                        size="small"
                                    >
                                        <DeleteOutlineIcon />
                                    </IconButton>
                                </Box>
                            )) }

                            {/* Clear All Button */ }
                            <Button
                                onClick={ handleClearCart }
                                sx={ {
                                    backgroundColor: '#f44336',
                                    color: 'white',
                                    marginTop: '1rem',
                                    borderRadius: '20px',
                                    padding: '0.5rem 1rem',
                                    fontWeight: 500,
                                    fontSize: '0.875rem',
                                    textTransform: 'none',
                                    boxShadow: 'none',
                                    '&:hover': {
                                        backgroundColor: '#d32f2f',
                                    },
                                } }
                            >
                                Clear All
                            </Button>
                        </Box>
                    ) : (
                        <Box
                            sx={ {
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minHeight: '300px',
                                textAlign: 'center',
                                backgroundColor: '#f9f9f9',
                                borderRadius: '12px',
                                padding: '2rem',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                            } }
                        >
                            <Typography
                                variant="h6"
                                sx={ {
                                    fontWeight: 500,
                                    fontSize: '1.25rem',
                                    color: '#555',
                                } }
                            >
                                Your cart is empty.
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={ {
                                    marginTop: '0.5rem',
                                    color: '#888',
                                } }
                            >
                                Add some products to get started.
                            </Typography>
                            <Button
                                onClick={ () => navigate('/') }
                                sx={ {
                                    marginTop: '1.5rem',
                                    backgroundColor: '#000',
                                    color: '#fff',
                                    padding: '0.5rem 1.25rem',
                                    borderRadius: '30px',
                                    fontWeight: 600,
                                    fontSize: '0.875rem',
                                    textTransform: 'uppercase',
                                    '&:hover': {
                                        backgroundColor: '#fff',
                                        color: '#000',
                                        border: '2px solid #000',
                                    },
                                } }
                            >
                                Continue Shopping
                            </Button>

                        </Box>
                    ) }
                </Box>

                {/* Order Summary Section */ }
                { cart.length > 0 && (
                    <Box className={ styles.summary }>
                        <Typography variant="h6">Order Summary</Typography>
                        <Box className={ styles.row }>
                            <Typography>Subtotal</Typography>
                            <Typography>${ subtotal.toFixed(2) }</Typography>
                        </Box>
                        <Box className={ styles.row }>
                            <Typography>Discount (20%)</Typography>
                            <Typography>–${ discount.toFixed(2) }</Typography>
                        </Box>
                        <Box className={ styles.row }>
                            <Typography>Delivery Fee</Typography>
                            <Typography>${ deliveryFee.toFixed(2) }</Typography>
                        </Box>
                        <Divider sx={ { margin: '1rem 0' } } />
                        <Box className={ styles.row }>
                            <Typography fontWeight={ 600 }>Total</Typography>
                            <Typography fontWeight={ 600 }>${ total.toFixed(2) }</Typography>
                        </Box>

                        <Box className={ styles.promo }>
                            <TextField
                                variant="outlined"
                                placeholder="Add promo code"
                                size="small"
                                className={ styles.promoInput }
                            />
                            <Button
                                sx={ {
                                    backgroundColor: '#000000ff',
                                    color: 'white',
                                    borderRadius: '8px',
                                    padding: '0.5rem 1rem',
                                    fontWeight: 500,
                                    fontSize: '0.875rem',
                                    textTransform: 'none',
                                    boxShadow: 'none',
                                    '&:hover': {
                                        backgroundColor: '#ffffffff',
                                        border: '1px black solid'
                                    },
                                } }
                            >
                                Apply
                            </Button>
                        </Box>

                        <Button
                            onClick={ () => navigate('/checkout') }
                            sx={ {
                                backgroundColor: '#000',
                                color: '#fff',
                                width: '100%',
                                marginTop: '1.5rem',
                                padding: '0.75rem',
                                borderRadius: '30px',
                                fontWeight: 600,
                                fontSize: '1rem',
                                textTransform: 'uppercase',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    backgroundColor: '#fff',
                                    color: '#000',
                                    border: '2px solid #000',
                                },
                            } }
                        >
                            Go to Checkout
                        </Button>
                    </Box>
                ) }
            </Box>
        </Box>
    );
};

export default CartPage;
