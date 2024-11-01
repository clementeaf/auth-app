import { Stack } from '@mui/material';

export default function UnAuthorized() {
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
            You are not authorized to access this page
        </Stack>
    )
}
