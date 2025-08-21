import { useForm, Controller } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, InputAdornment, Stack } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

import styles from './SignupForm.module.scss';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';

const SignupForm = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (data) => {
    toast.success(`Welcome aboard, ${data.name}!`);
    console.log('✅ Signup data:', data);
    reset();
    navigate('/home');
  };

  const onError = (formErrors) => {
    console.log('❌ Signup validation errors:', formErrors);
  };

  return (
    <Box className={styles.wrapper}>
      <Box className={styles.left}>
        <Typography variant="h3" component="h1">
          SHOP.CO
        </Typography>
        <Typography variant="body1">
          Style meets speed. Join the movement.
        </Typography>
      </Box>

      <Box className={styles.right}>
        <Box className={styles.formContainer}>
          <Typography variant="h5" component="h1" gutterBottom>
            SIGN UP
          </Typography>

          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <Stack spacing={2}>
              <Controller
                name="name"
                control={control}
                rules={{ required: 'Name is required' }}
                render={({ field, fieldState }) => (
                  <Input
                    label="Name"
                    placeholder="Enter your name"
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
                    placeholder="Enter your email"
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
                    placeholder="Create a password"
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

              <Controller
                name="confirmPassword"
                control={control}
                rules={{
                  required: 'Please confirm your password',
                  validate: (value) =>
                    value === watch('password') || 'Passwords do not match',
                }}
                render={({ field, fieldState }) => (
                  <Input
                    label="Confirm Password"
                    type="password"
                    placeholder="Re-enter your password"
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
                text="SIGN UP"
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
                text="LOGIN"
                fullWidth
                variant="outlined"
                sx={{
                  borderColor: '#000',
                  color: '#000',
                  '&:hover': {
                    backgroundColor: '#000',
                    color: '#fff',
                  },
                }}
                onClick={() => navigate('/login')}
              />
            </Stack>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default SignupForm;
