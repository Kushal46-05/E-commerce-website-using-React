import { TextField } from '@mui/material';
import styles from './Input.module.scss';

const Input = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  helperText,
  required = false,
  fullWidth = true,
  variant = 'outlined',
  sx = {},
  ...rest
}) => {
  return (
    <TextField
      label={label}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={!!error}
      helperText={helperText}
      required={required}
      fullWidth={fullWidth}
      variant={variant}
      sx={sx}
      className={styles.input}
      {...rest}
    />
  );
};

export default Input;
