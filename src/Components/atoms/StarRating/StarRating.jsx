import { Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import styles from './StarRating.module.scss';

const StarRating = ({ rating = 0 }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <Box className={styles.stars}>
      {[...Array(fullStars)].map((_, i) => (
        <StarIcon key={`full-${i}`} className={styles.star} />
      ))}
      {halfStar && <StarHalfIcon className={styles.star} />}
      {[...Array(emptyStars)].map((_, i) => (
        <StarOutlineIcon key={`empty-${i}`} className={styles.star} />
      ))}
    </Box>
  );
};

export default StarRating;
