import { Breadcrumbs, Typography, Link } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const BreadcrumbTrail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const segments = location.pathname.split('/').filter(Boolean);

  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
      <Link underline="hover" color="inherit" onClick={() => navigate('/')}>
        Home
      </Link>
      {segments.map((seg, i) => (
        <Typography key={i} color="text.primary">
          {seg.charAt(0).toUpperCase() + seg.slice(1)}
        </Typography>
      ))}
    </Breadcrumbs>
  );
};

export default BreadcrumbTrail;
