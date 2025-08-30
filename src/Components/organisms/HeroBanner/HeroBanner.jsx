import { Box, Typography, Container } from '@mui/material';
import styles from './HeroBanner.module.scss';
import heroImg from '../../../assets/product/heroImg.jpg';
import Button from '../../atoms/Button/Button';
import { useNavigate } from 'react-router-dom';

export default function HeroBanner() {
   const navigate = useNavigate();
  return (
    <Box component="section" className={ styles.hero }>
      <Container maxWidth="xl" disableGutters>
        <Box className={ styles.heroInner }>
          <Box className={ styles.textBlock }>
            <Typography variant="h2" className={ styles.heading }>
              FIND CLOTHES THAT MATCH YOUR STYLE
            </Typography>

            <Typography variant="body1" className={ styles.subheading }>
              Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </Typography>

            <Button
              onClick={() => navigate('/shop')}
              aria-label="Shop clothing now"
              sx={ {
                
                backgroundColor: '#000',
                color: '#fff',
                padding: '0.75rem 1.5rem',
                borderRadius: '4px',
                fontWeight: 800,
                textTransform: 'none',
                transition: 'background-color 0.3s ease',
                '&:hover': {
                  backgroundColor: '#ffffffff',
                  color: 'black'
                },
              } }
            >
              Shop Now
            </Button>

            <Box className={ styles.stats }>
              <Box className={ styles.stat }>200+ International Brands</Box>
              <Box className={ styles.stat }>2,000+ High-Quality Products</Box>
              <Box className={ styles.stat }>30,000+ Happy Customers</Box>
            </Box>
          </Box>

          <Box className={ styles.imageBlock }>
            <img
              src={ heroImg }
              alt="Stylish jackets"
              className={ styles.heroImage }
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
