import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  InputBase,
  useMediaQuery,
  useTheme,
  Badge,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { products } from '../../../Data/Product';
import { useCart } from '../../../context/CartContext';
import styles from './Navbar.module.scss';

const NavbarComp = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const { cart } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      const foundProduct = products.find(p =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      if (foundProduct) {
        navigate(`/product/${foundProduct.id}`);
      } else {
        navigate('/404');
      }

      setSearchTerm('');
    }
  };

  const scrollToNewArrivals = () => {
    navigate('/home');
    setTimeout(() => {
      const section = document.getElementById('new-arrivals');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const cartCount = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);

  return (
    <AppBar
      position="sticky"
      elevation={scrolled ? 4 : 0}
      className={`${styles.navbar} ${scrolled ? styles.shadow : ''}`}
      sx={{ backgroundColor: '#fff', color: '#000' }}
    >
      <Toolbar className={styles.toolbar}>
        <Box className={styles.left}>
          <Box className={styles.logo}>
            <span onClick={() => navigate('/home')} className={styles.logoLink}>SHOP.CO</span>
          </Box>
          <ul className={styles.links}>
            <li><span onClick={() => navigate('/shop')} className={styles.link}>Shop</span></li>
            <li><span onClick={() => navigate('/sale')} className={styles.link}>On Sale</span></li>
            <li><span onClick={scrollToNewArrivals} className={styles.link}>New Arrivals</span></li>
            <li><span onClick={() => navigate('/brands')} className={styles.link}>Brands</span></li>
          </ul>
        </Box>

        <Box className={styles.right}>
          <Box className={styles.search}>
            <SearchIcon />
            <InputBase
              placeholder="Search for products..."
              className={styles.input}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleSearch}
            />
            <IconButton
              className={styles.menuToggle}
              onClick={() => setMenuOpen(prev => !prev)}
              edge="end"
              size="large"
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>

          <Box className={styles.icons}>
            <IconButton onClick={() => navigate('/cart')} size="large">
              <Badge badgeContent={cartCount} color="primary" showZero>
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
            <IconButton size="large">
              <AccountCircleOutlinedIcon />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>

      {/* Mobile dropdown */}
      <Box className={`${styles.dropdown} ${menuOpen ? styles.open : ''}`}>
        <ul className={styles.links}>
          <li><span onClick={() => navigate('/shop')} className={styles.link}>Shop</span></li>
          <li><span onClick={() => navigate('/sale')} className={styles.link}>On Sale</span></li>
          <li><span onClick={scrollToNewArrivals} className={styles.link}>New Arrivals</span></li>
          <li><span onClick={() => navigate('/brands')} className={styles.link}>Brands</span></li>
        </ul>

        <Box className={styles.icons}>
          <IconButton onClick={() => navigate('/cart')} size="large">
            <Badge badgeContent={cartCount} color="primary" showZero>
              <ShoppingCartOutlinedIcon />
            </Badge>
          </IconButton>
          <IconButton size="large">
            <AccountCircleOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
    </AppBar>
  );
};

export default NavbarComp;
