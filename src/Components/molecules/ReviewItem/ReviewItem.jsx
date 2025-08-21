import { Box, Typography } from '@mui/material';
import StarRating from '../../atoms/StarRating/StarRating';
import styles from './ReviewItem.module.scss';

const ReviewItem = ({ user, rating, comment, date }) => {
  return (
    <Box className={styles.card}>
      <Typography variant="subtitle1" className={styles.name}>
        {user}
      </Typography>
      <StarRating rating={rating} />
      <Typography variant="body2" className={styles.comment}>
        {comment}
      </Typography>
      <Typography variant="caption" className={styles.date}>
        {date}
      </Typography>
    </Box>
  );
};

export default ReviewItem;
