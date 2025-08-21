import { Box, Typography } from '@mui/material';
import styles from './FooterColumn.module.scss';

const FooterColumn = ({ title, links }) => (
  <Box className={styles.column}>
    <Typography variant="subtitle1" component="h4">
      {title}
    </Typography>
    <ul>
      {links.map((link, i) => (
        <li key={i} className={styles.link}>
          {link}
        </li>
      ))}
    </ul>
  </Box>
);

export default FooterColumn;
