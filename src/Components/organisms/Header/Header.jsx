// src/organisms/Header/Header.jsx

import TopBannerComp from '../../atoms/TopBanner/TopBanner';
import NavbarComp from '../../molecules/Navbar/Navbar';

import { useLocation } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();
  const hideBanner = pathname === '/login' || pathname === '/signup';

  return (
    <>
      {!hideBanner && <TopBannerComp />}
      <NavbarComp />
    </>
  );
};

export default Header;
