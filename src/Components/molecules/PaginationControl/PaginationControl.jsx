import { Pagination } from '@mui/material';

const PaginationControl = ({ page, setPage, totalPages }) => (
  <Pagination
    count={totalPages}
    page={page}
    onChange={(_, value) => setPage(value)}
    color="primary"
    sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}
  />
);

export default PaginationControl;
