import { Box, Typography } from '@mui/material';
import StarRating from '../../atoms/StarRating/StarRating';
import styles from './ReviewCard.module.scss';

const ReviewCard = ({ name, rating, date, comment }) => (
  <Box className={styles.card}>
    <Typography className={styles.name}>{name}</Typography>
    <Box className={styles.ratingWrapper}>
    <StarRating rating={rating} />
    </Box>
    <Typography className={styles.date}>{date}</Typography>
    <Typography className={styles.comment}>{comment}</Typography>
  </Box>
);

export default ReviewCard;
