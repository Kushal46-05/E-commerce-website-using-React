import { useForm, Controller } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, InputAdornment, Stack } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

import styles from './LoginForm.module.scss';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';

const LoginForm = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data) => {
    toast.success(`Welcome back, ${data.email}!`);
    console.log('✅ Submitted data:', data);
    reset();
    navigate('/home');
  };

  const onError = (formErrors) => {
    console.log('❌ Validation errors:', formErrors);
  };

  return (
    <Box className={styles.wrapper}>
      <Box className={styles.left}>
        <Typography variant="h4" component="h1">
          SHOP.CO
        </Typography>
        <Typography variant="body1">Place for trendy outfits</Typography>
      </Box>

      <Box className={styles.right}>
        <Box className={styles.formContainer}>
          <Typography variant="h5" component="h1" gutterBottom>
            SIGN IN
          </Typography>

          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <Stack spacing={2}>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: 'Enter a valid email',
                  },
                }}
                render={({ field, fieldState }) => (
                  <Input
                    label="Email"
                    placeholder="Enter your e-mail"
                    {...field}
                    error={fieldState.invalid}
                    helperText={fieldState.error?.message}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />

              <Controller
                name="password"
                control={control}
                rules={{
                  required: 'Password is required',
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:
                      'Password must be at least 8 characters and include uppercase, lowercase, number, and special character',
                  },
                }}
                render={({ field, fieldState }) => (
                  <Input
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                    error={fieldState.invalid}
                    helperText={fieldState.error?.message}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />

              <Button
                type="submit"
                text="LOGIN"
                fullWidth
                sx={{
                  backgroundColor: '#000',
                  color: '#fff',
                  '&:hover': {
                    backgroundColor: '#333',
                  },
                }}
              />

              <Typography className={styles.or}>OR</Typography>

              <Button
                text="REGISTER"
                fullWidth
                variant="outlined"
                sx={{
                  borderColor: '#000',
                  color: '#000',
                  '&:hover': {
                    backgroundColor: '#040404ff',
                    color: 'white',
                  },
                }}
                onClick={() => navigate('/signup')}
              />
            </Stack>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;
