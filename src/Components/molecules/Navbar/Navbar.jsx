import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  InputBase,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { products } from '../../../Data/Product'; // ✅ Import product data
import styles from './Navbar.module.scss';

const NavbarComp = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

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

    setSearchTerm(''); // ✅ Clear input after search
  }
};


  const scrollToNewArrivals = () => {
    navigate('/home'); // ✅ Navigate first
    setTimeout(() => {
      const section = document.getElementById('new-arrivals');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Delay to ensure DOM is ready
  };

  

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
            <Link to="/home" className={styles.logoLink}>SHOP.CO</Link> {/* ✅ Logo link */}
          </Box>
          <ul className={styles.links}>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/sale">On Sale</Link></li>
            <li><span onClick={scrollToNewArrivals} className={styles.link}>New Arrivals</span></li> {/* ✅ Scroll trigger */}
            <li><Link to="/brands">Brands</Link></li>
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
              onKeyDown={handleSearch} // ✅ Search trigger
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
            <ShoppingCartOutlinedIcon />
            <AccountCircleOutlinedIcon />
          </Box>
        </Box>
      </Toolbar>

      {/* Mobile dropdown */}
      <Box className={`${styles.dropdown} ${menuOpen ? styles.open : ''}`}>
        <ul className={styles.links}>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/sale">On Sale</Link></li>
          <li><span onClick={scrollToNewArrivals} className={styles.link}>New Arrivals</span></li>
          <li><Link to="/brands">Brands</Link></li>
        </ul>

        <Box className={styles.icons}>
          <ShoppingCartOutlinedIcon />
          <AccountCircleOutlinedIcon />
        </Box>
      </Box>
    </AppBar>
  );
};

export default NavbarComp;
