import { Stack } from '@mui/material'

export default function Home() {
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
            Home
        </Stack>
    )
}
