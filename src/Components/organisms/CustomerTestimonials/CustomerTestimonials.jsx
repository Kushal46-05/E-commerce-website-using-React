import { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from './CustomerTestimonials.module.scss';
import { testimonials } from '../../../Data/Testimonials';

const CustomerTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Box component="section" className={styles.testimonialSection}>
      <Typography variant="h4" className={styles.heading}>
        OUR HAPPY CUSTOMERS
      </Typography>

      <Box className={styles.carousel}>
        <IconButton
          className={styles.arrowLeft}
          onClick={handlePrev}
          aria-label="Previous testimonial"
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        <Box className={styles.cardsWrapper}>
          {testimonials.map((testimonial, index) => {
            const position = index - currentIndex;

            return (
              <Box
                key={testimonial.id}
                className={`${styles.card} ${
                  position === 0
                    ? styles.center
                    : Math.abs(position) === 1
                    ? styles.side
                    : styles.hidden
                }`}
              >
                <Typography className={styles.stars}>★★★★★</Typography>
                <Typography className={styles.name}>
                  {testimonial.name}{' '}
                  <span className={styles.verified}>✔</span>
                </Typography>
                <Typography className={styles.text}>
                  {testimonial.text}
                </Typography>
              </Box>
            );
          })}
        </Box>

        <IconButton
          className={styles.arrowRight}
          onClick={handleNext}
          aria-label="Next testimonial"
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CustomerTestimonials;
