import { Box, Typography } from '@mui/material';

const NotFoundPage = () => (
  <Box sx={{ textAlign: 'center', mt: 10 }}>
    <Typography variant="h3">404 - Product Not Found</Typography>
    <Typography variant="body1" sx={{ mt: 2 }}>
      We couldn’t find what you were looking for.
    </Typography>
  </Box>
);

export default NotFoundPage;
