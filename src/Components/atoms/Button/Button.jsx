import { Button as MuiButton } from '@mui/material';
import styles from './Button.module.scss';

const Button = ({
  text,
  children,
  type = 'button',
  onClick,
  disabled = false,
  variant = 'contained',
  color = 'primary',
  fullWidth = false,
  sx = {},
}) => {
  return (
    <MuiButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      color={color}
      fullWidth={fullWidth}
      sx={sx}
      className={styles.button}
    >
      {text || children}
    </MuiButton>
  );
};

export default Button;
