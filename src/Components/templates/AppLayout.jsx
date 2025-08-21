import { useLocation, Outlet } from 'react-router-dom';
import MainLayout from './MainLayout';

const AppLayout = () => {
  const { pathname } = useLocation();
  const hideHeader = pathname === '/login' || pathname === '/signup';

  return (
    <MainLayout hideHeader={hideHeader}>
      <Outlet />
    </MainLayout>
  );
};

export default AppLayout;
