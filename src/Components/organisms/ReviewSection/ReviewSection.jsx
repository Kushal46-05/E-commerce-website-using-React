import { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import ReviewCard from '../../atoms/ReviewCard/ReviewCard';
import styles from './ReviewSection.module.scss';
import Button from '../../atoms/Button/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const ReviewSection = ({ reviews }) => {
    const [visibleCount, setVisibleCount] = useState(6);

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 6);
    };

    const visibleReviews = reviews.slice(0, visibleCount);
    const midpoint = Math.ceil(visibleReviews.length / 2);
    const leftColumn = visibleReviews.slice(0, midpoint);
    const rightColumn = visibleReviews.slice(midpoint);

    return (
        <Box className={ styles.section }>
            <Container maxWidth="lg">
                {/* Top Header */ }
                <Box className={ styles.topBar }>
                    <Typography variant="h6" className={ styles.reviewTitle }>
                        All Reviews ({ reviews.length })
                    </Typography>

                    <Box className={ styles.actions }>
                        <Box className={ styles.tuneIcon }>
                            <TuneIcon fontSize="small" />
                        </Box>

                        <Box className={ styles.latestDropdown }>
                            <Typography variant="body2">Latest</Typography>
                            <ArrowDropDownIcon fontSize="small" />
                        </Box>


                        <Button
                            variant="contained"
                            sx={ {
                                backgroundColor: '#000',
                                color: '#fff',
                                textTransform: 'none',
                                padding: '6px 16px',
                                fontWeight: 500,
                                borderRadius: '20px',
                                '&:hover': {
                                    backgroundColor: '#000',
                                    color: '#fff',
                                },
                            } }
                        >
                            Write a Review
                        </Button>

                    </Box>
                </Box>

                {/* Review Columns */ }
                <Box className={ styles.columns }>
                    <Box className={ styles.column }>
                        { leftColumn.map((review, index) => (
                            <ReviewCard key={ `left-${index}` } { ...review } />
                        )) }
                    </Box>
                    <Box className={ styles.column }>
                        { rightColumn.map((review, index) => (
                            <ReviewCard key={ `right-${index}` } { ...review } />
                        )) }
                    </Box>
                </Box>

                {/* Load More */ }
                { visibleCount < reviews.length && (
                    <Box className={ styles.buttonWrapper }>
                        <Button variant="outlined" onClick={ handleLoadMore }>
                            Load More Reviews
                        </Button>
                    </Box>
                ) }
            </Container>
        </Box>
    );
};

export default ReviewSection;
