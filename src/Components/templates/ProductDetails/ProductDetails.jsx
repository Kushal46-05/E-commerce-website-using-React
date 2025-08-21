import { Box, Typography } from '@mui/material';
import StarRating from '../../atoms/StarRating/StarRating';
import ReviewList from '../../organisms/ReviewList/ReviewList';
import { reviews } from '../../../Data/Review'; 
import styles from './ProductDetails.module.scss';

const ProductDetails = ({ product }) => {
  const { id, title, price, rating, image, category } = product;
  const productReviews = reviews.filter(r => r.productId === id);

  return (
    <Box className={styles.details}>
      <img src={image} alt={title} className={styles.image} />

      <Box className={styles.info}>
        <Typography variant="h5" className={styles.title}>
          {title}
        </Typography>
        <Typography variant="h6" className={styles.price}>
          {price}
        </Typography>
        <StarRating rating={rating} />
        <Typography variant="caption" className={styles.category}>
          {category}
        </Typography>
      </Box>

      <ReviewList reviews={productReviews} />
    </Box>
  );
};

export default ProductDetails;
