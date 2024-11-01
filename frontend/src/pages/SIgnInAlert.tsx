// src/pages/SignInAlert.tsx
import { Stack, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SignInAlert = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/login");
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
      <Typography variant="h5">You need to sign in to continue</Typography>
      <Button
        variant="contained"
        sx={{ width: '325px', borderRadius: 5, bgcolor: 'black', mt: 2 }}
        onClick={handleSignIn}
      >
        <Typography textTransform='capitalize'>
          Go to sign in
        </Typography>
      </Button>
    </Stack>
  );
};

export default SignInAlert;
