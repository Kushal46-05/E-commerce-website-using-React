import { useParams, Link as RouterLink, useNavigate } from 'react-router-dom';
import { products } from '../../../Data/Product';
import { reviews as reviewData } from '../../../Data/Review';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Breadcrumbs,
  Link,
  Snackbar
} from '@mui/material';
import { useState, useEffect } from 'react';

import StarRating from '../../atoms/StarRating/StarRating';
import ColorSwatch from '../../atoms/ColorSwatch/ColorSwatch';
import QuantitySelector from '../../atoms/QuantitySelector/QuantitySelector';
import SizeSelector from '../../molecules/SizeSelector/SizeSelector';
import Button from '../../atoms/Button/Button';
import ReviewSection from '../../organisms/ReviewSection/ReviewSection';
import RelatedProducts from '../../organisms/RelatedProducts/RelatedProducts';

import { useCart } from '../../../context/CartContext';
import styles from './ProductPage.module.scss';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useCart();

  const product = products.find(p => p.id === parseInt(id));
  const productReviews = reviewData[product?.id] || [];

  const [tabIndex, setTabIndex] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!product) return <Typography variant="h6">Product not found</Typography>;

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      setErrorMessage('Please select both size and color before adding to cart.');
      return;
    }

    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        size: selectedSize,
        color: selectedColor,
        quantity: quantity || 1, // Defensive fallback
      }
    });

    setAddedToCart(true);
  };

  return (
    <Box className={styles.page}>
      {/* Breadcrumbs */}
      <Box className={styles.breadcrumbWrapper}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link component={RouterLink} to="/" underline="hover" color="inherit">Home</Link>
          <Link component={RouterLink} to="/shop" underline="hover" color="inherit">Shop</Link>
          <Typography color="text.primary">{product.title}</Typography>
        </Breadcrumbs>
      </Box>

      {/* Hero Section */}
      <Box className={styles.hero}>
        <Box className={styles.left}>
          <img src={product.image} alt={product.title} className={styles.mainImage} />
        </Box>

        <Box className={styles.right}>
          <Typography variant="h4" className={styles.title}>{product.title}</Typography>
          <Box className={styles.ratingBlock}>
            <StarRating rating={product.rating} />
            <Typography variant="body2" className={styles.ratingText}>
              {product.rating.toFixed(1)} / 5
            </Typography>
          </Box>

          {/* Dynamic Pricing */}
          <Box className={styles.price}>
            <Typography variant="h6" className={styles.discounted}>{product.price}</Typography>
            {product.originalPrice && (
              <Typography variant="body2" className={styles.original}>{product.originalPrice}</Typography>
            )}
            {product.discountPercent && (
              <Typography variant="body2" className={styles.offer}>{product.discountPercent}% OFF</Typography>
            )}
          </Box>

          <Typography variant="body1" className={styles.description}>
            This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
          </Typography>

          <ColorSwatch
            colors={['green', 'blue', 'black']}
            selected={selectedColor}
            onSelect={setSelectedColor}
          />

          <SizeSelector
            sizes={['S', 'M', 'L', 'XL']}
            selected={selectedSize}
            onSelect={setSelectedSize}
          />

          <Box className={styles.actionRow}>
            <QuantitySelector
              defaultValue={1}
              min={1}
              max={10}
              onChange={setQuantity}
            />

            {!addedToCart ? (
              <Button
                className={styles.addToCartButton}
                onClick={handleAddToCart}
                sx={{
                  backgroundColor: 'black',
                  color: 'white',
                  borderRadius: '50px',
                  width: '250px',
                  padding: '0.75rem 1.5rem',
                  fontWeight: 600,
                  fontSize: '1rem',
                  marginTop: '50px',
                  border: 'none',
                  transition: 'all 0.3s ease',
                  height: '40px',
                  '&:hover': {
                    backgroundColor: 'white',
                    color: 'black',
                    border: '2px solid black',
                  },
                  '@media (max-width:768px)': {
                    width: '100%',
                  },
                }}
              >
                Add to Cart
              </Button>
            ) : (
              <Button
                className={styles.addToCartButton}
                onClick={() => navigate('/cart')}
                sx={{
                  backgroundColor: '#4caf50',
                  color: 'white',
                  borderRadius: '50px',
                  width: '250px',
                  padding: '0.75rem 1.5rem',
                  fontWeight: 600,
                  fontSize: '1rem',
                  marginTop: '50px',
                  border: 'none',
                  transition: 'all 0.3s ease',
                  height: '40px',
                  '&:hover': {
                    backgroundColor: '#388e3c',
                  },
                  '@media (max-width:768px)': {
                    width: '100%',
                  },
                }}
              >
                Go to Cart
              </Button>
            )}
          </Box>
        </Box>
      </Box>

      {/* Tabs Section */}
      <Box className={styles.tabs}>
        <Tabs value={tabIndex} onChange={(e, val) => setTabIndex(val)} centered>
          <Tab label="Product Details" />
          <Tab label="Rating & Reviews" />
          <Tab label="FAQs" />
        </Tabs>

        <Box mt={3}>
          {tabIndex === 0 && (
            <Box className={styles.centeredContent}>
              <Typography variant="body1">
                Soft cotton blend, machine washable, made for everyday wear.
              </Typography>
            </Box>
          )}
          {tabIndex === 1 && <ReviewSection reviews={productReviews} />}
          {tabIndex === 2 && (
            <Box className={styles.centeredContent}>
              <Typography variant="body1">
                For sizing, shipping, and return policies, please visit our FAQ section.
              </Typography>
            </Box>
          )}
        </Box>
      </Box>

      {/* Related Products */}
      <Box mt={6}>
        <RelatedProducts />
      </Box>

      {/* Snackbar Confirmation */}
      <Snackbar
        open={addedToCart}
        autoHideDuration={3000}
        onClose={() => setAddedToCart(false)}
        message="Added to cart!"
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      />

      {/* Snackbar Error */}
      <Snackbar
        open={!!errorMessage}
        autoHideDuration={3000}
        onClose={() => setErrorMessage('')}
        message={errorMessage}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        ContentProps={{ sx: { backgroundColor: '#d32f2f' } }}
      />
    </Box>
  );
};

export default ProductPage;
