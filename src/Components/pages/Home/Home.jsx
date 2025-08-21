// src/pages/Home/Home.jsx
import { Box, Container, Divider } from '@mui/material';
import HeroBanner from '../../organisms/HeroBanner/HeroBanner';
import BrandStrip from '../../organisms/BrandStrip/BrandStrip';
import ProductGrid from '../../organisms/ProductGrid/ProductGrid';
import DressStyleCategories from '../../organisms/DressStyleCategories/DressStyleCategories';
import CustomerTestimonials from '../../organisms/CustomerTestimonials/CustomerTestimonials';
import { products } from '../../../Data/Product';

const Home = () => {
  const newArrivals = products.filter(product => product.category === 'new');
  const topSelling = products.filter(product => product.category === 'top');

  return (
    <Container maxWidth="xl">
      <HeroBanner />
      <BrandStrip />

      {/* 🔽 Scroll target for New Arrivals */}
      <Box id="new-arrivals" sx={{ mt: 6 }}>
        <ProductGrid title="NEW ARRIVALS" products={newArrivals} showViewMore />
      </Box>

      <Divider sx={{ my: 6 }} />

      <Box sx={{ mt: 6 }}>
        <ProductGrid title="TOP SELLING" products={topSelling} showViewMore />
      </Box>

      <Divider sx={{ my: 6 }} />

      <Box sx={{ mt: 6 }}>
        <DressStyleCategories />
      </Box>

      <Box sx={{ mt: 6 }}>
        <CustomerTestimonials />
      </Box>
    </Container>
  );
};

export default Home;
