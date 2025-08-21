import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import styles from './TabSwitcher.module.scss';

const TabSwitcher = ({ tabs = [], defaultIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <Box className={styles.wrapper}>
      <Box className={styles.tabList}>
        {tabs.map((tab, index) => (
          <Typography
            key={index}
            className={`${styles.tab} ${activeIndex === index ? styles.active : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            {tab.label}
          </Typography>
        ))}
      </Box>
      <Box className={styles.content}>
        {tabs[activeIndex]?.content}
      </Box>
    </Box>
  );
};

export default TabSwitcher;
