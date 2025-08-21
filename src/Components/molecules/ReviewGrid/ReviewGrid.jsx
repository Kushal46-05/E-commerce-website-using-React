import { Grid } from '@mui/material';
import ReviewCard from '../../atoms/ReviewCard/ReviewCard';
import styles from './ReviewGrid.module.scss';

const ReviewGrid = ({ reviews }) => (
  <Grid container spacing={4} className={styles.grid}>
    {reviews.map((review, index) => (
      <Grid item xs={12} md={6} key={index}>
        <ReviewCard {...review} />
      </Grid>
    ))}
  </Grid>
);

export default ReviewGrid;
