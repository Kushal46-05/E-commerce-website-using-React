import { useState } from 'react';
import { Box, Typography, Button, Grid, Container } from '@mui/material';
import StarRating from '../../atoms/StarRating/StarRating';

const ReviewList = ({ reviews }) => {
    const [visibleCount, setVisibleCount] = useState(4); // Show 4 reviews initially

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 4); // Load 4 more each time
    };

    return (
        <Box className="reviewSection">
           <Container maxWidth="md">
  <Grid container spacing={4}>
    {reviews.slice(0, visibleCount).map((review, index) => (
      <Grid item xs={12} md={6} key={index}>
        <Box sx={{
          backgroundColor: '#fff',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
          textAlign: 'center'
        }}>
          <Typography variant="h6">{review.name}</Typography>
          <StarRating rating={review.rating} />
          <Typography variant="body2" color="text.secondary">{review.date}</Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>{review.comment}</Typography>
        </Box>
      </Grid>
    ))}
  </Grid>

  {visibleCount < reviews.length && (
    <Box mt={4} display="flex" justifyContent="center">
      <Button variant="outlined" onClick={handleLoadMore}>
        Load More Reviews
      </Button>
    </Box>
  )}
</Container>

        </Box>
    );
};

export default ReviewList;
