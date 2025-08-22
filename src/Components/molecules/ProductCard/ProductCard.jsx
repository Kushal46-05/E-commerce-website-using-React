import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import styles from './ProductCard.module.scss';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, title, price, rating, image }) => {
  const renderStars = () => {
    const safeRating = typeof rating === 'number' && rating >= 0 ? Math.min(rating, 5) : 0;
    const fullStars = Math.floor(safeRating);
    const halfStar = safeRating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <StarIcon key={`full-${i}`} className={styles.star} />
        ))}
        {halfStar && <StarHalfIcon className={styles.star} />}
        {[...Array(emptyStars)].map((_, i) => (
          <StarOutlineIcon key={`empty-${i}`} className={styles.star} />
        ))}
      </>
    );
  };

  return (
    <Link to={`/product/${id}`} className={styles.link}>
      <Card className={styles.card} elevation={3}>
        <CardMedia
          component="img"
          image={image}
          alt={title}
          className={styles.image}
        />
        <CardContent className={styles.content}>
          <Typography variant="h6" className={styles.title}>
            {title}
          </Typography>
          <Typography variant="body2" className={styles.price}>
            {price}
          </Typography>
          <Box className={styles.rating}>
            {renderStars()}
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
