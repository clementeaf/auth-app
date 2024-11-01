import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';

export default function Login() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSignIn = () => {
    if (formData.userName && formData.password) {
      login(formData.userName);
      navigate('/home');
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        bgcolor: 'whitesmoke',
      }}
    >
      <Box
        sx={{
          width: '400px',
          height: 'auto',
          bgcolor: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          border: '0.5px solid lightgrey',
          boxShadow: '0 10px 10px rgba(0, 0, 0, 0.05)',
          p: 7,
          gap: 2,
        }}
      >
        <Typography>SignIn</Typography>
        <TextField
          name="userName"
          label="User Name"
          onChange={handleInputChange}
          value={formData.userName}
          fullWidth
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          onChange={handleInputChange}
          value={formData.password}
          fullWidth
        />
        <Button
          variant="contained"
          sx={{ width: '100%', borderRadius: 5, bgcolor: 'black', mt: 2 }}
          onClick={handleSignIn}
        >
          Sign in
        </Button>
      </Box>
    </Stack>
  );
}
