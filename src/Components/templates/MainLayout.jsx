import { Box } from '@mui/material';
import Footer from '../organisms/Footer/Footer';
import Header from '../organisms/Header/Header';

const MainLayout = ({ children, hideHeader }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      bgcolor="#f9f9f9"
    >
      {!hideHeader && <Header />}

      <Box component="main" flex={1}>
        {children}
      </Box>

      <Footer />
    </Box>
  );
};

export default MainLayout;
